# Specification

## Summary
**Goal:** Ensure the Today page hero background image reliably loads using the new asset, and move the hero overlay text to the bottom lower third for improved layout.

**Planned changes:**
- Update the Today page hero background image reference to reliably resolve and load the file `Untitled design (33).png`, including addressing special characters in the filename and ensuring the asset is in the correct static location for both dev and production builds.
- Adjust the Today page hero overlay layout so the glyph, “Current Nakshatra Placement” heading, and subtitle sit in the bottom lower third with responsive padding and maintained readability/contrast.

**User-visible outcome:** The Today page hero shows the intended new background image without broken loading, and the hero text appears in the lower third of the image on mobile and desktop.
