import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useNakshatraAlerts } from '@/hooks/useNakshatraAlerts';
import Glyph from '@/components/glyphs/Glyph';

export default function AlertsToggle() {
  const { alertsEnabled, setAlertsEnabled } = useNakshatraAlerts();

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="alerts-toggle" className="cursor-pointer flex items-center gap-2 text-xs tracking-wide">
        <Glyph type="bell" className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Alerts</span>
      </Label>
      <Switch
        id="alerts-toggle"
        checked={alertsEnabled}
        onCheckedChange={setAlertsEnabled}
        className="scale-90"
      />
    </div>
  );
}

