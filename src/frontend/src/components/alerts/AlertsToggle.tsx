import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useNakshatraAlerts } from '@/hooks/useNakshatraAlerts';
import { Bell, BellOff } from 'lucide-react';

export default function AlertsToggle() {
  const { alertsEnabled, setAlertsEnabled } = useNakshatraAlerts();

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="alerts-toggle" className="cursor-pointer flex items-center gap-1.5 text-xs">
        {alertsEnabled ? <Bell className="h-3.5 w-3.5" /> : <BellOff className="h-3.5 w-3.5" />}
        <span className="sr-only">Alerts</span>
      </Label>
      <Switch id="alerts-toggle" checked={alertsEnabled} onCheckedChange={setAlertsEnabled} />
    </div>
  );
}
