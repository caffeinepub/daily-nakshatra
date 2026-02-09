# Specification

## Summary
**Goal:** Build Daily Nakshatra with a Today view that shows the real-time Nakshatra/Pada for a selected city (with updates and transitions), plus a data-driven Nakshatra knowledge base and detail pages, all in a cohesive lunar/contemplative theme.

**Planned changes:**
- Create core navigation and pages: Today, Knowledge Base (27 Nakshatras), and Nakshatra detail (Symbolism & Mythology, Core Traits, Pada Breakdown).
- Add a searchable city picker with a built-in starter city list; persist selected city in local browser storage and display the city’s local time.
- Implement backend computation to determine lunar longitude, current Nakshatra, and Pada from a UTC timestamp, and expose it via a query method for the frontend.
- Add interval-based refreshing on Today and recompute when city changes; show estimated next Pada transition time and next Nakshatra transition time in the selected city’s local time.
- Add data-driven Today content blocks for the active Nakshatra: “What Today Feels Like” and “A Day in the Life,” including the minimum required Uttara Phalguni example tone/vignette.
- Create a frontend dataset for all 27 Nakshatras including symbols, deity/archetype, planetary ruler, themes, traits (strengths + shadows), and a 4-Pada breakdown with Navamsa sign per Pada; render Knowledge Base from this dataset.
- Add an in-app toggle for Nakshatra change alerts; when enabled, show a visible banner when the Nakshatra changes from the previously displayed value.
- Define and apply a cohesive “lunar / contemplative” visual theme across pages (avoiding blue/purple as the primary palette).
- Add and reference generated static assets (logo and subtle hero/background) from the frontend as static files.

**User-visible outcome:** Users can pick a city, see the current Nakshatra/Pada and its daily interpretation that updates automatically (including upcoming transition times), browse all 27 Nakshatras, open detailed reference pages, and optionally receive an in-app banner when the Nakshatra changes—within a consistent contemplative visual design.
