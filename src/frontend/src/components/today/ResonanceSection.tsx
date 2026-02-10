import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGetAllLogs } from '@/hooks/useUserLogs';
import { Sparkles } from 'lucide-react';

interface ResonanceSectionProps {
  currentNakshatra: string;
}

export default function ResonanceSection({ currentNakshatra }: ResonanceSectionProps) {
  const { data: logs, isLoading } = useGetAllLogs();

  if (isLoading) {
    return null;
  }

  const birthChart = logs?.birthChart;

  if (!birthChart) {
    return null;
  }

  const moonActivated = birthChart.moonNakshatra === currentNakshatra;
  const atmakarakaResonance = birthChart.atmakarakaNakshatra === currentNakshatra;

  if (!moonActivated && !atmakarakaResonance) {
    return (
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Birth Chart Resonance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            No notable resonance with your birth chart today. The current Nakshatra is moving through a different area
            of your cosmic blueprint.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Birth Chart Resonance
        </CardTitle>
        <CardDescription>Today's Nakshatra resonates with your birth chart</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {moonActivated && (
          <div className="flex items-start gap-3">
            <Badge variant="secondary" className="mt-1">
              Moon
            </Badge>
            <p className="text-sm text-muted-foreground">
              The Moon is transiting your natal Moon Nakshatra. You may feel more emotionally attuned, reflective, or
              sensitive to your inner landscape today.
            </p>
          </div>
        )}

        {atmakarakaResonance && (
          <div className="flex items-start gap-3">
            <Badge variant="secondary" className="mt-1">
              Atmakaraka
            </Badge>
            <p className="text-sm text-muted-foreground">
              The Moon is activating your Atmakaraka Nakshatra. This may bring themes of soul purpose, deeper calling,
              or significant personal meaning to the surface.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
