import { useEffect, useState, useMemo } from 'react';
import { useDetermineNakshatra } from './useQueries';
import { calculateLunarLongitude } from '@/lib/astro/lunarLongitude';
import { getTimeInTimezone } from '@/lib/time/timezone';
import { useCitySelection } from './useCitySelection';
import { isValidLongitude, normalizeLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';

export function useNakshatraNow() {
  const { currentCity, selectionKey } = useCitySelection();
  const [currentLongitude, setCurrentLongitude] = useState<number | null>(null);
  const [longitudeValid, setLongitudeValid] = useState(true);
  const [computeKey, setComputeKey] = useState(0);

  useEffect(() => {
    const localTime = getTimeInTimezone(new Date(), currentCity.timezone);
    const rawLongitude = calculateLunarLongitude(localTime);
    const longitude = normalizeLongitude(rawLongitude);
    const valid = isValidLongitude(longitude);
    setCurrentLongitude(longitude);
    setLongitudeValid(valid);
  }, [currentCity.timezone, selectionKey, computeKey]);

  const recomputeLongitude = () => {
    setComputeKey((prev) => prev + 1);
  };

  const queryResult = useDetermineNakshatra(
    currentLongitude,
    currentCity.timezone,
    currentCity.name,
    selectionKey
  );

  return {
    ...queryResult,
    isLongitudeValid: longitudeValid,
    recomputeLongitude,
  };
}
