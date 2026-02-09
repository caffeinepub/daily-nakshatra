/**
 * Calculates an approximate lunar longitude for a given date.
 * The date parameter should represent the local time in the desired timezone
 * (obtained via getCurrentTimeInTimezone for city-specific calculations).
 * This is a simplified calculation for demonstration purposes.
 * In production, use a proper astronomical library like astronomia or swiss ephemeris.
 */
export function calculateLunarLongitude(date: Date): number {
  // J2000 epoch: January 1, 2000, 12:00 TT
  const J2000 = new Date('2000-01-01T12:00:00Z').getTime();
  const msPerDay = 86400000;

  // Days since J2000
  const d = (date.getTime() - J2000) / msPerDay;

  // Mean longitude of the Moon (simplified formula)
  // Moon completes ~13.176 degrees per day (360° / 27.32 days)
  const L0 = 218.316; // Mean longitude at epoch
  const n = 13.176396; // Mean motion per day

  // Calculate mean longitude
  let L = L0 + n * d;

  // Normalize to 0-360 range
  L = L % 360;
  if (L < 0) L += 360;

  return L;
}
