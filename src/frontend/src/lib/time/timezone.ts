export function formatTransitionTime(date: Date, timezone: string): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  } catch {
    return date.toLocaleString();
  }
}

/**
 * Returns a Date object representing the current wall-clock time in the target timezone.
 * This is used to compute lunar longitude from the perspective of a specific city.
 * Falls back to UTC if timezone formatting fails.
 */
export function getCurrentTimeInTimezone(timezone: string): Date {
  try {
    const now = new Date();
    
    // Get the time components in the target timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    
    const parts = formatter.formatToParts(now);
    const getValue = (type: string) => parts.find(p => p.type === type)?.value || '0';
    
    const year = parseInt(getValue('year'), 10);
    const month = parseInt(getValue('month'), 10) - 1; // JS months are 0-indexed
    const day = parseInt(getValue('day'), 10);
    const hour = parseInt(getValue('hour'), 10);
    const minute = parseInt(getValue('minute'), 10);
    const second = parseInt(getValue('second'), 10);
    
    // Create a Date in UTC that represents the local time in the target timezone
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  } catch (error) {
    console.error('Error getting time in timezone:', error);
    // Fallback to current UTC time
    return new Date();
  }
}
