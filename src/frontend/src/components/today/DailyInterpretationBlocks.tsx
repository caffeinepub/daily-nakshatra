import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { nakshatraDailyContent } from '@/data/nakshatraDailyContent';
import Glyph from '@/components/glyphs/Glyph';

interface DailyInterpretationBlocksProps {
  nakshatraName: string;
}

export default function DailyInterpretationBlocks({ nakshatraName }: DailyInterpretationBlocksProps) {
  const content = nakshatraDailyContent[nakshatraName];

  if (!content) {
    return null;
  }

  return (
    <div className="space-y-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-3 font-serif text-2xl tracking-wide">
            <Glyph type="awareness" className="h-6 w-6 text-primary" />
            What This Feels Like
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Emotional Climate</h4>
            <p className="text-muted-foreground leading-relaxed text-sm tracking-wide prose max-w-none">
              {content.whatTodayFeelsLike.emotionalClimate}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Mental Focus</h4>
            <p className="text-muted-foreground leading-relaxed text-sm tracking-wide prose max-w-none">
              {content.whatTodayFeelsLike.mentalFocus}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Social Tone</h4>
            <p className="text-muted-foreground leading-relaxed text-sm tracking-wide prose max-w-none">
              {content.whatTodayFeelsLike.socialTone}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Rhythm</h4>
            <p className="text-muted-foreground leading-relaxed text-sm tracking-wide prose max-w-none">
              {content.whatTodayFeelsLike.productivityRest}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-sans text-sm tracking-wider uppercase text-muted-foreground">Common Themes</h4>
            <p className="text-muted-foreground leading-relaxed text-sm tracking-wide prose max-w-none">
              {content.whatTodayFeelsLike.commonThemes}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-3 font-serif text-2xl tracking-wide">
            <Glyph type="circle" className="h-6 w-6 text-primary" />
            A Day in the Life
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed italic text-sm tracking-wide prose max-w-none">
            {content.aDayInTheLife}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

