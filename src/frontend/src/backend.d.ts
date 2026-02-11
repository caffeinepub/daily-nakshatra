import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Location {
    latitude: number;
    cityName: string;
    longitude: number;
}
export type Time = bigint;
export interface CheckInEntry {
    restlessness?: bigint;
    dayOfYear: bigint;
    mood?: string;
    timestamp: Time;
    nakshatra: string;
    energy?: bigint;
}
export interface BirthData {
    moonNakshatra: string;
    dateOfBirth: string;
    timeOfBirth: string;
    atmakarakaNakshatra: string;
    location: Location;
}
export interface SleepLogEntry {
    dayOfYear: bigint;
    sleepNotes?: string;
    timestamp: Time;
    nakshatra: string;
}
export interface BirthChartData {
    moonNakshatra: string;
    birthDate: string;
    atmakarakaNakshatra: string;
}
export interface UserProfile {
    birthData?: BirthData;
    isPremium: boolean;
    name: string;
    email?: string;
}
export interface DreamLogEntry {
    dreamNotes?: string;
    dayOfYear: bigint;
    timestamp: Time;
    nakshatra: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    computeNakshatraData(moonLongitude: number, birthTime: string, birthLocation: Location, dob: string, timeOfBirth: string): Promise<{
        moonNakshatra: string;
        atmakarakaNakshatra: string;
        calculatedLongitude?: number;
    }>;
    determineNakshatra(lunarLongitude: number): Promise<{
        remainingDegreesInCurrentPada: number;
        preciseLongitude: number;
        pada: bigint;
        nakshatraNumber: bigint;
        remainingDegreesInNakshatra: number;
        nakshatraName: string;
        degreesUntilNextPada: number;
    }>;
    getAllLogs(): Promise<{
        dreamLogs: Array<DreamLogEntry>;
        sleepLogs: Array<SleepLogEntry>;
        checkIns: Array<CheckInEntry>;
        birthChart?: BirthChartData;
    }>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCurrentDayOfYearForCaller(): Promise<bigint>;
    getLogsByDay(dayOfYear: bigint): Promise<{
        dreamLogs: Array<DreamLogEntry>;
        sleepLogs: Array<SleepLogEntry>;
        checkIns: Array<CheckInEntry>;
    }>;
    getLogsByNakshatra(nakshatra: string): Promise<{
        dreamLogs: Array<DreamLogEntry>;
        sleepLogs: Array<SleepLogEntry>;
        checkIns: Array<CheckInEntry>;
    }>;
    getNakshatraPatterns(): Promise<{
        checkInPatterns: Array<[string, CheckInEntry]>;
        dreamPatterns: Array<[string, DreamLogEntry]>;
        sleepLogPatterns: Array<[string, SleepLogEntry]>;
    }>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveBirthChart(birthDate: string, moonNakshatra: string, atmakarakaNakshatra: string): Promise<void>;
    saveBirthData(dob: string, timeOfBirth: string, location: string, moonNakshatra: string, atmakarakaNakshatra: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveCheckIn(dayOfYear: bigint, nakshatra: string, mood: string | null, energy: bigint | null, restlessness: bigint | null): Promise<void>;
    saveDreamLog(dayOfYear: bigint, nakshatra: string, dreamNotes: string | null): Promise<void>;
    saveSleepLog(dayOfYear: bigint, nakshatra: string, sleepNotes: string | null): Promise<void>;
}
