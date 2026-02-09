import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, MapPin } from 'lucide-react';
import { cities } from '@/data/cities';
import { useCitySelection } from '@/hooks/useCitySelection';

interface CityPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CityPicker({ open, onOpenChange }: CityPickerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { setCity } = useCitySelection();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCity = (city: typeof cities[0]) => {
    setCity(city);
    onOpenChange(false);
    setSearchQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Your City</DialogTitle>
        </DialogHeader>

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

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-2">
            {filteredCities.map((city) => (
              <Button
                key={city.name}
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => handleSelectCity(city)}
              >
                <MapPin className="h-4 w-4" />
                <span>{city.name}</span>
              </Button>
            ))}
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
