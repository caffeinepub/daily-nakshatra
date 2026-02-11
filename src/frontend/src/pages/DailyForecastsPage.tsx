import RequireAuth from '@/components/auth/RequireAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Glyph from '@/components/glyphs/Glyph';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function DailyForecastsPage() {
  return (
    <RequireAuth message="Sign in to view your daily forecasts.">
      <DailyForecastsContent />
    </RequireAuth>
  );
}

function DailyForecastsContent() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-sans tracking-wider">Daily Forecasts</h1>
        <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
          Your personal nakshatra forecasts generated at 9:00 AM each day
        </p>
      </div>

      <Alert className="border-primary/30 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-primary text-sm tracking-wide">
          Daily forecasts feature is coming soon. Enable it in your profile settings once available.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="py-12 text-center space-y-4">
          <Glyph type="moon" className="h-12 w-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground text-sm tracking-wide">
            No forecasts yet. This feature will be activated soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
