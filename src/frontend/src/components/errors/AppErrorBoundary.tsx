import React, { Component, ReactNode } from 'react';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';
import { APP_VERSION } from '@/lib/appVersion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Copy, RefreshCw } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export default class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('AppErrorBoundary caught error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleCopyError = () => {
    const { error, errorInfo } = this.state;
    const errorReport = this.generateErrorReport();
    
    navigator.clipboard.writeText(errorReport).then(
      () => {
        console.log('Error report copied to clipboard');
      },
      (err) => {
        console.error('Failed to copy error report:', err);
      }
    );
  };

  generateErrorReport = (): string => {
    const { error, errorInfo } = this.state;
    const timestamp = new Date().toISOString();
    
    return `
=== Daily Nakshatra App Error Report ===
Version: ${APP_VERSION}
Timestamp: ${timestamp}
URL: ${window.location.href}

Error Message:
${sanitizeError(error)}

Component Stack:
${errorInfo?.componentStack || 'Not available'}

Please include this report when filing a bug report.
See DEPLOYMENT_FAILURE_REPORT.md for more details.
    `.trim();
  };

  render() {
    if (this.state.hasError) {
      const sanitizedError = sanitizeError(this.state.error);

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <Card className="max-w-2xl w-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <div>
                  <CardTitle>Application Error</CardTitle>
                  <CardDescription>
                    The application encountered an unexpected error
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We apologize for the inconvenience. The application has encountered an error and cannot continue.
              </p>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    Show Error Details
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="rounded-md bg-muted p-4 text-sm font-mono break-all">
                    {sanitizedError}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <div className="flex gap-3">
                <Button onClick={this.handleReload} className="flex-1 gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Reload Application
                </Button>
                <Button onClick={this.handleCopyError} variant="outline" className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy Error
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                {APP_VERSION} • If this persists, please report the issue
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
