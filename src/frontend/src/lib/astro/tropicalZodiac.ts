/**
 * Converts normalized ecliptic longitude [0, 360) to Tropical Zodiac sign and degree within sign.
 */

const TROPICAL_SIGNS = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
] as const;

export interface TropicalZodiacPosition {
  sign: string;
  degree: number;
}

/**
 * Converts a normalized longitude in degrees [0, 360) to Tropical Zodiac sign and degree.
 * @param longitude - Normalized ecliptic longitude in degrees [0, 360)
 * @returns Object containing the sign name and degree within that sign
 */
export function getTropicalZodiacPosition(longitude: number): TropicalZodiacPosition {
  // Each sign spans 30 degrees
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;

  // Ensure we stay within bounds (0-11 for 12 signs)
  const safeSignIndex = Math.max(0, Math.min(11, signIndex));

  return {
    sign: TROPICAL_SIGNS[safeSignIndex],
    degree: degreeInSign,
  };
}

/**
 * Formats a Tropical Zodiac position as a human-readable string.
 * @param position - The tropical zodiac position
 * @returns Formatted string like "Aries 12°"
 */
export function formatTropicalZodiacPosition(position: TropicalZodiacPosition): string {
  return `${position.sign} ${position.degree.toFixed(0)}°`;
}
