/**
 * Shared actor query key builder to ensure consistency across hooks
 * Prevents undefined elements in query keys for anonymous users
 */

const ACTOR_QUERY_KEY = 'actor';

/**
 * Builds a stable actor query key that works for both anonymous and authenticated users
 * @param principalString - The principal string from identity, or undefined for anonymous
 * @returns A stable query key array with no undefined elements
 */
export function buildActorQueryKey(principalString: string | undefined): unknown[] {
  // Anonymous users get a stable key without undefined
  if (!principalString) {
    return [ACTOR_QUERY_KEY];
  }
  // Authenticated users get an identity-scoped key
  return [ACTOR_QUERY_KEY, principalString];
}
