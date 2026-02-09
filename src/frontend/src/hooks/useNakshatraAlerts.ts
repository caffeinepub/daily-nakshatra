import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useNakshatraNow } from './useNakshatraNow';

export function useNakshatraAlerts() {
  const [alertsEnabled, setAlertsEnabled] = useLocalStorage('nakshatraAlertsEnabled', false);
  const [lastSeenNakshatra, setLastSeenNakshatra] = useLocalStorage<string | null>('lastSeenNakshatra', null);
  const [showBanner, setShowBanner] = useState(false);
  const [changedNakshatra, setChangedNakshatra] = useState<string | null>(null);

  const { data } = useNakshatraNow();

  useEffect(() => {
    if (!data || !alertsEnabled) return;

    const currentNakshatra = data.nakshatraName;

    if (lastSeenNakshatra && lastSeenNakshatra !== currentNakshatra) {
      setShowBanner(true);
      setChangedNakshatra(currentNakshatra);
    }

    setLastSeenNakshatra(currentNakshatra);
  }, [data, alertsEnabled, lastSeenNakshatra, setLastSeenNakshatra]);

  const dismissBanner = () => {
    setShowBanner(false);
  };

  return {
    alertsEnabled,
    setAlertsEnabled,
    showBanner,
    dismissBanner,
    changedNakshatra,
  };
}
