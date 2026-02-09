import { Link, useRouterState } from '@tanstack/react-router';
import { Moon, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CityPicker from '../city/CityPicker';
import AlertsToggle from '../alerts/AlertsToggle';
import { useCitySelection } from '@/hooks/useCitySelection';
import { useState } from 'react';

export default function AppHeader() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { currentCity, localTime } = useCitySelection();
  const [cityPickerOpen, setCityPickerOpen] = useState(false);

  return (
    <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/daily-nakshatra-logo.dim_512x512.png"
              alt="Daily Nakshatra"
              className="h-10 w-10 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold tracking-tight">Daily Nakshatra</h1>
              <p className="text-xs text-muted-foreground">Lunar Wisdom for Today</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                currentPath === '/' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Today
            </Link>
            <Link
              to="/knowledge"
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                currentPath.startsWith('/knowledge') || currentPath.startsWith('/nakshatra')
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Knowledge Base
            </Link>

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/40">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCityPickerOpen(true)}
                className="gap-2 text-xs"
              >
                <MapPin className="h-3.5 w-3.5" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">{currentCity.name}</span>
                  <span className="text-muted-foreground">{localTime}</span>
                </div>
              </Button>
              <AlertsToggle />
            </div>
          </nav>
        </div>
      </div>

      <CityPicker open={cityPickerOpen} onOpenChange={setCityPickerOpen} />
    </header>
  );
}
