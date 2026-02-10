/**
 * Sanitizes error values for safe display in the UI
 * Handles Error objects, strings, and unknown values without throwing
 */

export function sanitizeError(error: unknown): string {
  if (!error) {
    return 'Unknown error occurred';
  }

  // Handle Error instances
  if (error instanceof Error) {
    return error.message || 'An error occurred';
  }

  // Handle string errors
  if (typeof error === 'string') {
    return error;
  }

  // Handle objects with message property
  if (typeof error === 'object' && 'message' in error) {
    const message = (error as { message: unknown }).message;
    if (typeof message === 'string') {
      return message;
    }
  }

  // Handle objects with toString
  if (typeof error === 'object' && error !== null) {
    try {
      const stringified = JSON.stringify(error);
      if (stringified && stringified !== '{}') {
        return stringified;
      }
    } catch {
      // JSON.stringify failed, try toString
      try {
        return String(error);
      } catch {
        return 'Error object could not be serialized';
      }
    }
  }

  // Fallback for primitives
  try {
    return String(error);
  } catch {
    return 'Unknown error occurred';
  }
}
