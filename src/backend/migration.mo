import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Text "mo:core/Text";

module {
  type OldUserProfile = {
    name : Text;
    email : ?Text;
    isPremium : Bool;
  };

  type OldActor = {
    userProfiles : Map.Map<Principal, OldUserProfile>;
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

  type NewUserProfile = {
    name : Text;
    email : ?Text;
    isPremium : Bool;
    birthData : ?BirthData;
  };

  type NewActor = {
    localUserProfiles : Map.Map<Principal, NewUserProfile>;
  };

  public func run(old : OldActor) : NewActor {
    let newProfiles = old.userProfiles.map<Principal, OldUserProfile, NewUserProfile>(
      func(_principal, oldProfile) {
        { oldProfile with birthData = null };
      }
    );
    { localUserProfiles = newProfiles };
  };
};
