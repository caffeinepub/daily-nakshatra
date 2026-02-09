import { useLocalStorage } from './useLocalStorage';
import { cities, type City } from '@/data/cities';
import { useState, useEffect } from 'react';

const DEFAULT_CITY = cities[0]; // New York

// Validate that a city object has required fields and a valid timezone
function validateCity(city: unknown): City | null {
  if (!city || typeof city !== 'object') return null;
  
  const candidate = city as Partial<City>;
  if (!candidate.name || !candidate.timezone) return null;
  
  // Validate timezone by attempting to use it
  try {
    new Intl.DateTimeFormat('en-US', {
      timeZone: candidate.timezone,
      hour: 'numeric',
    }).format(new Date());
    
    // Return the city with all its properties (including geolocation flag if present)
    return {
      name: candidate.name,
      timezone: candidate.timezone,
      lat: candidate.lat,
      lng: candidate.lng,
      isGeolocation: candidate.isGeolocation || false,
    };
  } catch {
    return null;
  }
}

export function useCitySelection() {
  const [storedCity, setStoredCity] = useLocalStorage<City>('selectedCity', DEFAULT_CITY);
  const [currentCity, setCurrentCity] = useState<City>(() => {
    const validated = validateCity(storedCity);
    if (!validated) {
      // If stored city is invalid, reset to default
      setStoredCity(DEFAULT_CITY);
      return DEFAULT_CITY;
    }
    return validated;
  });
  const [localTime, setLocalTime] = useState('');
  const [selectionKey, setSelectionKey] = useState(Date.now()); // Refresh token for geolocation updates

  // Sync with localStorage changes and validate
  useEffect(() => {
    const validated = validateCity(storedCity);
    if (validated) {
      setCurrentCity(validated);
    } else {
      // Invalid city in storage, reset
      setCurrentCity(DEFAULT_CITY);
      setStoredCity(DEFAULT_CITY);
    }
  }, [storedCity, setStoredCity]);

  // Update local time whenever city changes and tick every second
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: currentCity.timezone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setLocalTime(formatted);
      } catch (error) {
        console.error('Error formatting time:', error);
        setLocalTime('');
      }
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, [currentCity.timezone]);

  const setCity = (city: City) => {
    const validated = validateCity(city);
    if (validated) {
      setStoredCity(validated);
      // Update selection key to force refresh of downstream computations
      setSelectionKey(Date.now());
    }
  };

  return {
    currentCity,
    setCity,
    localTime,
    selectionKey, // Expose for downstream hooks to detect changes
  };
}
