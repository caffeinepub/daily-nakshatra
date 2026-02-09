import { useState } from 'react';
import { nakshatras } from '@/data/nakshatras';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import NakshatraListItem from '@/components/nakshatra/NakshatraListItem';

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNakshatras = nakshatras.filter((nakshatra) =>
    nakshatra.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl">Knowledge Base</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore all 27 Nakshatras, their symbolism, traits, and the four Padas within each lunar mansion
        </p>
      </div>

      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search Nakshatras..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredNakshatras.map((nakshatra, index) => (
          <NakshatraListItem key={nakshatra.name} nakshatra={nakshatra} number={index + 1} />
        ))}
      </div>

      {filteredNakshatras.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No Nakshatras found matching "{searchQuery}"
        </p>
      )}
    </div>
  );
}
