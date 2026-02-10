import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { nakshatraDailyContent } from '@/data/nakshatraDailyContent';
import Glyph from '@/components/glyphs/Glyph';

interface DailyGuidanceModulesProps {
  nakshatraName: string;
}

export default function DailyGuidanceModules({ nakshatraName }: DailyGuidanceModulesProps) {
  const content = nakshatraDailyContent[nakshatraName];

  if (!content) {
    return null;
  }

  const modules = [
    {
      id: 'embodied',
      title: 'Embodied Awareness',
      icon: 'awareness' as const,
      content: content.embodiedAwareness,
    },
    {
      id: 'sleep',
      title: 'Sleep & Dream Themes',
      icon: 'sleep' as const,
      content: content.sleepDreamThemes,
    },
    {
      id: 'social',
      title: 'Social Climate',
      icon: 'social' as const,
      content: content.socialClimate,
    },
    {
      id: 'creative',
      title: 'Creative Flow',
      icon: 'creative' as const,
      content: content.creativeWorkFlow,
    },
    {
      id: 'ritual',
      title: 'Grounding Practices',
      icon: 'ritual' as const,
      content: content.ritualSuggestions,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-2xl tracking-wide text-center">Guidance</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {modules.map((module) => {
            if (!module.content) return null;

            return (
              <AccordionItem key={module.id} value={module.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Glyph type={module.icon} className="h-5 w-5 text-primary" />
                    <span className="font-sans text-sm tracking-wide">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground leading-relaxed pt-4 text-sm tracking-wide prose max-w-none">
                    {module.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}

