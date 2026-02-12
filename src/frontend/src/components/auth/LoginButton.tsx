import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut } from 'lucide-react';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';
import { logDeploymentError } from '@/lib/diagnostics/deploymentReport';

export default function LoginButton() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const disabled = loginStatus === 'logging-in';

  const handleAuth = async () => {
    if (isAuthenticated) {
      try {
        await clear();
        queryClient.clear();
        console.log('✓ Logout successful, cache cleared');
      } catch (error: unknown) {
        const sanitized = sanitizeError(error);
        console.error('Logout error:', sanitized);
        logDeploymentError('logout', sanitized);
      }
    } else {
      try {
        await login();
        console.log('✓ Login successful');
      } catch (error: any) {
        const sanitized = sanitizeError(error);
        console.error('Login error:', sanitized);
        logDeploymentError('login', sanitized);
        
        // Handle specific case where user is already authenticated
        if (error.message === 'User is already authenticated') {
          console.log('Attempting to clear stale auth state...');
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  return (
    <Button
      onClick={handleAuth}
      disabled={disabled}
      variant={isAuthenticated ? 'outline' : 'default'}
      size="sm"
      className="gap-2"
    >
      {loginStatus === 'logging-in' ? (
        <>Logging in...</>
      ) : isAuthenticated ? (
        <>
          <LogOut className="h-4 w-4" />
          Logout
        </>
      ) : (
        <>
          <LogIn className="h-4 w-4" />
          Login
        </>
      )}
    </Button>
  );
}
