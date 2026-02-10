import type { CheckInEntry, SleepLogEntry, DreamLogEntry } from '@/backend';

export function generateInsights(
  checkIns: CheckInEntry[],
  sleepLogs: SleepLogEntry[],
  dreamLogs: DreamLogEntry[]
): string[] {
  const insights: string[] = [];

  if (checkIns.length < 3) {
    return insights;
  }

  // Group check-ins by Nakshatra
  const nakshatraGroups: Record<string, CheckInEntry[]> = {};
  checkIns.forEach((entry) => {
    if (!nakshatraGroups[entry.nakshatra]) {
      nakshatraGroups[entry.nakshatra] = [];
    }
    nakshatraGroups[entry.nakshatra].push(entry);
  });

  // Find Nakshatras with multiple entries
  const nakshatrasWithMultipleEntries = Object.entries(nakshatraGroups).filter(([_, entries]) => entries.length >= 2);

  // Energy patterns
  nakshatrasWithMultipleEntries.forEach(([nakshatra, entries]) => {
    const energyLevels = entries.filter((e) => e.energy !== undefined).map((e) => Number(e.energy));
    if (energyLevels.length >= 2) {
      const avgEnergy = energyLevels.reduce((a, b) => a + b, 0) / energyLevels.length;
      if (avgEnergy >= 7) {
        insights.push(
          `You tend to report higher energy levels under ${nakshatra}. Your average energy during this Nakshatra is ${avgEnergy.toFixed(1)}/10.`
        );
      } else if (avgEnergy <= 4) {
        insights.push(
          `${nakshatra} often correlates with lower energy for you. Your average energy during this Nakshatra is ${avgEnergy.toFixed(1)}/10.`
        );
      }
    }
  });

  // Mood patterns
  nakshatrasWithMultipleEntries.forEach(([nakshatra, entries]) => {
    const moods = entries.filter((e) => e.mood).map((e) => e.mood!.toLowerCase());
    if (moods.length >= 2) {
      const moodCounts: Record<string, number> = {};
      moods.forEach((mood) => {
        moodCounts[mood] = (moodCounts[mood] || 0) + 1;
      });
      const mostCommonMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0];
      if (mostCommonMood && mostCommonMood[1] >= 2) {
        insights.push(
          `You often describe feeling "${mostCommonMood[0]}" during ${nakshatra}. This pattern has appeared ${mostCommonMood[1]} times.`
        );
      }
    }
  });

  // Restlessness patterns
  nakshatrasWithMultipleEntries.forEach(([nakshatra, entries]) => {
    const restlessnessLevels = entries
      .filter((e) => e.restlessness !== undefined)
      .map((e) => Number(e.restlessness));
    if (restlessnessLevels.length >= 2) {
      const avgRestlessness = restlessnessLevels.reduce((a, b) => a + b, 0) / restlessnessLevels.length;
      if (avgRestlessness >= 7) {
        insights.push(
          `${nakshatra} seems to bring more restlessness for you. Your average restlessness during this Nakshatra is ${avgRestlessness.toFixed(1)}/10.`
        );
      } else if (avgRestlessness <= 3) {
        insights.push(
          `You tend to feel more settled during ${nakshatra}. Your average restlessness is ${avgRestlessness.toFixed(1)}/10.`
        );
      }
    }
  });

  return insights.slice(0, 3);
}
