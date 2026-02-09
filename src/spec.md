# Specification

## Summary
**Goal:** Revert the frontend typography to the pre-Lovalina (Version 8) setup by removing the Lovalina font integration and all UI usage of its font classes.

**Planned changes:**
- Remove the Lovalina `@font-face` and any `/assets/fonts/lovalina/...` references from `frontend/src/index.css`.
- Remove the `fontFamily.lovalina` entry from `frontend/tailwind.config.js`.
- Remove `font-lovalina` usage from the app header brand title and primary page titles (Today, Tomorrow, Knowledge Base, Nakshatra Detail).
- Verify there are no remaining references to `font-lovalina`, `Lovalina`, or `/assets/fonts/lovalina` anywhere in the frontend and that the app builds without Lovalina font files.

**User-visible outcome:** The app displays with the original/default typography (no Lovalina styling), with no missing-font network errors, matching the pre-font-change (Version 8) look.
