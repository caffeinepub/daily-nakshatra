# Specification

## Summary
**Goal:** Make Version 22 live by updating the UI version label and deploying the current frontend/backend to production canisters.

**Planned changes:**
- Update `frontend/src/lib/appVersion.ts` to export `APP_VERSION = 'Version 22'` so the app footer reflects the release.
- Deploy/upgrade the Version 22 frontend assets and backend Motoko canister(s) to the live Internet Computer environment.

**User-visible outcome:** End users loading the production URL receive the latest release without a hard refresh, and the app footer displays “Version 22”.
