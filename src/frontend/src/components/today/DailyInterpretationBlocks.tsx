import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { nakshatraDailyContent } from '@/data/nakshatraDailyContent';
import { Sparkles, Sun } from 'lucide-react';

interface DailyInterpretationBlocksProps {
  nakshatraName: string;
}

export default function DailyInterpretationBlocks({ nakshatraName }: DailyInterpretationBlocksProps) {
  const content = nakshatraDailyContent[nakshatraName];

  if (!content) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* What Today Feels Like */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            What Today Feels Like
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Emotional Climate</h4>
            <p className="text-muted-foreground leading-relaxed">{content.whatTodayFeelsLike.emotionalClimate}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Mental Focus & Motivation</h4>
            <p className="text-muted-foreground leading-relaxed">{content.whatTodayFeelsLike.mentalFocus}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Social & Relational Tone</h4>
            <p className="text-muted-foreground leading-relaxed">{content.whatTodayFeelsLike.socialTone}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Productivity vs Rest</h4>
            <p className="text-muted-foreground leading-relaxed">{content.whatTodayFeelsLike.productivityRest}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Common Themes</h4>
            <p className="text-muted-foreground leading-relaxed">{content.whatTodayFeelsLike.commonThemes}</p>
          </div>
        </CardContent>
      </Card>

      {/* A Day in the Life */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-primary" />
            A Day in the Life
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed italic">{content.aDayInTheLife}</p>
        </CardContent>
      </Card>
    </div>
  );
}
