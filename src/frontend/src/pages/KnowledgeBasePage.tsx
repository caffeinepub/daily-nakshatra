import { useState } from 'react';
import { nakshatras } from '@/data/nakshatras';
import { Input } from '@/components/ui/input';
import NakshatraListItem from '@/components/nakshatra/NakshatraListItem';
import { Search } from 'lucide-react';

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNakshatras = nakshatras.filter((nakshatra) =>
    nakshatra.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-sans tracking-wider">Knowledge Base</h1>
        <p className="text-muted-foreground text-sm tracking-wide leading-relaxed max-w-2xl mx-auto">
          The 27 lunar mansions
        </p>
      </div>

      <div className="max-w-md mx-auto relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search mansions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 text-sm tracking-wide"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {filteredNakshatras.map((nakshatra, index) => (
          <NakshatraListItem key={nakshatra.name} nakshatra={nakshatra} number={index + 1} />
        ))}
      </div>

      {filteredNakshatras.length === 0 && (
        <p className="text-center text-muted-foreground text-sm tracking-wide">
          No mansions found
        </p>
      )}
    </div>
  );
}
