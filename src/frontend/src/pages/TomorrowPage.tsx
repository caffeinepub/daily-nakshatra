import { useEffect, useState, useMemo } from 'react';
import { useDetermineNakshatra } from '@/hooks/useQueries';
import { calculateLunarLongitude } from '@/lib/astro/lunarLongitude';
import { getTimeInTimezone, formatDateTimeInTimezone } from '@/lib/time/timezone';
import { useCitySelection } from '@/hooks/useCitySelection';
import { isValidLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Moon, MapPin, RefreshCw, Clock, AlertCircle } from 'lucide-react';
import DailyInterpretationBlocks from '@/components/today/DailyInterpretationBlocks';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { getNakshatraSlug } from '@/lib/nakshatra';

export default function TomorrowPage() {
  const { currentCity, selectionKey } = useCitySelection();
  
  // Update viewing time anchor when city/timezone changes
  const [viewingTimeAnchor, setViewingTimeAnchor] = useState<Date>(() => new Date());
  
  // Update anchor when city selection changes
  useEffect(() => {
    setViewingTimeAnchor(new Date());
  }, [selectionKey, currentCity.timezone]);
  
  // Compute target time (+24 hours from viewing anchor)
  const targetTime = useMemo(() => {
    const target = new Date(viewingTimeAnchor.getTime() + 24 * 60 * 60 * 1000);
    return target;
  }, [viewingTimeAnchor]);

  // Compute lunar longitude for the target time in the selected city's timezone
  const [tomorrowLongitude, setTomorrowLongitude] = useState<number | null>(null);
  const [longitudeValid, setLongitudeValid] = useState(true);

  useEffect(() => {
    const localTime = getTimeInTimezone(targetTime, currentCity.timezone);
    const longitude = calculateLunarLongitude(localTime);
    const valid = isValidLongitude(longitude);
    setTomorrowLongitude(longitude);
    setLongitudeValid(valid);
  }, [targetTime, currentCity.timezone]);

  // Query backend with computed longitude
  const {
    data,
    isLoading,
    error,
    refetch,
    isRefetching,
    isActorReady,
    isQueryEligible,
  } = useDetermineNakshatra(
    tomorrowLongitude ?? 0,
    currentCity.timezone,
    currentCity.name,
    selectionKey
  );

  // Show invalid longitude error with guidance
  if (!longitudeValid && !isLoading) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-12 w-12 text-warning" />
        </div>
        <p className="text-warning text-lg font-medium">
          Unable to compute lunar position for tomorrow
        </p>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          The app could not calculate a valid lunar longitude for tomorrow in your selected location. 
          Please try again, or change your city/timezone selection if the issue persists.
        </p>
        <Button
          onClick={() => {
            setViewingTimeAnchor(new Date());
            if (isQueryEligible) {
              refetch();
            }
          }}
          disabled={isRefetching}
          variant="outline"
          className="gap-2"
        >
          {isRefetching ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4" />
              Retry
            </>
          )}
        </Button>
      </div>
    );
  }

  // Show backend error only when query was eligible and failed
  if (error && isQueryEligible) {
    return (
      <div className="text-center py-12 space-y-4">
        <p className="text-destructive text-lg font-medium">
          Error loading tomorrow's Nakshatra data. Please try again.
        </p>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Click Retry below. If the error persists, try changing your city selection and try again.
        </p>
        <Button
          onClick={() => refetch()}
          disabled={isRefetching}
          variant="outline"
          className="gap-2"
        >
          {isRefetching ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4" />
              Retry
            </>
          )}
        </Button>
      </div>
    );
  }

  // Show loading while actor initializes or query is not eligible
  const shouldShowLoading = isLoading || !isActorReady || !isQueryEligible || tomorrowLongitude === null;

  const formattedTargetTime = formatDateTimeInTimezone(targetTime, currentCity.timezone);

  return (
    <div className="space-y-6">
      {/* Hero Section with Background */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/generated/daily-nakshatra-hero-bg.dim_1600x900.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative px-8 py-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl mb-2">Tomorrow's Nakshatra</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Moon's position 24 hours from now and its influence
          </p>
        </div>
      </div>

      {/* Tomorrow's Nakshatra Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Moon className="h-5 w-5" />
            Tomorrow's Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          {shouldShowLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-64" />
            </div>
          ) : data ? (
            <div className="space-y-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-3xl font-bold">{data.nakshatraName}</h3>
                <Badge variant="secondary" className="text-sm">
                  Pada {data.pada}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  #{data.nakshatraNumber} of 27
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Lunar longitude: {data.preciseLongitude.toFixed(3)}°
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-md">
                <Clock className="h-4 w-4" />
                <span>Forecast for {formattedTargetTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-md">
                <MapPin className="h-4 w-4" />
                <span>
                  Calculated for {currentCity.name}'s local time ({currentCity.timezone})
                </span>
              </div>
              <Link to="/nakshatra/$slug" params={{ slug: getNakshatraSlug(data.nakshatraName) }}>
                <Button variant="outline" size="sm">
                  Learn More About {data.nakshatraName}
                </Button>
              </Link>
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* Daily Interpretation */}
      {data && <DailyInterpretationBlocks nakshatraName={data.nakshatraName} />}
    </div>
  );
}
