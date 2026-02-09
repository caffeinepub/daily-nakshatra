# Specification

## Summary
**Goal:** Fix the “Use Current Position” (GPS) flow so the app can reliably select a location from browser geolocation, persist it, and use it for Today page calculations without requiring external services.

**Planned changes:**
- Add/repair a City Picker control labeled “Use Current Position” that triggers `navigator.geolocation` and updates the selected location immediately on success.
- Implement robust error handling for unsupported geolocation, denied permission, timeouts, and other failures, showing an English error message while keeping manual city selection available.
- Update the location selection model and localStorage persistence/validation to allow a geolocation-derived location (not present in `cities.ts`) to be saved and restored safely.
- When selecting via geolocation, derive and store an IANA timezone using `Intl.DateTimeFormat().resolvedOptions().timeZone` (no external APIs), and ensure Today page uses this timezone context.
- Ensure Today/Nakshatra results refresh correctly when switching to current position (avoid stale React Query results from the previously selected city/timezone).

**User-visible outcome:** Users can tap “Use Current Position” to switch the app to their current location/timezone instantly; if it fails, they see a clear English error and can still choose a city manually. The selection persists across reloads and falls back to New York safely if stored data is invalid.
