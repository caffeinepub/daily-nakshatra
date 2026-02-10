import { useEffect, useState, useMemo } from 'react';
import { useDetermineNakshatra } from '@/hooks/useQueries';
import { calculateLunarLongitude } from '@/lib/astro/lunarLongitude';
import { getTimeInTimezone, formatDateTimeInTimezone } from '@/lib/time/timezone';
import { useCitySelection } from '@/hooks/useCitySelection';
import { isValidLongitude, normalizeLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import Glyph from '@/components/glyphs/Glyph';
import { MapPin, RefreshCw, Clock, AlertCircle } from 'lucide-react';
import DailyInterpretationBlocks from '@/components/today/DailyInterpretationBlocks';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { getNakshatraSlug } from '@/lib/nakshatra';

export default function TomorrowPage() {
  const { currentCity, selectionKey } = useCitySelection();
  
  const [viewingTimeAnchor, setViewingTimeAnchor] = useState<Date>(() => new Date());
  
  useEffect(() => {
    setViewingTimeAnchor(new Date());
  }, [selectionKey, currentCity.timezone]);
  
  const targetTime = useMemo(() => {
    const target = new Date(viewingTimeAnchor.getTime() + 24 * 60 * 60 * 1000);
    return target;
  }, [viewingTimeAnchor]);

  const [tomorrowLongitude, setTomorrowLongitude] = useState<number | null>(null);
  const [longitudeValid, setLongitudeValid] = useState(true);

  useEffect(() => {
    const localTime = getTimeInTimezone(targetTime, currentCity.timezone);
    const rawLongitude = calculateLunarLongitude(localTime);
    const longitude = normalizeLongitude(rawLongitude);
    const valid = isValidLongitude(longitude);
    setTomorrowLongitude(longitude);
    setLongitudeValid(valid);
  }, [targetTime, currentCity.timezone]);

  const {
    data,
    isLoading,
    error,
    refetch,
    isRefetching,
    isActorReady,
    isQueryEligible,
    actorInitStatus,
    retryActorInitialization,
  } = useDetermineNakshatra(
    tomorrowLongitude,
    currentCity.timezone,
    currentCity.name,
    selectionKey
  );

  // Actor initialization failed
  if (actorInitStatus === 'error') {
    return (
      <div className="text-center py-20 space-y-6 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <p className="text-foreground text-lg font-sans tracking-wide">Connection failed</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Unable to connect to the service. Please try again.
        </p>
        <Button
          onClick={() => {
            retryActorInitialization();
          }}
          disabled={isRefetching}
          variant="ghost"
          className="gap-2 mt-4"
        >
          <RefreshCw className="h-4 w-4" />
          Retry Connection
        </Button>
      </div>
    );
  }

  // Invalid longitude
  if (!longitudeValid && tomorrowLongitude !== null && !isLoading && actorInitStatus !== 'loading') {
    return (
      <div className="text-center py-20 space-y-6 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
        </div>
        <p className="text-foreground text-lg font-sans tracking-wide">Position unclear</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Tomorrow's lunar position cannot be determined. Wait, then try again.
        </p>
        <Button
          onClick={() => {
            setViewingTimeAnchor(new Date());
            if (isQueryEligible) {
              refetch();
            }
          }}
          disabled={isRefetching}
          variant="ghost"
          className="gap-2 mt-4"
        >
          {isRefetching ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Recalculating
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4" />
              Try Again
            </>
          )}
        </Button>
      </div>
    );
  }

  // Backend query error (only when actor is ready)
  if (error && isActorReady) {
    return (
      <div className="text-center py-20 space-y-6 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
        </div>
        <p className="text-foreground text-lg font-sans tracking-wide">Unable to proceed</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The reading cannot be completed. Wait, then try again.
        </p>
        <Button
          onClick={() => {
            setViewingTimeAnchor(new Date());
            refetch();
          }}
          disabled={isRefetching}
          variant="ghost"
          className="gap-2 mt-4"
        >
          {isRefetching ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Recalculating
            </>
          ) : (
            <>
              <RefreshCw className="h-4 w-4" />
              Try Again
            </>
          )}
        </Button>
      </div>
    );
  }

  const shouldShowLoading = isLoading || actorInitStatus === 'loading' || !isActorReady || tomorrowLongitude === null;

  const formattedTargetTime = formatDateTimeInTimezone(targetTime, currentCity.timezone);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${encodeURI('/assets/Uploaded Screen Shot 2026-02-09 at 12.47.13 PM.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative px-8 py-24 text-center space-y-8">
          <div className="flex items-center justify-center mb-8">
            <Glyph type="moon" className="h-16 w-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans tracking-wider">Tomorrow's Nakshatra Placement</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm tracking-wide leading-relaxed">
            Where the Moon will rest tomorrow
          </p>
        </div>
      </div>

      {/* Tomorrow's Nakshatra */}
      {shouldShowLoading ? (
        <div className="space-y-6 text-center max-w-xl mx-auto py-12">
          <Skeleton className="h-16 w-64 mx-auto" />
          <Skeleton className="h-8 w-32 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      ) : data ? (
        <div className="text-center space-y-12 max-w-2xl mx-auto py-8">
          <div className="space-y-6">
            <h3 className="text-5xl md:text-6xl font-sans tracking-wider">{data.nakshatraName}</h3>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-sm font-sans tracking-wide px-4 py-1">
                Pada {data.pada}
              </Badge>
              <Badge variant="outline" className="text-xs font-sans tracking-wide px-3 py-1">
                {data.nakshatraNumber} of 27
              </Badge>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="tracking-wide">Longitude: {data.preciseLongitude.toFixed(3)}°</p>
            <div className="flex items-center justify-center gap-2 text-xs">
              <Clock className="h-3.5 w-3.5" />
              <span className="tracking-wide">{formattedTargetTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs">
              <MapPin className="h-3.5 w-3.5" />
              <span className="tracking-wide">
                {currentCity.name}, {currentCity.timezone}
              </span>
            </div>
          </div>

          <Link to="/nakshatra/$slug" params={{ slug: getNakshatraSlug(data.nakshatraName) }}>
            <Button variant="ghost" size="sm" className="text-xs tracking-wider">
              Explore {data.nakshatraName}
            </Button>
          </Link>
        </div>
      ) : null}

      {data && <DailyInterpretationBlocks nakshatraName={data.nakshatraName} />}
    </div>
  );
}
