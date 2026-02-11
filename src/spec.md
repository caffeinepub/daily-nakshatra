# Specification

## Summary
**Goal:** Fix logged-in user profile persistence and add a Nakshatra Calculator (Moon + Jaimini Atmakaraka) that can compute and save results to the user’s profile.

**Planned changes:**
- Fix backend profile persistence so saved caller profile data reliably survives refresh and fetch after login, without affecting other users.
- Add backend storage for a single per-user birth data record (DOB, TOB, selected city/location details) plus persisted computed results for Moon nakshatra and Atmakaraka nakshatra.
- Add a backend API to compute Moon birth nakshatra and Atmakaraka birth nakshatra (Jaimini highest-degree planet) from DOB/TOB/location, returning both in one response with clear input validation errors.
- Create a new frontend “Nakshatra Calculator” tab/page with DOB/TOB/location inputs, a calculate action, and a results display for both nakshatras.
- Add “Save to Profile” from the calculator when authenticated (and block saving with an English sign-in prompt when not), and display saved DOB/TOB/location + nakshatras on the Profile page.
- Embed an equivalent calculator section within the Profile page that initializes from saved data and can recompute and save with consistent success/error states.

**User-visible outcome:** Users can navigate to a Nakshatra Calculator tab to compute Moon and Atmakaraka nakshatras from birth details, and (when logged in) save and later see those saved birth details and results on their Profile; profile saving works reliably across refreshes.
