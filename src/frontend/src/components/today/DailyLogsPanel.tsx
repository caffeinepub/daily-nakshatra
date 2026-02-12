import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSaveCheckIn, useSaveSleepLog, useSaveDreamLog, useGetCurrentDayOfYear } from '@/hooks/useUserLogs';
import { CheckCircle2, AlertCircle, Heart, Moon as MoonIcon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';

interface DailyLogsPanelProps {
  nakshatraName: string;
}

export default function DailyLogsPanel({ nakshatraName }: DailyLogsPanelProps) {
  const [mood, setMood] = useState('');
  const [energy, setEnergy] = useState([5]);
  const [restlessness, setRestlessness] = useState([5]);
  const [sleepNotes, setSleepNotes] = useState('');
  const [dreamNotes, setDreamNotes] = useState('');

  const { data: dayOfYear } = useGetCurrentDayOfYear();
  const saveCheckIn = useSaveCheckIn();
  const saveSleepLog = useSaveSleepLog();
  const saveDreamLog = useSaveDreamLog();

  // Reset success states when user starts typing again
  useEffect(() => {
    if (saveCheckIn.isSuccess) {
      const timer = setTimeout(() => saveCheckIn.reset(), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveCheckIn.isSuccess]);

  useEffect(() => {
    if (saveSleepLog.isSuccess) {
      const timer = setTimeout(() => saveSleepLog.reset(), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveSleepLog.isSuccess]);

  useEffect(() => {
    if (saveDreamLog.isSuccess) {
      const timer = setTimeout(() => saveDreamLog.reset(), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveDreamLog.isSuccess]);

  const handleCheckInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dayOfYear) return;

    // Clear any previous success state before new submission
    saveCheckIn.reset();

    try {
      await saveCheckIn.mutateAsync({
        dayOfYear,
        nakshatra: nakshatraName,
        mood: mood || null,
        energy: BigInt(energy[0]),
        restlessness: BigInt(restlessness[0]),
      });
      // Only clear form on verified success
      setMood('');
      setEnergy([5]);
      setRestlessness([5]);
    } catch (error) {
      console.error('Failed to save check-in:', error);
      // Error is already handled by mutation's onError
    }
  };

  const handleSleepLogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dayOfYear) return;

    // Clear any previous success state before new submission
    saveSleepLog.reset();

    try {
      await saveSleepLog.mutateAsync({
        dayOfYear,
        nakshatra: nakshatraName,
        sleepNotes: sleepNotes || null,
      });
      // Only clear form on verified success
      setSleepNotes('');
    } catch (error) {
      console.error('Failed to save sleep log:', error);
      // Error is already handled by mutation's onError
    }
  };

  const handleDreamLogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dayOfYear) return;

    // Clear any previous success state before new submission
    saveDreamLog.reset();

    try {
      await saveDreamLog.mutateAsync({
        dayOfYear,
        nakshatra: nakshatraName,
        dreamNotes: dreamNotes || null,
      });
      // Only clear form on verified success
      setDreamNotes('');
    } catch (error) {
      console.error('Failed to save dream log:', error);
      // Error is already handled by mutation's onError
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          Daily Check-In & Logs
        </CardTitle>
        <CardDescription>Track your experiences under today's Nakshatra</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="checkin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="checkin">Check-In</TabsTrigger>
            <TabsTrigger value="sleep">Sleep & Dreams</TabsTrigger>
          </TabsList>

          <TabsContent value="checkin" className="space-y-4">
            <form onSubmit={handleCheckInSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mood">How are you feeling? (optional)</Label>
                <Input
                  id="mood"
                  placeholder="e.g., calm, energized, restless..."
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Energy Level: {energy[0]}/10</Label>
                <Slider value={energy} onValueChange={setEnergy} min={1} max={10} step={1} />
              </div>

              <div className="space-y-2">
                <Label>Restlessness: {restlessness[0]}/10</Label>
                <Slider value={restlessness} onValueChange={setRestlessness} min={1} max={10} step={1} />
              </div>

              <Button type="submit" disabled={saveCheckIn.isPending} className="w-full">
                {saveCheckIn.isPending ? 'Saving...' : 'Save Check-In'}
              </Button>

              {saveCheckIn.isSuccess && (
                <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertDescription className="text-green-600 dark:text-green-400">
                    Check-in saved successfully!
                  </AlertDescription>
                </Alert>
              )}

              {saveCheckIn.isError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {sanitizeError(saveCheckIn.error)}
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </TabsContent>

          <TabsContent value="sleep" className="space-y-4">
            <form onSubmit={handleSleepLogSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sleepNotes">Sleep Notes (optional)</Label>
                <Textarea
                  id="sleepNotes"
                  placeholder="How did you sleep? Any observations..."
                  value={sleepNotes}
                  onChange={(e) => setSleepNotes(e.target.value)}
                  rows={3}
                />
              </div>

              <Button type="submit" disabled={saveSleepLog.isPending} className="w-full">
                {saveSleepLog.isPending ? 'Saving...' : 'Save Sleep Log'}
              </Button>

              {saveSleepLog.isSuccess && (
                <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertDescription className="text-green-600 dark:text-green-400">
                    Sleep log saved successfully!
                  </AlertDescription>
                </Alert>
              )}

              {saveSleepLog.isError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {sanitizeError(saveSleepLog.error)}
                  </AlertDescription>
                </Alert>
              )}
            </form>

            <form onSubmit={handleDreamLogSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dreamNotes">
                  <MoonIcon className="h-4 w-4 inline mr-1" />
                  Dream Notes (optional)
                </Label>
                <Textarea
                  id="dreamNotes"
                  placeholder="Any dreams or themes you remember..."
                  value={dreamNotes}
                  onChange={(e) => setDreamNotes(e.target.value)}
                  rows={3}
                />
              </div>

              <Button type="submit" disabled={saveDreamLog.isPending} className="w-full">
                {saveDreamLog.isPending ? 'Saving...' : 'Save Dream Log'}
              </Button>

              {saveDreamLog.isSuccess && (
                <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertDescription className="text-green-600 dark:text-green-400">
                    Dream log saved successfully!
                  </AlertDescription>
                </Alert>
              )}

              {saveDreamLog.isError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {sanitizeError(saveDreamLog.error)}
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
