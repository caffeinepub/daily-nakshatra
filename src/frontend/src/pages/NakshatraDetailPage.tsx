import { useParams, Link } from '@tanstack/react-router';
import { nakshatras } from '@/data/nakshatras';
import { getNakshatraBySlug } from '@/lib/nakshatra';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Moon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import NakshatraSections from '@/components/nakshatra/NakshatraSections';

export default function NakshatraDetailPage() {
  const { slug } = useParams({ from: '/nakshatra/$slug' });
  const nakshatra = getNakshatraBySlug(slug);

  if (!nakshatra) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Nakshatra not found</p>
        <Link to="/knowledge">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Knowledge Base
          </Button>
        </Link>
      </div>
    );
  }

  const nakshatraNumber = nakshatras.findIndex((n) => n.name === nakshatra.name) + 1;

  return (
    <div className="space-y-6">
      <Link to="/knowledge">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Knowledge Base
        </Button>
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Moon className="h-8 w-8 text-primary" />
          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-4xl font-bold">{nakshatra.name}</h1>
              <Badge variant="outline">#{nakshatraNumber} of 27</Badge>
            </div>
            <p className="text-muted-foreground mt-1">
              Ruled by {nakshatra.planetaryRuler} • {nakshatra.deity}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {nakshatra.symbols.map((symbol) => (
            <Badge key={symbol} variant="secondary">
              {symbol}
            </Badge>
          ))}
        </div>
      </div>

      <NakshatraSections nakshatra={nakshatra} />
    </div>
  );
}
