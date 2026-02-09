import { useEffect, useState } from 'react';
import { useDetermineNakshatra } from './useQueries';
import { calculateLunarLongitude } from '@/lib/astro/lunarLongitude';
import { getCurrentTimeInTimezone } from '@/lib/time/timezone';
import { useCitySelection } from './useCitySelection';
import { isValidLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';

const POLL_INTERVAL = 60000; // 1 minute

export function useNakshatraNow() {
  const { currentCity, selectionKey } = useCitySelection();
  
  const [currentLongitude, setCurrentLongitude] = useState<number>(() => {
    const cityTime = getCurrentTimeInTimezone(currentCity.timezone);
    return calculateLunarLongitude(cityTime);
  });

  const [isLongitudeValid, setIsLongitudeValid] = useState<boolean>(() => 
    isValidLongitude(currentLongitude)
  );

  const query = useDetermineNakshatra(currentLongitude, currentCity.timezone, currentCity.name, selectionKey);

  const recomputeLongitude = () => {
    const cityTime = getCurrentTimeInTimezone(currentCity.timezone);
    const longitude = calculateLunarLongitude(cityTime);
    const valid = isValidLongitude(longitude);
    
    if (!valid) {
      console.warn('[useNakshatraNow] Invalid longitude computed', {
        longitude,
        city: currentCity.name,
        timezone: currentCity.timezone,
        cityTime: cityTime.toISOString(),
      });
    }
    
    setCurrentLongitude(longitude);
    setIsLongitudeValid(valid);
  };

  useEffect(() => {
    // Update immediately when city changes or selection key changes
    recomputeLongitude();
    
    // Set up polling interval
    const interval = setInterval(recomputeLongitude, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentCity.timezone, currentCity.name, selectionKey]);

  return {
    ...query,
    recomputeLongitude,
  };
}
