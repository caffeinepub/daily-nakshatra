/**
 * Diagnostics helper for Nakshatra query failures.
 * Provides standardized console logging for debugging and longitude normalization.
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

/**
 * Validates that a longitude is finite and in the backend-accepted domain [0, 360).
 * Note: 360 is NOT valid (backend expects strictly less than 360).
 */
export function isValidLongitude(longitude: number): boolean {
  return Number.isFinite(longitude) && longitude >= 0 && longitude < 360;
}

/**
 * Normalizes any finite longitude value into the [0, 360) range.
 * Examples: 360 -> 0, -10 -> 350, 370 -> 10
 */
export function normalizeLongitude(longitude: number): number {
  if (!Number.isFinite(longitude)) {
    return longitude; // Return as-is for NaN/Infinity (will fail validation)
  }
  
  // Use modulo to wrap into [0, 360)
  let normalized = longitude % 360;
  
  // Handle negative values
  if (normalized < 0) {
    normalized += 360;
  }
  
  return normalized;
}
