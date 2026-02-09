import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, MapPin, Check, Locate, Loader2, AlertCircle } from 'lucide-react';
import { cities } from '@/data/cities';
import { useCitySelection } from '@/hooks/useCitySelection';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CityPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CityPicker({ open, onOpenChange }: CityPickerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentCity, setCity } = useCitySelection();
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCity = (city: typeof cities[0]) => {
    setCity(city);
    onOpenChange(false);
    setSearchQuery('');
    setLocationError(null);
  };

  const handleUseCurrentPosition = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    setIsGettingLocation(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        try {
          // Get device timezone using Intl API
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          
          // Validate timezone
          new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: 'numeric',
          }).format(new Date());

          // Create geolocation-derived city
          const geoCity = {
            name: 'Current Position',
            timezone,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            isGeolocation: true,
          };

          setCity(geoCity);
          setIsGettingLocation(false);
          onOpenChange(false);
          setSearchQuery('');
        } catch (error) {
          setLocationError('Unable to determine timezone for your location.');
          setIsGettingLocation(false);
        }
      },
      (error) => {
        setIsGettingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError('Location permission denied. Please enable location access and try again.');
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location information is unavailable. Please try again.');
            break;
          case error.TIMEOUT:
            setLocationError('Location request timed out. Please try again.');
            break;
          default:
            setLocationError('An error occurred while getting your location. Please try again.');
        }
      },
      {
        timeout: 10000,
        enableHighAccuracy: false,
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Your City</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={handleUseCurrentPosition}
            disabled={isGettingLocation}
          >
            {isGettingLocation ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Locate className="h-4 w-4" />
            )}
            <span className="flex-1 text-left">
              {isGettingLocation ? 'Getting your location...' : 'Use Current Position'}
            </span>
          </Button>

          {locationError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{locationError}</AlertDescription>
            </Alert>
          )}

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-2">
            {filteredCities.map((city) => {
              const isSelected = currentCity.name === city.name && currentCity.timezone === city.timezone && !currentCity.isGeolocation;
              return (
                <Button
                  key={city.name}
                  variant={isSelected ? 'secondary' : 'ghost'}
                  className="w-full justify-start gap-2"
                  onClick={() => handleSelectCity(city)}
                >
                  <MapPin className="h-4 w-4" />
                  <span className="flex-1 text-left">{city.name}</span>
                  {isSelected && <Check className="h-4 w-4 text-primary" />}
                </Button>
              );
            })}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No cities found matching "{searchQuery}"
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
