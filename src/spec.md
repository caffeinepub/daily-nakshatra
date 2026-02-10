# Specification

## Summary
**Goal:** Fix Profile/Birth Chart saving for authenticated Internet Identity users and persist Lahiri-based Moon/Atmakaraka Nakshatra results as part of saved birth chart data.

**Planned changes:**
- Update backend authorization/data-access so normal signed-in users can read/write their own `UserProfile` and `BirthChartData` without any manual/admin-only initialization, preventing “Unable to save” due to authorization traps.
- Ensure Profile-related backend methods used by the Profile page (`getCallerUserProfile`, `saveCallerUserProfile`, `getAllLogs`, `saveBirthChart`) do not trap for a normal authenticated user; keep existing frontend error text, but log sanitized errors to console for non-auth failures.
- Add backend deterministic Lahiri Ayanamsa-based computations to derive `moonNakshatra` and `atmakarakaNakshatra` (normalize 0–360 and map to nakshatra segments), and persist these computed values into the caller’s saved birth chart.
- Keep the existing Profile/Birth Chart UI and flow unchanged while wiring it to the updated backend so that after saving, the form reflects persisted values returned from the backend (via refetch/invalidation).

**User-visible outcome:** Signed-in users can successfully save Profile Information and Birth Chart data (showing “Saved” instead of “Unable to save”), and the app permanently stores and returns the computed Lahiri-based Moon Nakshatra and Atmakaraka Nakshatra values on refresh without requiring any new user steps.
