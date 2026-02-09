/**
 * Diagnostics helper for Nakshatra query failures.
 * Provides standardized console logging for debugging.
 */

export type NakshatraDiagnosticContext = {
  lunarLongitude: number;
  cityName: string;
  cityTimezone: string;
  selectionKey: number;
  actorInitialized: boolean;
};

export function logNakshatraQueryFailure(
  category: 'invalid-longitude' | 'actor-not-initialized' | 'backend-error',
  context: Partial<NakshatraDiagnosticContext>,
  error?: unknown
) {
  const timestamp = new Date().toISOString();
  
  console.warn(`[Nakshatra Query Failure] ${category} at ${timestamp}`, {
    category,
    context,
    error: error instanceof Error ? error.message : error,
  });
}

export function isValidLongitude(longitude: number): boolean {
  return Number.isFinite(longitude) && longitude >= 0 && longitude <= 360;
}
