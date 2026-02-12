import { sanitizeError } from './sanitizeError';
import { APP_VERSION } from '../appVersion';

/**
 * Standardized logging for deployment-critical errors
 * Tags messages with APP_VERSION for deterministic troubleshooting
 */
export function logDeploymentError(context: string, error: unknown): void {
  const sanitized = sanitizeError(error);
  const timestamp = new Date().toISOString();
  
  console.error(
    `[${APP_VERSION}] Deployment Error [${context}] @ ${timestamp}:`,
    sanitized
  );
}

/**
 * Log a deployment warning
 */
export function logDeploymentWarning(context: string, message: string): void {
  const timestamp = new Date().toISOString();
  
  console.warn(
    `[${APP_VERSION}] Deployment Warning [${context}] @ ${timestamp}:`,
    message
  );
}

/**
 * Log a deployment info message
 */
export function logDeploymentInfo(context: string, message: string): void {
  const timestamp = new Date().toISOString();
  
  console.log(
    `[${APP_VERSION}] Deployment Info [${context}] @ ${timestamp}:`,
    message
  );
}

/**
 * Generate a structured error report for filing
 */
export function generateErrorReport(context: string, error: unknown, additionalInfo?: Record<string, any>): string {
  const sanitized = sanitizeError(error);
  const timestamp = new Date().toISOString();
  const url = typeof window !== 'undefined' ? window.location.href : 'N/A';
  
  let report = `
=== Deployment Error Report ===
Version: ${APP_VERSION}
Context: ${context}
Timestamp: ${timestamp}
URL: ${url}

Error:
${sanitized}
`;

  if (additionalInfo) {
    report += `\nAdditional Info:\n${JSON.stringify(additionalInfo, null, 2)}`;
  }

  report += `\n\nSee DEPLOYMENT_FAILURE_REPORT.md for reporting instructions.`;
  
  return report.trim();
}
