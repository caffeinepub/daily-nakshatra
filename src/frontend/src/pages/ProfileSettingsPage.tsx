import { useState, useEffect } from 'react';
import RequireAuth from '@/components/auth/RequireAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '@/hooks/useUserProfile';
import { useGetAllLogs } from '@/hooks/useUserLogs';
import { useGetDailyForecastEnabled } from '@/hooks/useDailyForecastSettings';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import Glyph from '@/components/glyphs/Glyph';
import { Skeleton } from '@/components/ui/skeleton';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';
import NakshatraCalculatorSection from '@/components/nakshatra/NakshatraCalculatorSection';

export default function ProfileSettingsPage() {
  return (
    <RequireAuth message="Sign in to manage your profile.">
      <ProfileSettingsContent />
    </RequireAuth>
  );
}

function ProfileSettingsContent() {
  const { data: profile, isLoading: profileLoading } = useGetCallerUserProfile();
  const { data: logs } = useGetAllLogs();
  const { data: forecastEnabled, isLoading: forecastLoading } = useGetDailyForecastEnabled();
  const saveProfile = useSaveCallerUserProfile();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email || '');
      setIsPremium(profile.isPremium);
    }
  }, [profile]);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveProfile.mutateAsync({
        name,
        email: email || undefined,
        isPremium,
        birthData: profile?.birthData,
      });
    } catch (error) {
      console.error('Failed to save profile:', sanitizeError(error));
    }
  };

  if (profileLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-16 w-64 mx-auto" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-2xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-sans tracking-wider">Profile</h1>
        <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
          Your account and resonance settings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
            <Glyph type="awareness" className="h-6 w-6 text-primary" />
            Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm tracking-wide">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="text-sm tracking-wide"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm tracking-wide">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="text-sm tracking-wide"
              />
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between gap-6">
              <div className="space-y-1">
                <Label htmlFor="premium" className="text-sm tracking-wide">Birth Chart Resonance</Label>
                <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
                  Show resonance insights <Badge variant="outline" className="ml-2 text-xs">Premium</Badge>
                </p>
              </div>
              <Switch id="premium" checked={isPremium} onCheckedChange={setIsPremium} />
            </div>

            <Button type="submit" disabled={saveProfile.isPending || !name} variant="ghost" className="w-full mt-6">
              {saveProfile.isPending ? 'Saving...' : 'Save'}
            </Button>

            {saveProfile.isSuccess && (
              <Alert className="border-primary/30 bg-primary/5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary text-sm tracking-wide">
                  Saved
                </AlertDescription>
              </Alert>
            )}

            {saveProfile.isError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm tracking-wide">
                  {saveProfile.error instanceof Error && saveProfile.error.message.includes('Unauthorized')
                    ? 'Authorization failed. Please sign in again.'
                    : 'Unable to save'}
                </AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>

      <NakshatraCalculatorSection 
        initialData={profile?.birthData}
        showSaveButton={true}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
            <Glyph type="ritual" className="h-6 w-6 text-primary" />
            Daily Forecasts
          </CardTitle>
          <CardDescription className="text-center text-sm tracking-wide leading-relaxed">
            Receive personalized daily nakshatra forecasts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between gap-6">
            <div className="space-y-1">
              <Label htmlFor="forecasts" className="text-sm tracking-wide">Enable Daily Forecasts</Label>
              <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
                Get daily insights based on the current nakshatra
              </p>
            </div>
            <Switch id="forecasts" checked={false} disabled />
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm tracking-wide">
              Daily forecasts are coming soon
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
