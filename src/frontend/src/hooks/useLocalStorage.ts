import { useState, useEffect, useCallback } from 'react';

// In-memory registry to sync state across hook instances in the same tab
const subscribers = new Map<string, Set<(value: unknown) => void>>();

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Subscribe to same-tab updates
  useEffect(() => {
    if (!subscribers.has(key)) {
      subscribers.set(key, new Set());
    }
    const keySubscribers = subscribers.get(key)!;
    
    const listener = (value: unknown) => {
      setStoredValue(value as T);
    };
    
    keySubscribers.add(listener);
    
    return () => {
      keySubscribers.delete(listener);
      if (keySubscribers.size === 0) {
        subscribers.delete(key);
      }
    };
  }, [key]);

  // Listen for cross-tab storage events
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          const newValue = JSON.parse(e.newValue);
          setStoredValue(newValue);
        } catch (error) {
          console.error(`Error parsing storage event for key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  const setValue = useCallback((value: T) => {
    try {
      const serialized = JSON.stringify(value);
      const currentSerialized = window.localStorage.getItem(key);
      
      // Only update if value actually changed (prevents loops)
      if (serialized !== currentSerialized) {
        window.localStorage.setItem(key, serialized);
        setStoredValue(value);
        
        // Notify all other hook instances in the same tab
        const keySubscribers = subscribers.get(key);
        if (keySubscribers) {
          keySubscribers.forEach(listener => {
            // Don't notify self
            if (listener !== setStoredValue) {
              listener(value);
            }
          });
        }
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}
