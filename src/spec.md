# Specification

## Summary
**Goal:** Fix actor initialization so anonymous users can connect reliably, avoid failing initialization when no admin token is provided, and improve the connection-failure diagnostics without changing the primary message.

**Planned changes:**
- Update frontend actor initialization to use a stable React Query key for anonymous users (no `undefined` element) and ensure anonymous actor creation does not error solely due to missing Internet Identity.
- Change frontend initialization flow to call `_initializeAccessControlWithSecret` only when the `caffeineAdminToken` URL parameter is present and non-empty, and ensure retry works without a page reload after token changes.
- Enhance the existing “Connection failed” screen on Today/Tomorrow by adding a secondary, collapsible error-details area that safely displays a sanitized developer-oriented message from the initialization error.
- Add defensive backend behavior so `_initializeAccessControlWithSecret` does not trap when called with an empty or invalid secret, and does not break public/anonymous method usage.

**User-visible outcome:** Logged-out users can load Today and Tomorrow without seeing “Connection failed” when the backend is reachable; if initialization does fail, users still see the same primary message plus optional error details, and “Retry Connection” works without reloading.
