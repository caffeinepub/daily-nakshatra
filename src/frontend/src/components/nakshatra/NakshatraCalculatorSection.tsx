import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useComputeNakshatraData, useSaveBirthData } from '@/hooks/useNakshatraCalculator';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Glyph from '@/components/glyphs/Glyph';
import CityPicker from '@/components/city/CityPicker';
import { useCitySelection } from '@/hooks/useCitySelection';
import type { Location, BirthData } from '@/backend';

interface NakshatraCalculatorSectionProps {
  initialData?: BirthData;
  showSaveButton?: boolean;
}

export default function NakshatraCalculatorSection({ 
  initialData,
  showSaveButton = false 
}: NakshatraCalculatorSectionProps) {
  const { currentCity } = useCitySelection();

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [cityPickerOpen, setCityPickerOpen] = useState(false);

  const [calculatedResults, setCalculatedResults] = useState<{
    moonNakshatra: string;
    atmakarakaNakshatra: string;
  } | null>(null);

  const computeMutation = useComputeNakshatraData();
  const saveMutation = useSaveBirthData();

  // Initialize from saved data
  useEffect(() => {
    if (initialData) {
      setDateOfBirth(initialData.dateOfBirth);
      setTimeOfBirth(initialData.timeOfBirth);
      setCalculatedResults({
        moonNakshatra: initialData.moonNakshatra,
        atmakarakaNakshatra: initialData.atmakarakaNakshatra,
      });
    }
  }, [initialData]);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateOfBirth || !timeOfBirth) return;

    try {
      const birthDateTime = new Date(`${dateOfBirth}T${timeOfBirth}`);
      const moonLongitude = calculateMoonLongitude(birthDateTime);

      const location: Location = {
        cityName: currentCity.name,
        latitude: currentCity.lat || 0,
        longitude: currentCity.lng || 0,
      };

      const result = await computeMutation.mutateAsync({
        moonLongitude,
        birthTime: timeOfBirth,
        birthLocation: location,
        dob: dateOfBirth,
        timeOfBirth,
      });

      setCalculatedResults({
        moonNakshatra: result.moonNakshatra,
        atmakarakaNakshatra: result.atmakarakaNakshatra,
      });
    } catch (error) {
      console.error('Calculation failed:', error);
    }
  };

  const handleSave = async () => {
    if (!calculatedResults) return;

    try {
      await saveMutation.mutateAsync({
        dob: dateOfBirth,
        timeOfBirth,
        location: currentCity.name,
        moonNakshatra: calculatedResults.moonNakshatra,
        atmakarakaNakshatra: calculatedResults.atmakarakaNakshatra,
      });
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
            <Glyph type="circle" className="h-6 w-6 text-primary" />
            Birth Chart
          </CardTitle>
          <CardDescription className="text-center text-sm tracking-wide leading-relaxed">
            Calculate your Moon and Atmakaraka birth nakshatras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="calc-dob" className="text-sm tracking-wide">Date of Birth</Label>
              <Input
                id="calc-dob"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                className="text-sm tracking-wide"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="calc-tob" className="text-sm tracking-wide">Time of Birth</Label>
              <Input
                id="calc-tob"
                type="time"
                value={timeOfBirth}
                onChange={(e) => setTimeOfBirth(e.target.value)}
                required
                className="text-sm tracking-wide"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm tracking-wide">Location</Label>
              <Button
                type="button"
                variant="outline"
                onClick={() => setCityPickerOpen(true)}
                className="w-full justify-start text-sm tracking-wide"
              >
                {currentCity.name}
              </Button>
            </div>

            <Button
              type="submit"
              disabled={computeMutation.isPending || !dateOfBirth || !timeOfBirth}
              variant="ghost"
              className="w-full mt-6"
            >
              {computeMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Calculating...
                </>
              ) : (
                'Calculate'
              )}
            </Button>

            {computeMutation.isError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm tracking-wide">
                  Unable to calculate. Please check your inputs and try again.
                </AlertDescription>
              </Alert>
            )}
          </form>

          {calculatedResults && (
            <>
              <Separator className="my-8" />
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm tracking-wide text-muted-foreground uppercase">Moon Nakshatra</Label>
                    <p className="text-2xl font-sans tracking-wide">{calculatedResults.moonNakshatra}</p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="text-sm tracking-wide text-muted-foreground uppercase">Atmakaraka Nakshatra</Label>
                    <p className="text-2xl font-sans tracking-wide">{calculatedResults.atmakarakaNakshatra}</p>
                  </div>
                </div>

                {showSaveButton && (
                  <>
                    <Button
                      onClick={handleSave}
                      disabled={saveMutation.isPending}
                      variant="ghost"
                      className="w-full mt-6"
                    >
                      {saveMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        'Save to Profile'
                      )}
                    </Button>

                    {saveMutation.isSuccess && (
                      <Alert className="border-primary/30 bg-primary/5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <AlertDescription className="text-primary text-sm tracking-wide">
                          Saved
                        </AlertDescription>
                      </Alert>
                    )}

                    {saveMutation.isError && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-sm tracking-wide">
                          {saveMutation.error instanceof Error && saveMutation.error.message.includes('Unauthorized')
                            ? 'Authorization failed. Please sign in again.'
                            : 'Unable to save'}
                        </AlertDescription>
                      </Alert>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <CityPicker open={cityPickerOpen} onOpenChange={setCityPickerOpen} />
    </>
  );
}

// Simple moon longitude calculation (placeholder - uses approximate formula)
function calculateMoonLongitude(date: Date): number {
  const J2000 = new Date('2000-01-01T12:00:00Z').getTime();
  const msPerDay = 86400000;
  const daysSinceJ2000 = (date.getTime() - J2000) / msPerDay;
  
  // Approximate lunar longitude (13.176358 degrees per day average motion)
  const meanLongitude = (218.316 + 13.176358 * daysSinceJ2000) % 360;
  
  return meanLongitude < 0 ? meanLongitude + 360 : meanLongitude;
}
