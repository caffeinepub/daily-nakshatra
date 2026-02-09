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

  // Calculate all Nakshatra boundaries programmatically
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
    if (degree < 0.0 or degree >= 360.0) {
      Runtime.trap("Lunar longitude must be between 0 (inclusive) and 360 (exclusive) degrees.");
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

    let nakshatraIndex = nakshatras.indexOf(nakshatra);
    let nakshatraNumber = switch (nakshatraIndex) {
      case (?index) { index + 1 };
      case (null) { Runtime.trap("Nakshatra index not found") };
    };

    let padaNum = calculatePada(lunarLongitude, nakshatra.startDegree);

    let remainingDegrees = nakshatra.endDegree - lunarLongitude;
    let remainingDegreesInNakshatra = Float.max(0.0, Float.min(40.0 / 3.0, remainingDegrees));

    let positionInCurrentPada = (lunarLongitude - nakshatra.startDegree) % (10.0 / 3.0);
    let remainingDegreesInCurrentPada = Float.max(0.0, Float.min(10.0 / 3.0, (10.0 / 3.0) - positionInCurrentPada));

    let degreesUntilNextPada = (10.0 / 3.0) - positionInCurrentPada;

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
