# Specification

## Summary
**Goal:** Fix the Today page “Unable to proceed”/infinite loading bug so users can recover from nakshatra fetch or actor initialization failures and proceed without a full refresh.

**Planned changes:**
- Update Today page loading/error flow to avoid indefinite skeleton/loading states and replace blocking “Unable to proceed” states with clear messaging and a working retry/reload action.
- Ensure Today page retry actions trigger a real re-attempt to fetch the current nakshatra and proceed to render results once the backend becomes available again (without requiring a full page refresh).
- Harden actor initialization in the frontend to catch and surface setup/access-control init failures, expose distinct “loading” vs “failed” states, and allow user-triggered re-initialization attempts when possible.
- Update backend access-control initialization so missing/empty optional secret token input does not trap and does not prevent normal (non-admin) usage or subsequent public method calls (e.g., determineNakshatra).

**User-visible outcome:** If loading the current nakshatra fails or prerequisites aren’t ready, users see a clear explanation and a reliable retry/reload option; once recovery succeeds, the Today page displays the nakshatra without needing to manually refresh the entire page.
