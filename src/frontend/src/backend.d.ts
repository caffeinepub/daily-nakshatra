import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    determineNakshatra(lunarLongitude: number): Promise<{
        remainingDegreesInCurrentPada: number;
        preciseLongitude: number;
        pada: bigint;
        nakshatraNumber: bigint;
        remainingDegreesInNakshatra: number;
        nakshatraName: string;
        degreesUntilNextPada: number;
    }>;
}
