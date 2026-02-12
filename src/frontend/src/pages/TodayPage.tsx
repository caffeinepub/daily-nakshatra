import { useNakshatraNow } from '@/hooks/useNakshatraNow';
import { useCitySelection } from '@/hooks/useCitySelection';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '@/hooks/useUserProfile';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, RefreshCw, AlertCircle } from 'lucide-react';
import DailyInterpretationBlocks from '@/components/today/DailyInterpretationBlocks';
import DailyGuidanceModules from '@/components/today/DailyGuidanceModules';
import DailyLogsPanel from '@/components/today/DailyLogsPanel';
import ResonanceSection from '@/components/today/ResonanceSection';
import TransitionTimes from '@/components/nakshatra/TransitionTimes';
import NakshatraChangeBanner from '@/components/alerts/NakshatraChangeBanner';
import RequireAuth from '@/components/auth/RequireAuth';
import ConnectionFailedScreen from '@/components/errors/ConnectionFailedScreen';
import UnableToProceedScreen from '@/components/errors/UnableToProceedScreen';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { getNakshatraSlug } from '@/lib/nakshatra';
import { getTropicalZodiacPosition, formatTropicalZodiacPosition } from '@/lib/astro/tropicalZodiac';

export default function TodayPage() {
  const {
    data,
    isLoading,
    error,
    isRefetching,
    isLongitudeValid,
    recomputeLongitude,
    isActorReady,
    actorInitStatus,
    actorInitError,
    retryActorInitialization,
    retryQuery,
  } = useNakshatraNow();
  const { currentCity } = useCitySelection();
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const showResonance = isAuthenticated && userProfile?.isPremium;

  // Actor initialization failed
  if (actorInitStatus === 'error') {
    return (
      <ConnectionFailedScreen
        error={actorInitError}
        onRetry={retryActorInitialization}
        isRetrying={isRefetching}
      />
    );
  }

  // Invalid longitude
  if (!isLongitudeValid && !isLoading && actorInitStatus !== 'loading') {
    return (
      <div className="text-center py-20 space-y-6 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
        </div>
        <p className="text-foreground text-lg font-sans tracking-wide">Position unclear</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The lunar position cannot be determined at this moment. Wait, then try again.
        </p>
        <Button
          onClick={retryQuery}
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

  // Backend query error (only when actor is ready and query is eligible)
  if (error && isActorReady) {
    return (
      <UnableToProceedScreen
        error={error}
        onRetry={retryQuery}
        isRetrying={isRefetching}
      />
    );
  }

  const shouldShowLoading = isLoading || actorInitStatus === 'loading' || !isActorReady;

  return (
    <div className="space-y-16">
      <NakshatraChangeBanner />

      {/* Altar Hero - Note: Do not add decorative Glyph/SVG overlays to hero sections */}
      <div
        className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col"
        style={{
          backgroundImage: `url("/assets/Untitled design (33).png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
        
        {/* Content positioned in lower third */}
        <div className="relative flex-1 flex flex-col justify-end px-8 pb-16 md:pb-20 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-sans tracking-wider">Current Nakshatra Placement</h2>
          <p className="text-white max-w-lg mx-auto text-sm tracking-wide leading-relaxed">
            Where the Moon rests now
          </p>
        </div>
      </div>

      {/* Current Nakshatra - Centered Altar */}
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
            <p className="tracking-wide">
              Tropical Zodiac: {formatTropicalZodiacPosition(getTropicalZodiacPosition(data.preciseLongitude))}
            </p>
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

      {data && <TransitionTimes data={data} />}

      {data && <DailyInterpretationBlocks nakshatraName={data.nakshatraName} />}

      {data && <DailyGuidanceModules nakshatraName={data.nakshatraName} />}

      {data && showResonance && <ResonanceSection currentNakshatra={data.nakshatraName} />}

      {data && isAuthenticated && (
        <RequireAuth>
          <DailyLogsPanel nakshatraName={data.nakshatraName} />
        </RequireAuth>
      )}
    </div>
  );
}
