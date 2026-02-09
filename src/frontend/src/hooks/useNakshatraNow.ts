import { useEffect, useState } from 'react';
import { useDetermineNakshatra } from './useQueries';
import { calculateLunarLongitude } from '@/lib/astro/lunarLongitude';
import { useCitySelection } from './useCitySelection';

const POLL_INTERVAL = 60000; // 1 minute

export function useNakshatraNow() {
  const { currentCity } = useCitySelection();
  const [currentLongitude, setCurrentLongitude] = useState<number>(() => calculateLunarLongitude(new Date()));

  const query = useDetermineNakshatra(currentLongitude);

  useEffect(() => {
    const updateLongitude = () => {
      const longitude = calculateLunarLongitude(new Date());
      setCurrentLongitude(longitude);
    };

    updateLongitude();
    const interval = setInterval(updateLongitude, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentCity]);

  return query;
}
