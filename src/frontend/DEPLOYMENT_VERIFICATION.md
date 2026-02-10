# Production Deployment Verification

This checklist helps verify that Version 24 has been successfully deployed to production.

## Post-Deployment Verification Steps

### 1. Basic Availability
- [ ] Navigate to the production URL
- [ ] Confirm the application loads without errors
- [ ] Check browser console for any critical errors

### 2. Version Verification
- [ ] Scroll to the footer at the bottom of any page
- [ ] Confirm the version label displays **"Version 24"**
- [ ] Verify the version is visible in monospace font below the caffeine.ai attribution

### 3. Core Functionality Smoke Test
- [ ] Test navigation between pages (Today, Tomorrow, Knowledge Base, History, Profile)
- [ ] Verify the city picker opens and displays cities
- [ ] Confirm the alerts toggle is functional
- [ ] Test login/logout flow with Internet Identity

### 4. Technical Verification (Optional)
- [ ] Open browser DevTools Console
- [ ] Look for the boot message: `🌙 Daily Nakshatra Version 24 initialized`
- [ ] Inspect the root element (`#root`) and verify `data-app-version="Version 24"` attribute
- [ ] Check footer element for `data-testid="app-version"` attribute

## Rollback Criteria

If any of the following occur, consider rollback:
- Application fails to load or shows blank screen
- Critical JavaScript errors in console preventing core functionality
- Version label does not update to Version 24
- Authentication flow is broken

## Notes

- This verification focuses on frontend deployment only
- Backend canister should already be deployed and stable
- All checks should be performed in production environment
- Test on multiple browsers if possible (Chrome, Firefox, Safari)
