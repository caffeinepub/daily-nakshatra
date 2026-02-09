import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getNakshatraSlug } from '@/lib/nakshatra';
import type { Nakshatra } from '@/data/nakshatras';

interface NakshatraListItemProps {
  nakshatra: Nakshatra;
  number: number;
}

export default function NakshatraListItem({ nakshatra, number }: NakshatraListItemProps) {
  return (
    <Link to="/nakshatra/$slug" params={{ slug: getNakshatraSlug(nakshatra.name) }}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl">{nakshatra.name}</CardTitle>
            <Badge variant="outline" className="text-xs">
              #{number}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{nakshatra.deity}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {nakshatra.symbols.slice(0, 2).map((symbol) => (
                <Badge key={symbol} variant="secondary" className="text-xs">
                  {symbol}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Ruler: {nakshatra.planetaryRuler}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
