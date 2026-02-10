import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AlertCircle, RefreshCw, ChevronDown } from 'lucide-react';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';
import { useState } from 'react';

interface ConnectionFailedScreenProps {
  error?: unknown;
  onRetry: () => void;
  isRetrying?: boolean;
}

export default function ConnectionFailedScreen({
  error,
  onRetry,
  isRetrying = false,
}: ConnectionFailedScreenProps) {
  const [showDetails, setShowDetails] = useState(false);
  const errorDetails = error ? sanitizeError(error) : null;

  return (
    <div className="text-center py-20 space-y-6 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      
      <p className="text-foreground text-lg font-sans tracking-wide">Connection failed</p>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        Unable to connect to the service. Please try again.
      </p>

      <Button
        onClick={onRetry}
        disabled={isRetrying}
        variant="ghost"
        className="gap-2 mt-4"
      >
        {isRetrying ? (
          <>
            <RefreshCw className="h-4 w-4 animate-spin" />
            Retrying...
          </>
        ) : (
          <>
            <RefreshCw className="h-4 w-4" />
            Retry Connection
          </>
        )}
      </Button>

      {errorDetails && (
        <Collapsible open={showDetails} onOpenChange={setShowDetails} className="mt-8">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <ChevronDown
                className={`h-3 w-3 transition-transform ${showDetails ? 'rotate-180' : ''}`}
              />
              {showDetails ? 'Hide' : 'Show'} error details
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4">
            <div className="bg-muted/30 rounded-md p-4 text-left">
              <p className="text-xs font-mono text-muted-foreground break-words">
                {errorDetails}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
}
