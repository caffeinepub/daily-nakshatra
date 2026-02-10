import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import CityPicker from '@/components/city/CityPicker';
import AlertsToggle from '@/components/alerts/AlertsToggle';
import LoginButton from '@/components/auth/LoginButton';
import Glyph from '@/components/glyphs/Glyph';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCitySelection } from '@/hooks/useCitySelection';

export default function AppHeader() {
  const [cityPickerOpen, setCityPickerOpen] = useState(false);
  const { currentCity } = useCitySelection();

  return (
    <header className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6 max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <Glyph type="moon" className="h-7 w-7 text-primary" />
            <h1 className="text-xl font-sans tracking-wider">Daily Nakshatra</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-sans tracking-wide hover:text-primary transition-colors"
              activeProps={{ className: 'text-primary' }}
            >
              Today
            </Link>
            <Link
              to="/tomorrow"
              className="text-sm font-sans tracking-wide hover:text-primary transition-colors"
              activeProps={{ className: 'text-primary' }}
            >
              Tomorrow
            </Link>
            <Link
              to="/knowledge"
              className="text-sm font-sans tracking-wide hover:text-primary transition-colors"
              activeProps={{ className: 'text-primary' }}
            >
              Knowledge
            </Link>
            <Link
              to="/history"
              className="text-sm font-sans tracking-wide hover:text-primary transition-colors"
              activeProps={{ className: 'text-primary' }}
            >
              History
            </Link>
            <Link
              to="/profile"
              className="text-sm font-sans tracking-wide hover:text-primary transition-colors"
              activeProps={{ className: 'text-primary' }}
            >
              Profile
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <AlertsToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setCityPickerOpen(true)} 
              className="gap-2 text-xs"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{currentCity.name}</span>
            </Button>
            <LoginButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center gap-6 mt-6 overflow-x-auto pb-2">
          <Link
            to="/"
            className="text-sm font-sans tracking-wide hover:text-primary transition-colors whitespace-nowrap"
            activeProps={{ className: 'text-primary' }}
          >
            Today
          </Link>
          <Link
            to="/tomorrow"
            className="text-sm font-sans tracking-wide hover:text-primary transition-colors whitespace-nowrap"
            activeProps={{ className: 'text-primary' }}
          >
            Tomorrow
          </Link>
          <Link
            to="/knowledge"
            className="text-sm font-sans tracking-wide hover:text-primary transition-colors whitespace-nowrap"
            activeProps={{ className: 'text-primary' }}
          >
            Knowledge
          </Link>
          <Link
            to="/history"
            className="text-sm font-sans tracking-wide hover:text-primary transition-colors whitespace-nowrap"
            activeProps={{ className: 'text-primary' }}
          >
            History
          </Link>
          <Link
            to="/profile"
            className="text-sm font-sans tracking-wide hover:text-primary transition-colors whitespace-nowrap"
            activeProps={{ className: 'text-primary' }}
          >
            Profile
          </Link>
        </nav>
      </div>

      <CityPicker open={cityPickerOpen} onOpenChange={setCityPickerOpen} />
    </header>
  );
}
