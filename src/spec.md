# Specification

## Summary
**Goal:** Fix intermittent “Error loading Nakshatra data” failures on the Today and Tomorrow pages by preventing invalid/boundary lunar longitude values (especially 360) from triggering backend errors.

**Planned changes:**
- Frontend: Validate longitude using the backend-compatible domain (>= 0 and < 360), treating 360 as invalid.
- Frontend: Normalize any computed lunar longitude into the [0, 360) range before issuing `determineNakshatra` requests (wrap negatives; map 360 to 0).
- Frontend (Tomorrow page): Keep the `determineNakshatra` query disabled until `tomorrowLongitude` is computed and validated; avoid sending placeholder longitudes.
- Backend: Normalize `lunarLongitude` into [0, 360) at the start of `determineNakshatra` before validation and nakshatra lookup to avoid boundary-equivalent traps.

**User-visible outcome:** Today/Tomorrow pages load Nakshatra results more reliably, avoiding the “Error loading Nakshatra data” state caused by boundary/placeholder longitude values; any user-facing error text remains in English.
