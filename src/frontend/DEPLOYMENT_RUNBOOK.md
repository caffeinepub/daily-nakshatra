# Deployment Runbook - Daily Nakshatra App

## Overview
This runbook describes how to rerun a full deployment and what to capture when deployment reports "Deployment didn't complete."

## Version
Current deployment target: **Version 24**

## Full Deployment Steps

### 1. Pre-Deployment Checklist
- [ ] Verify all code changes are committed
- [ ] Ensure `frontend/src/lib/appVersion.ts` shows correct version
- [ ] Check that no build errors exist locally

### 2. Deployment Command
