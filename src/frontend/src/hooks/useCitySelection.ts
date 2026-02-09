import { useLocalStorage } from './useLocalStorage';
import { cities } from '@/data/cities';
import { useMemo } from 'react';

const DEFAULT_CITY = cities[0]; // New York

export function useCitySelection() {
  const [currentCity, setCurrentCity] = useLocalStorage('selectedCity', DEFAULT_CITY);

  const localTime = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: currentCity.timezone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(new Date());
    } catch {
      return '';
    }
  }, [currentCity.timezone]);

  return {
    currentCity,
    setCity: setCurrentCity,
    localTime,
  };
}
