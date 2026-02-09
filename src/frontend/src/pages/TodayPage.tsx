import { useNakshatraNow } from '@/hooks/useNakshatraNow';
import { useCitySelection } from '@/hooks/useCitySelection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Moon, MapPin } from 'lucide-react';
import DailyInterpretationBlocks from '@/components/today/DailyInterpretationBlocks';
import TransitionTimes from '@/components/nakshatra/TransitionTimes';
import NakshatraChangeBanner from '@/components/alerts/NakshatraChangeBanner';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { getNakshatraSlug } from '@/lib/nakshatra';

export default function TodayPage() {
  const { data, isLoading, error } = useNakshatraNow();
  const { currentCity } = useCitySelection();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Error loading Nakshatra data. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <NakshatraChangeBanner />

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
          <h2 className="text-4xl font-bold mb-2">Today's Nakshatra</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Moon's current lunar mansion and its influence on this moment
          </p>
        </div>
      </div>

      {/* Current Nakshatra Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Moon className="h-5 w-5" />
            Current Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
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

      {/* Transition Times */}
      {data && <TransitionTimes data={data} />}

      {/* Daily Interpretation */}
      {data && <DailyInterpretationBlocks nakshatraName={data.nakshatraName} />}
    </div>
  );
}
