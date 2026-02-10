import { Outlet } from '@tanstack/react-router';
import AppHeader from './AppHeader';
import { APP_VERSION } from '@/lib/appVersion';

export default function AppLayout() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'unknown-app';

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Outlet />
      </main>
      <footer className="border-t border-border/30 mt-24 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-sm text-muted-foreground tracking-wide">
              © {currentYear}. Built with reverence using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-xs text-muted-foreground/60">
              {APP_VERSION}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
