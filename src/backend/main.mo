import Text "mo:core/Text";
import Float "mo:core/Float";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";

actor {
  type Nakshatra = {
    name : Text;
    startDegree : Float;
    endDegree : Float;
  };

  module Nakshatra {
    public func equal(n1 : Nakshatra, n2 : Nakshatra) : Bool {
      n1.name == n2.name and n1.startDegree == n2.startDegree and n1.endDegree == n2.endDegree
    };
  };

  let nakshatras : [Nakshatra] = [
    { name = "Ashwini"; startDegree = 0.0; endDegree = 13.333 },
    { name = "Bharani"; startDegree = 13.334; endDegree = 26.666 },
    { name = "Krittika"; startDegree = 26.667; endDegree = 40.0 },
    { name = "Rohini"; startDegree = 40.001; endDegree = 53.333 },
    { name = "Mrigashirsha"; startDegree = 53.334; endDegree = 66.666 },
    { name = "Ardra"; startDegree = 66.667; endDegree = 80.0 },
    { name = "Punarvasu"; startDegree = 80.001; endDegree = 93.333 },
    { name = "Pushya"; startDegree = 93.334; endDegree = 106.666 },
    { name = "Ashlesha"; startDegree = 106.667; endDegree = 120.0 },
    { name = "Magha"; startDegree = 120.001; endDegree = 133.333 },
    { name = "Purva Phalguni"; startDegree = 133.334; endDegree = 146.666 },
    { name = "Uttara Phalguni"; startDegree = 146.667; endDegree = 160.0 },
    { name = "Hasta"; startDegree = 160.001; endDegree = 173.333 },
    { name = "Chitra"; startDegree = 173.334; endDegree = 186.666 },
    { name = "Swati"; startDegree = 186.667; endDegree = 200.0 },
    { name = "Vishakha"; startDegree = 200.001; endDegree = 213.333 },
    { name = "Anuradha"; startDegree = 213.334; endDegree = 226.666 },
    { name = "Jyeshtha"; startDegree = 226.667; endDegree = 240.0 },
    { name = "Mula"; startDegree = 240.001; endDegree = 253.333 },
    { name = "Purva Ashadha"; startDegree = 253.334; endDegree = 266.666 },
    { name = "Uttara Ashadha"; startDegree = 266.667; endDegree = 280.0 },
    { name = "Shravana"; startDegree = 280.001; endDegree = 293.333 },
    { name = "Dhanishta"; startDegree = 293.334; endDegree = 306.666 },
    { name = "Shatabhisha"; startDegree = 306.667; endDegree = 320.0 },
    { name = "Purva Bhadrapada"; startDegree = 320.001; endDegree = 333.333 },
    { name = "Uttara Bhadrapada"; startDegree = 333.334; endDegree = 346.666 },
    { name = "Revati"; startDegree = 346.667; endDegree = 360.0 },
  ];

  func findNakshatraByDegree(lunarLongitude : Float) : ?Nakshatra {
    nakshatras.find(
      func(n) {
        n.startDegree <= lunarLongitude and lunarLongitude <= n.endDegree;
      }
    );
  };

  func calculatePada(lunarLongitude : Float, nakshatraStartDegree : Float) : Int {
    let relativePos = lunarLongitude - nakshatraStartDegree;
    Int.min(4, Int.max(1, (relativePos / 3.334).toInt() + 1));
  };

  func validateDegree(degree : Float) : () {
    if (degree < 0.0 or degree > 360.0) {
      Runtime.trap("Lunar longitude must be between 0 and 360 degrees.");
    };
  };

  public query (_) func determineNakshatra(lunarLongitude : Float) : async {
    nakshatraName : Text;
    nakshatraNumber : Nat;
    pada : Nat;
    preciseLongitude : Float;
    remainingDegreesInNakshatra : Float;
    remainingDegreesInCurrentPada : Float;
    degreesUntilNextPada : Float;
  } {
    validateDegree(lunarLongitude);

    let ?nakshatra = findNakshatraByDegree(lunarLongitude) else {
      Runtime.trap("No nakshatra found for given longitude");
    };

    // Calculate Nakshatra number (1-based)
    let nakshatraIndex = nakshatras.indexOf(nakshatra);
    let nakshatraNumber = switch (nakshatraIndex) {
      case (?index) { index + 1 };
      case (null) { Runtime.trap("Nakshatra index not found") };
    };

    // Calculate Pada (1-4)
    let padaNum = calculatePada(lunarLongitude, nakshatra.startDegree);

    // Calculate precise remaining degrees
    let remainingDegrees = nakshatra.endDegree - lunarLongitude;
    let remainingDegreesInNakshatra = Float.max(0.0, Float.min(13.333, remainingDegrees));

    // Calculate remaining degrees within current Pada (range 0 - 3.333)
    let positionInCurrentPada = (lunarLongitude - nakshatra.startDegree) % 3.334;
    let remainingDegreesInCurrentPada = Float.max(0.0, Float.min(3.333, 3.333 - positionInCurrentPada));

    // Calculate degrees to next Pada boundary (always positive)
    let degreesUntilNextPada = 3.334 - positionInCurrentPada;

    {
      nakshatraName = nakshatra.name;
      preciseLongitude = lunarLongitude;
      nakshatraNumber;
      pada = padaNum.toNat();
      remainingDegreesInNakshatra;
      remainingDegreesInCurrentPada;
      degreesUntilNextPada;
    };
  };
};
