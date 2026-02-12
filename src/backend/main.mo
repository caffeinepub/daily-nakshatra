import Text "mo:core/Text";
import Float "mo:core/Float";
import Int "mo:core/Int";
import Time "mo:core/Time";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Nat "mo:core/Nat";



actor {
  type Nakshatra = {
    name : Text;
    startDegree : Float;
    endDegree : Float;
  };

  type Location = {
    cityName : Text;
    latitude : Float;
    longitude : Float;
  };

  type BirthData = {
    dateOfBirth : Text;
    timeOfBirth : Text;
    location : Location;
    moonNakshatra : Text;
    atmakarakaNakshatra : Text;
  };

  type UserProfile = {
    name : Text;
    email : ?Text;
    isPremium : Bool;
    birthData : ?BirthData;
  };

  module Nakshatra {
    public func equal(n1 : Nakshatra, n2 : Nakshatra) : Bool {
      n1.name == n2.name and n1.startDegree == n2.startDegree and n1.endDegree == n2.endDegree
    };
  };

  func computeNakshatras() : [Nakshatra] {
    let namesArray : [Text] = [
      "Ashwini",
      "Bharani",
      "Krittika",
      "Rohini",
      "Mrigashirsha",
      "Ardra",
      "Punarvasu",
      "Pushya",
      "Ashlesha",
      "Magha",
      "Purva Phalguni",
      "Uttara Phalguni",
      "Hasta",
      "Chitra",
      "Swati",
      "Vishakha",
      "Anuradha",
      "Jyeshtha",
      "Mula",
      "Purva Ashadha",
      "Uttara Ashadha",
      "Shravana",
      "Dhanishta",
      "Shatabhisha",
      "Purva Bhadrapada",
      "Uttara Bhadrapada",
      "Revati",
    ];

    Array.tabulate<Nakshatra>(
      namesArray.size(),
      func(i) {
        let name = namesArray[i];
        let startDegree = i.toFloat() * (40.0 / 3.0);
        let endDegree = startDegree + (40.0 / 3.0);
        {
          name;
          startDegree;
          endDegree;
        };
      },
    );
  };

  let nakshatras = computeNakshatras();

  let checkInEntries = Map.empty<Principal, List.List<CheckInEntry>>();
  let sleepLogEntries = Map.empty<Principal, List.List<SleepLogEntry>>();
  let dreamLogEntries = Map.empty<Principal, List.List<DreamLogEntry>>();
  let birthCharts = Map.empty<Principal, BirthChartData>();

  let localUserProfiles = Map.empty<Principal, UserProfile>();

  // Initialize access control state
  let accessControlState : AccessControl.AccessControlState = AccessControl.initState();

  include MixinAuthorization(accessControlState);

  type CheckInEntry = {
    timestamp : Time.Time;
    dayOfYear : Nat;
    nakshatra : Text;
    mood : ?Text;
    energy : ?Nat;
    restlessness : ?Nat;
  };

  type SleepLogEntry = {
    timestamp : Time.Time;
    dayOfYear : Nat;
    nakshatra : Text;
    sleepNotes : ?Text;
  };

  type DreamLogEntry = {
    timestamp : Time.Time;
    dayOfYear : Nat;
    nakshatra : Text;
    dreamNotes : ?Text;
  };

  type BirthChartData = {
    birthDate : Text;
    moonNakshatra : Text;
    atmakarakaNakshatra : Text;
  };

  func findNakshatraByDegree(lunarLongitude : Float) : ?Nakshatra {
    nakshatras.find(
      func(n) {
        n.startDegree <= lunarLongitude and lunarLongitude < n.endDegree;
      }
    );
  };

  func calculatePada(lunarLongitude : Float, nakshatraStartDegree : Float) : Int {
    let relativePos = lunarLongitude - nakshatraStartDegree;
    Int.min(4, Int.max(1, (relativePos / (10.0 / 3.0)).toInt() + 1));
  };

  func validateDegree(degree : Float) : () {
    if (degree != degree) { Runtime.trap("Lunar longitude must not be NaN") };
  };

  func getCurrentDayOfYear() : Nat {
    let currentTime = Time.now();
    let secondsSinceEpoch = currentTime / 1_000_000_000;
    let daysSinceEpoch = secondsSinceEpoch / 86400;
    let currentYear = 1970 + daysSinceEpoch / 365;
    let dayOfYear = daysSinceEpoch % 365;
    let leapYearsSince1970 = (currentYear - 1970) / 4;
    let adjustedDayOfYear : Int = if (leapYearsSince1970 > 0) {
      dayOfYear + leapYearsSince1970;
    } else {
      dayOfYear;
    };
    adjustedDayOfYear.toNat();
  };

  // User Profile Management

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    localUserProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    localUserProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    localUserProfiles.add(caller, profile);
  };

  // Nakshatra Calculator - Query function (no authentication required for computation)
  public shared query func computeNakshatraData(
    moonLongitude : Float,
    birthTime : Text,
    birthLocation : Location,
    dob : Text,
    timeOfBirth : Text
  ) : async {
    moonNakshatra : Text;
    atmakarakaNakshatra : Text;
    calculatedLongitude : ?Float;
  } {
    let calculatedLongitude : ?Float = null;

    // Moon Nakshatra calculation
    let ?nakshatra = findNakshatraByDegree(moonLongitude) else {
      Runtime.trap("No nakshatra found for given moon longitude");
    };
    let moonNakshatra = nakshatra.name;

    // Atmakaraka Nakshatra calculation (using the same input for demonstration)
    // Replace this with real logic when available
    let ?atmakaraka = findNakshatraByDegree(moonLongitude) else {
      Runtime.trap("No nakshatra found for given longitude");
    };
    let atmakarakaNakshatra = atmakaraka.name;

    {
      moonNakshatra;
      atmakarakaNakshatra;
      calculatedLongitude;
    };
  };

  // Save Birth Data - Requires user authentication
  public shared ({ caller }) func saveBirthData(
    dob : Text,
    timeOfBirth : Text,
    location : Text,
    moonNakshatra : Text,
    atmakarakaNakshatra : Text,
  ) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save birth data");
    };

    let existingProfile = switch (localUserProfiles.get(caller)) {
      case (?profile) { profile };
      case (null) {
        Runtime.trap("Profile not found for caller: " # caller.toText());
      };
    };

    let birthData : BirthData = {
      dateOfBirth = dob;
      timeOfBirth;
      location = {
        cityName = location;
        latitude = 0.0; // Replace with actual latitude if available
        longitude = 0.0; // Replace with actual longitude if available
      };
      moonNakshatra;
      atmakarakaNakshatra;
    };

    let newProfile = {
      existingProfile with
      birthData = ?birthData
    };

    localUserProfiles.add(caller, newProfile);
  };

  // Nakshatra determination - No authentication required (public utility)
  public query func determineNakshatra(lunarLongitude : Float) : async {
    nakshatraName : Text;
    nakshatraNumber : Nat;
    pada : Nat;
    preciseLongitude : Float;
    remainingDegreesInNakshatra : Float;
    remainingDegreesInCurrentPada : Float;
    degreesUntilNextPada : Float;
  } {
    validateDegree(lunarLongitude);

    let normalizedLongitude = lunarLongitude % 360.0;

    let ?nakshatra = findNakshatraByDegree(normalizedLongitude) else {
      Runtime.trap("No nakshatra found for given longitude");
    };

    let nakshatraIndex = nakshatras.indexOf(nakshatra);
    let nakshatraNumber = switch (nakshatraIndex) {
      case (?index) { index + 1 };
      case (null) { Runtime.trap("Nakshatra index not found") };
    };

    let padaNum = calculatePada(normalizedLongitude, nakshatra.startDegree);

    let remainingDegrees = nakshatra.endDegree - normalizedLongitude;
    let remainingDegreesInNakshatra = Float.max(0.0, Float.min(40.0 / 3.0, remainingDegrees));

    let positionInCurrentPada = (normalizedLongitude - nakshatra.startDegree) % (10.0 / 3.0);
    let remainingDegreesInCurrentPada = Float.max(0.0, Float.min(10.0 / 3.0, (10.0 / 3.0) - positionInCurrentPada));
    let degreesUntilNextPada = (10.0 / 3.0) - positionInCurrentPada;

    {
      nakshatraName = nakshatra.name;
      preciseLongitude = normalizedLongitude;
      nakshatraNumber;
      pada = padaNum.toNat();
      remainingDegreesInNakshatra;
      remainingDegreesInCurrentPada;
      degreesUntilNextPada;
    };
  };

  // Get current day of year - No authentication required (public utility)
  public query func getCurrentDayOfYearForCaller() : async Nat {
    getCurrentDayOfYear();
  };

  // Check-in logging - Requires user authentication
  public shared ({ caller }) func saveCheckIn(dayOfYear : Nat, nakshatra : Text, mood : ?Text, energy : ?Nat, restlessness : ?Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save check-ins");
    };

    let newEntry = {
      timestamp = Time.now();
      dayOfYear;
      nakshatra;
      mood;
      energy;
      restlessness;
    };
    let existingEntries = switch (checkInEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<CheckInEntry>() };
    };
    existingEntries.add(newEntry);
    checkInEntries.add(caller, existingEntries);
  };

  // Sleep log - Requires user authentication
  public shared ({ caller }) func saveSleepLog(dayOfYear : Nat, nakshatra : Text, sleepNotes : ?Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save sleep logs");
    };

    let newEntry = {
      timestamp = Time.now();
      dayOfYear;
      nakshatra;
      sleepNotes;
    };
    let existingEntries = switch (sleepLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<SleepLogEntry>() };
    };
    existingEntries.add(newEntry);
    sleepLogEntries.add(caller, existingEntries);
  };

  // Dream log - Requires user authentication
  public shared ({ caller }) func saveDreamLog(dayOfYear : Nat, nakshatra : Text, dreamNotes : ?Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save dream logs");
    };

    let newEntry = {
      timestamp = Time.now();
      dayOfYear;
      nakshatra;
      dreamNotes;
    };
    let existingEntries = switch (dreamLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<DreamLogEntry>() };
    };
    existingEntries.add(newEntry);
    dreamLogEntries.add(caller, existingEntries);
  };

  // Birth chart - Requires user authentication
  public shared ({ caller }) func saveBirthChart(birthDate : Text, moonNakshatra : Text, atmakarakaNakshatra : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save birth charts");
    };

    let newChart = {
      birthDate;
      moonNakshatra;
      atmakarakaNakshatra;
    };
    birthCharts.add(caller, newChart);
  };

  // Get all logs - Requires user authentication (own data only)
  public query ({ caller }) func getAllLogs() : async {
    checkIns : [CheckInEntry];
    sleepLogs : [SleepLogEntry];
    dreamLogs : [DreamLogEntry];
    birthChart : ?BirthChartData;
  } {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can retrieve logs");
    };

    let checkInsList = switch (checkInEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<CheckInEntry>() };
    };
    let sleepLogsList = switch (sleepLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<SleepLogEntry>() };
    };
    let dreamLogsList = switch (dreamLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<DreamLogEntry>() };
    };

    {
      checkIns = checkInsList.toArray();
      sleepLogs = sleepLogsList.toArray();
      dreamLogs = dreamLogsList.toArray();
      birthChart = birthCharts.get(caller);
    };
  };

  // Get logs by day - Requires user authentication (own data only)
  public query ({ caller }) func getLogsByDay(dayOfYear : Nat) : async {
    checkIns : [CheckInEntry];
    sleepLogs : [SleepLogEntry];
    dreamLogs : [DreamLogEntry];
  } {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can retrieve logs");
    };

    let checkInsList = switch (checkInEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<CheckInEntry>() };
    };
    let sleepLogsList = switch (sleepLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<SleepLogEntry>() };
    };
    let dreamLogsList = switch (dreamLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<DreamLogEntry>() };
    };

    let filteredCheckIns = checkInsList.filter(
      func(entry) {
        entry.dayOfYear == dayOfYear;
      }
    );

    let filteredSleepLogs = sleepLogsList.filter(
      func(entry) {
        entry.dayOfYear == dayOfYear;
      }
    );

    let filteredDreamLogs = dreamLogsList.filter(
      func(entry) {
        entry.dayOfYear == dayOfYear;
      }
    );

    {
      checkIns = filteredCheckIns.toArray();
      sleepLogs = filteredSleepLogs.toArray();
      dreamLogs = filteredDreamLogs.toArray();
    };
  };

  // Get logs by nakshatra - Requires user authentication (own data only)
  public query ({ caller }) func getLogsByNakshatra(nakshatra : Text) : async {
    checkIns : [CheckInEntry];
    sleepLogs : [SleepLogEntry];
    dreamLogs : [DreamLogEntry];
  } {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can retrieve logs");
    };

    let checkInsList = switch (checkInEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<CheckInEntry>() };
    };
    let sleepLogsList = switch (sleepLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<SleepLogEntry>() };
    };
    let dreamLogsList = switch (dreamLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<DreamLogEntry>() };
    };

    let filteredCheckIns = checkInsList.filter(
      func(entry) {
        entry.nakshatra == nakshatra;
      }
    );

    let filteredSleepLogs = sleepLogsList.filter(
      func(entry) {
        entry.nakshatra == nakshatra;
      }
    );

    let filteredDreamLogs = dreamLogsList.filter(
      func(entry) {
        entry.nakshatra == nakshatra;
      }
    );

    {
      checkIns = filteredCheckIns.toArray();
      sleepLogs = filteredSleepLogs.toArray();
      dreamLogs = filteredDreamLogs.toArray();
    };
  };

  // Get nakshatra patterns - Requires user authentication (own data only)
  public query ({ caller }) func getNakshatraPatterns() : async {
    checkInPatterns : [(Text, CheckInEntry)];
    sleepLogPatterns : [(Text, SleepLogEntry)];
    dreamPatterns : [(Text, DreamLogEntry)];
  } {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can retrieve patterns");
    };

    let checkInPatterns = List.empty<(Text, CheckInEntry)>();
    let matchSleepPatterns = List.empty<(Text, SleepLogEntry)>();
    let matchDreamPatterns = List.empty<(Text, DreamLogEntry)>();

    let checkInsList = switch (checkInEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<CheckInEntry>() };
    };
    let sleepLogsList = switch (sleepLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<SleepLogEntry>() };
    };
    let dreamLogsList = switch (dreamLogEntries.get(caller)) {
      case (?entries) { entries };
      case (null) { List.empty<DreamLogEntry>() };
    };

    if (checkInsList.size() > 1) {
      var last : CheckInEntry = checkInsList.at(0);
      for (i in checkInsList.sliceToArray(1, checkInsList.size()).values()) {
        let entry = i;
        if (entry.nakshatra == last.nakshatra) {
          checkInPatterns.add((entry.nakshatra, entry));
        };
        last := entry;
      };
    };

    if (sleepLogsList.size() > 1) {
      var last : SleepLogEntry = sleepLogsList.at(0);
      for (i in sleepLogsList.sliceToArray(1, sleepLogsList.size()).values()) {
        let entry = i;
        if (entry.nakshatra == last.nakshatra) {
          matchSleepPatterns.add((entry.nakshatra, entry));
        };
        last := entry;
      };
    };

    if (dreamLogsList.size() > 1) {
      var last : DreamLogEntry = dreamLogsList.at(0);
      for (i in dreamLogsList.sliceToArray(1, dreamLogsList.size()).values()) {
        let entry = i;
        if (entry.nakshatra == last.nakshatra) {
          matchDreamPatterns.add((entry.nakshatra, entry));
        };
        last := entry;
      };
    };

    {
      checkInPatterns = checkInPatterns.toArray();
      sleepLogPatterns = matchSleepPatterns.toArray();
      dreamPatterns = matchDreamPatterns.toArray();
    };
  };
};

