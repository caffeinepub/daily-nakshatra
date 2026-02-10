import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Nakshatra } from '@/data/nakshatras';

interface NakshatraSectionsProps {
  nakshatra: Nakshatra;
}

export default function NakshatraSections({ nakshatra }: NakshatraSectionsProps) {
  return (
    <div className="space-y-12">
      {/* Symbolism - Layer 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl tracking-wide text-center">Symbolism</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground text-center">Symbols</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {nakshatra.symbols.map((symbol) => (
                <Badge key={symbol} variant="secondary" className="font-sans tracking-wide">
                  {symbol}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3 text-center">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Deity</h4>
            <p className="text-muted-foreground tracking-wide">{nakshatra.deity}</p>
          </div>

          <Separator />

          <div className="space-y-3 text-center">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Planetary Ruler</h4>
            <p className="text-muted-foreground tracking-wide">{nakshatra.planetaryRuler}</p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground text-center">Themes</h4>
            <p className="text-muted-foreground leading-relaxed tracking-wide text-center prose max-w-none mx-auto">
              {nakshatra.elementalThemes}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Core Traits - Layer 2 */}
      <Accordion type="single" collapsible defaultValue="traits">
        <AccordionItem value="traits">
          <Card>
            <AccordionTrigger className="px-6 hover:no-underline">
              <CardTitle className="font-serif text-2xl tracking-wide">Core Traits</CardTitle>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-8 pt-6">
                <div className="space-y-4">
                  <h4 className="font-sans text-sm tracking-wider uppercase text-primary text-center">Strengths</h4>
                  <ul className="list-none space-y-2 text-muted-foreground text-center">
                    {nakshatra.coreTraits.strengths.map((strength, i) => (
                      <li key={i} className="text-sm tracking-wide leading-relaxed">{strength}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground text-center">Shadows</h4>
                  <ul className="list-none space-y-2 text-muted-foreground text-center">
                    {nakshatra.coreTraits.shadows.map((shadow, i) => (
                      <li key={i} className="text-sm tracking-wide leading-relaxed">{shadow}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground text-center">Relational</h4>
                  <p className="text-muted-foreground leading-relaxed tracking-wide text-center text-sm prose max-w-none mx-auto">
                    {nakshatra.coreTraits.relational}
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground text-center">Work & Life</h4>
                  <p className="text-muted-foreground leading-relaxed tracking-wide text-center text-sm prose max-w-none mx-auto">
                    {nakshatra.coreTraits.workLife}
                  </p>
                </div>
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>

      {/* Pada Breakdown - Layer 3 */}
      <Accordion type="single" collapsible>
        <AccordionItem value="padas">
          <Card>
            <AccordionTrigger className="px-6 hover:no-underline">
              <div className="space-y-2">
                <CardTitle className="font-serif text-2xl tracking-wide">Pada Breakdown</CardTitle>
                <p className="text-sm text-muted-foreground text-left tracking-wide leading-relaxed">
                  Four quarters, each with its own planetary flavor
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {nakshatra.padas.map((pada, index) => (
                    <AccordionItem key={index} value={`pada-${index + 1}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="font-sans tracking-wide">Pada {index + 1}</Badge>
                          <span className="text-sm text-muted-foreground tracking-wide">{pada.navamsaSign}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <h5 className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Navamsa</h5>
                            <p className="text-sm text-muted-foreground tracking-wide">{pada.navamsaSign}</p>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h5 className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Expression</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed tracking-wide prose max-w-none">
                              {pada.expression}
                            </p>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h5 className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Motivation</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed tracking-wide prose max-w-none">
                              {pada.motivation}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

