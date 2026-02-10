import { useParams, Link } from '@tanstack/react-router';
import { nakshatras } from '@/data/nakshatras';
import { getNakshatraBySlug } from '@/lib/nakshatra';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import NakshatraSections from '@/components/nakshatra/NakshatraSections';
import Glyph from '@/components/glyphs/Glyph';

export default function NakshatraDetailPage() {
  const { slug } = useParams({ from: '/nakshatra/$slug' });
  const nakshatra = getNakshatraBySlug(slug);

  if (!nakshatra) {
    return (
      <div className="text-center py-20 space-y-6 max-w-md mx-auto">
        <p className="text-foreground text-lg font-sans tracking-wide">Not found</p>
        <Link to="/knowledge">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return
          </Button>
        </Link>
      </div>
    );
  }

  const nakshatraNumber = nakshatras.findIndex((n) => n.name === nakshatra.name) + 1;

  return (
    <div className="space-y-16">
      <Link to="/knowledge">
        <Button variant="ghost" size="sm" className="gap-2 text-xs tracking-wide">
          <ArrowLeft className="h-4 w-4" />
          Return
        </Button>
      </Link>

      <div className="text-center space-y-8 py-8">
        <div className="flex justify-center mb-6">
          <Glyph type="circle" className="h-12 w-12 text-primary" />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-sans tracking-wider">{nakshatra.name}</h1>
          <Badge variant="outline" className="text-sm font-sans tracking-wide px-4 py-1">
            {nakshatraNumber} of 27
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide">
          {nakshatra.elementalThemes}
        </p>
      </div>

      <NakshatraSections nakshatra={nakshatra} />
    </div>
  );
}
