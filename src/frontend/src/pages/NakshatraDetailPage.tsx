import { useParams, Link } from '@tanstack/react-router';
import { nakshatras } from '@/data/nakshatras';
import { getNakshatraBySlug } from '@/lib/nakshatra';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import NakshatraSections from '@/components/nakshatra/NakshatraSections';

export default function NakshatraDetailPage() {
  const { slug } = useParams({ from: '/nakshatra/$slug' });
  const nakshatra = getNakshatraBySlug(slug);

  if (!nakshatra) {
    return (
      <div className="text-center py-12 space-y-4">
        <p className="text-destructive text-lg font-medium">Nakshatra not found</p>
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
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-4xl">{nakshatra.name}</h1>
          <Badge variant="outline" className="text-sm">
            #{nakshatraNumber} of 27
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">{nakshatra.elementalThemes}</p>
      </div>

      <NakshatraSections nakshatra={nakshatra} />
    </div>
  );
}
