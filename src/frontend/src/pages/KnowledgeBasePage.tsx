import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { nakshatras } from '@/data/nakshatras';
import NakshatraListItem from '@/components/nakshatra/NakshatraListItem';

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNakshatras = nakshatras.filter((nakshatra) =>
    nakshatra.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Nakshatra Knowledge Base</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore all 27 lunar mansions, their symbolism, traits, and the four Padas within each
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNakshatras.map((nakshatra, index) => (
          <NakshatraListItem key={nakshatra.name} nakshatra={nakshatra} number={index + 1} />
        ))}
      </div>

      {filteredNakshatras.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No Nakshatras found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}
