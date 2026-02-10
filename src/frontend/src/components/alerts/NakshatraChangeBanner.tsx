import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Glyph from '@/components/glyphs/Glyph';
import { useNakshatraAlerts } from '@/hooks/useNakshatraAlerts';
import { nakshatraDailyContent } from '@/data/nakshatraDailyContent';

export default function NakshatraChangeBanner() {
  const { showBanner, dismissBanner, changedNakshatra } = useNakshatraAlerts();

  if (!showBanner || !changedNakshatra) {
    return null;
  }

  const content = nakshatraDailyContent[changedNakshatra];
  const toneShift = content?.toneShiftSummary || `The Moon has entered ${changedNakshatra}`;

  return (
    <Alert className="border-primary/30 bg-primary/5 relative">
      <Glyph type="shift" className="h-5 w-5 text-primary" />
      <AlertTitle className="font-serif text-lg tracking-wide">Shift</AlertTitle>
      <AlertDescription className="flex items-start justify-between gap-4">
        <span className="text-sm tracking-wide leading-relaxed flex-1">{toneShift}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={dismissBanner}
          className="shrink-0 h-6 w-6 p-0 hover:bg-transparent"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}

