import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Moon } from 'lucide-react';
import { useCitySelection } from '@/hooks/useCitySelection';
import { formatTransitionTime } from '@/lib/time/timezone';

interface TransitionTimesProps {
  data: {
    degreesUntilNextPada: number;
    remainingDegreesInNakshatra: number;
  };
}

export default function TransitionTimes({ data }: TransitionTimesProps) {
  const { currentCity } = useCitySelection();

  // Moon moves approximately 13.2 degrees per day
  const MOON_DEGREES_PER_HOUR = 13.2 / 24;

  const hoursUntilNextPada = data.degreesUntilNextPada / MOON_DEGREES_PER_HOUR;
  const hoursUntilNextNakshatra = data.remainingDegreesInNakshatra / MOON_DEGREES_PER_HOUR;

  const nextPadaTime = new Date(Date.now() + hoursUntilNextPada * 60 * 60 * 1000);
  const nextNakshatraTime = new Date(Date.now() + hoursUntilNextNakshatra * 60 * 60 * 1000);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-4 w-4" />
            Next Pada Transition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-1">
            {formatTransitionTime(nextPadaTime, currentCity.timezone)}
          </p>
          <p className="text-xs text-muted-foreground">
            In approximately {hoursUntilNextPada.toFixed(1)} hours
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Moon className="h-4 w-4" />
            Next Nakshatra Transition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-1">
            {formatTransitionTime(nextNakshatraTime, currentCity.timezone)}
          </p>
          <p className="text-xs text-muted-foreground">
            In approximately {hoursUntilNextNakshatra.toFixed(1)} hours
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
