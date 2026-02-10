import type { DreamLogEntry } from '@/backend';

interface DreamTheme {
  count: number;
  keywords: string[];
}

const STOPWORDS = new Set([
  'the',
  'a',
  'an',
  'and',
  'or',
  'but',
  'in',
  'on',
  'at',
  'to',
  'for',
  'of',
  'with',
  'by',
  'from',
  'as',
  'is',
  'was',
  'were',
  'been',
  'be',
  'have',
  'has',
  'had',
  'do',
  'does',
  'did',
  'will',
  'would',
  'could',
  'should',
  'may',
  'might',
  'can',
  'i',
  'me',
  'my',
  'we',
  'our',
  'you',
  'your',
  'it',
  'its',
  'they',
  'them',
  'their',
  'this',
  'that',
  'these',
  'those',
  'am',
  'are',
  'was',
  'were',
  'been',
  'being',
  'about',
  'very',
  'just',
  'so',
  'than',
  'too',
  'also',
]);

export function extractDreamThemes(dreamLogs: DreamLogEntry[]): Record<string, DreamTheme> {
  const themes: Record<string, DreamTheme> = {};

  dreamLogs.forEach((entry) => {
    if (!entry.dreamNotes) return;

    const nakshatra = entry.nakshatra;
    if (!themes[nakshatra]) {
      themes[nakshatra] = { count: 0, keywords: [] };
    }

    themes[nakshatra].count++;

    // Extract keywords
    const words = entry.dreamNotes
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((word) => word.length > 3 && !STOPWORDS.has(word));

    words.forEach((word) => {
      if (!themes[nakshatra].keywords.includes(word)) {
        themes[nakshatra].keywords.push(word);
      }
    });
  });

  // Sort keywords by frequency (simple approach: keep first 10 unique)
  Object.keys(themes).forEach((nakshatra) => {
    themes[nakshatra].keywords = themes[nakshatra].keywords.slice(0, 10);
  });

  return themes;
}
