import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { X, Moon } from 'lucide-react';
import { useNakshatraAlerts } from '@/hooks/useNakshatraAlerts';

export default function NakshatraChangeBanner() {
  const { showBanner, dismissBanner, changedNakshatra } = useNakshatraAlerts();

  if (!showBanner || !changedNakshatra) {
    return null;
  }

  return (
    <Alert className="border-primary bg-primary/5">
      <Moon className="h-4 w-4" />
      <AlertTitle>Nakshatra Transition</AlertTitle>
      <AlertDescription className="flex items-center justify-between gap-4">
        <span>The Moon has entered {changedNakshatra}</span>
        <Button variant="ghost" size="sm" onClick={dismissBanner}>
          <X className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}
