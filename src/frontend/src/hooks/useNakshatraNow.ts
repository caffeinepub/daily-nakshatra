import { useEffect, useState } from 'react';
import { useDetermineNakshatra } from './useQueries';
import { calculateLunarLongitude } from '@/lib/astro/lunarLongitude';
import { getCurrentTimeInTimezone } from '@/lib/time/timezone';
import { useCitySelection } from './useCitySelection';

const POLL_INTERVAL = 60000; // 1 minute

export function useNakshatraNow() {
  const { currentCity, selectionKey } = useCitySelection();
  
  const [currentLongitude, setCurrentLongitude] = useState<number>(() => {
    const cityTime = getCurrentTimeInTimezone(currentCity.timezone);
    return calculateLunarLongitude(cityTime);
  });

  const query = useDetermineNakshatra(currentLongitude, currentCity.timezone, currentCity.name, selectionKey);

  useEffect(() => {
    const updateLongitude = () => {
      const cityTime = getCurrentTimeInTimezone(currentCity.timezone);
      const longitude = calculateLunarLongitude(cityTime);
      setCurrentLongitude(longitude);
    };

    // Update immediately when city changes or selection key changes
    updateLongitude();
    
    // Set up polling interval
    const interval = setInterval(updateLongitude, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentCity.timezone, currentCity.name, selectionKey]);

  return query;
}
