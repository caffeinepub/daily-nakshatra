import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Nakshatra } from '@/data/nakshatras';

interface NakshatraSectionsProps {
  nakshatra: Nakshatra;
}

export default function NakshatraSections({ nakshatra }: NakshatraSectionsProps) {
  return (
    <div className="space-y-6">
      {/* Symbolism & Mythology */}
      <Card>
        <CardHeader>
          <CardTitle>Symbolism & Mythology</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Primary Symbols</h4>
            <div className="flex flex-wrap gap-2">
              {nakshatra.symbols.map((symbol) => (
                <Badge key={symbol} variant="secondary">
                  {symbol}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">Ruling Deity</h4>
            <p className="text-muted-foreground">{nakshatra.deity}</p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">Planetary Ruler</h4>
            <p className="text-muted-foreground">{nakshatra.planetaryRuler}</p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">Elemental & Psychological Themes</h4>
            <p className="text-muted-foreground leading-relaxed">{nakshatra.elementalThemes}</p>
          </div>
        </CardContent>
      </Card>

      {/* Core Traits & Psychological Themes */}
      <Card>
        <CardHeader>
          <CardTitle>Core Traits & Psychological Themes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Strengths & Gifts</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {nakshatra.coreTraits.strengths.map((strength, i) => (
                <li key={i}>{strength}</li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2 text-amber-600 dark:text-amber-400">Shadow Expressions</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {nakshatra.coreTraits.shadows.map((shadow, i) => (
                <li key={i}>{shadow}</li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">Relational Tendencies</h4>
            <p className="text-muted-foreground leading-relaxed">{nakshatra.coreTraits.relational}</p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">Work & Life Themes</h4>
            <p className="text-muted-foreground leading-relaxed">{nakshatra.coreTraits.workLife}</p>
          </div>
        </CardContent>
      </Card>

      {/* Pada Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Pada Breakdown (Micro-Energetics)</CardTitle>
          <p className="text-sm text-muted-foreground">
            Each Nakshatra is divided into four Padas, each with its own planetary flavor
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {nakshatra.padas.map((pada, index) => (
              <AccordionItem key={index} value={`pada-${index + 1}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">Pada {index + 1}</Badge>
                    <span className="text-sm text-muted-foreground">{pada.navamsaSign}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <div>
                      <h5 className="font-medium mb-1">Navamsa Sign</h5>
                      <p className="text-sm text-muted-foreground">{pada.navamsaSign}</p>
                    </div>
                    <Separator />
                    <div>
                      <h5 className="font-medium mb-1">Expression</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pada.expression}</p>
                    </div>
                    <Separator />
                    <div>
                      <h5 className="font-medium mb-1">Motivation & Drive</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pada.motivation}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
