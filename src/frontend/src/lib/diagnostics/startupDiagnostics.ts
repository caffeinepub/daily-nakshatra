import { APP_VERSION } from '../appVersion';

/**
 * Centralized startup diagnostics for production verification
 * Logs boot message and sets root element data attribute
 */
export function runStartupDiagnostics(): void {
  // Log boot message with version
  console.log(`🌙 Daily Nakshatra App booting - ${APP_VERSION}`);

  // Set data attribute on root element for verification
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.setAttribute('data-app-version', APP_VERSION);
    console.log(`✓ Root element tagged with ${APP_VERSION}`);
  } else {
    console.warn('⚠ Root element not found for version tagging');
  }
}

/**
 * Get the current app version
 */
export function getAppVersion(): string {
  return APP_VERSION;
}
