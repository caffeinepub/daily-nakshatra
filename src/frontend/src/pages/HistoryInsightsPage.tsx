import { useState } from 'react';
import RequireAuth from '@/components/auth/RequireAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useGetAllLogs } from '@/hooks/useUserLogs';
import { generateInsights } from '@/lib/insights/nakshatraInsights';
import { extractDreamThemes } from '@/lib/insights/dreamThemeExtraction';
import Glyph from '@/components/glyphs/Glyph';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function HistoryInsightsPage() {
  return (
    <RequireAuth message="Sign in to view your patterns.">
      <HistoryInsightsContent />
    </RequireAuth>
  );
}

function HistoryInsightsContent() {
  const { data: logs, isLoading } = useGetAllLogs();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-16 w-64 mx-auto" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  const checkIns = logs?.checkIns || [];
  const sleepLogs = logs?.sleepLogs || [];
  const dreamLogs = logs?.dreamLogs || [];

  const insights = generateInsights(checkIns, sleepLogs, dreamLogs);
  const dreamThemesRecord = extractDreamThemes(dreamLogs);
  const dreamThemeEntries = Object.entries(dreamThemesRecord);

  const hasData = checkIns.length > 0 || sleepLogs.length > 0 || dreamLogs.length > 0;

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-sans tracking-wider">Patterns</h1>
        <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
          Your recorded experiences across the mansions
        </p>
      </div>

      {!hasData && (
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="font-sans text-2xl tracking-wide text-center">No entries yet</CardTitle>
            <CardDescription className="text-center text-sm tracking-wide">
              Begin logging to reveal patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/">
              <Button variant="ghost" size="sm">Return to Today</Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {hasData && (
        <Tabs defaultValue="insights" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="insights" className="text-xs tracking-wide">Insights</TabsTrigger>
            <TabsTrigger value="history" className="text-xs tracking-wide">History</TabsTrigger>
            <TabsTrigger value="dreams" className="text-xs tracking-wide">Dreams</TabsTrigger>
          </TabsList>

          <TabsContent value="insights" className="space-y-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
                  <Glyph type="awareness" className="h-6 w-6 text-primary" />
                  Observations
                </CardTitle>
                <CardDescription className="text-center text-sm tracking-wide">
                  Gentle patterns from your logs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {insights.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    More entries needed to reveal patterns
                  </p>
                ) : (
                  insights.map((insight, index) => (
                    <div key={index} className="p-6 bg-muted/30 space-y-2">
                      <p className="text-sm leading-relaxed tracking-wide">{insight}</p>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
                  Recent Entries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {checkIns.length === 0 && sleepLogs.length === 0 && dreamLogs.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center">No entries</p>
                ) : (
                  <>
                    {checkIns.slice(0, 10).map((entry, index) => (
                      <div key={index}>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center gap-3">
                            <Badge variant="outline" className="font-sans tracking-wide">{entry.nakshatra}</Badge>
                            <span className="text-xs text-muted-foreground tracking-wide">
                              Day {entry.dayOfYear.toString()}
                            </span>
                          </div>
                          {entry.mood && (
                            <p className="text-sm text-center tracking-wide">
                              {entry.mood}
                            </p>
                          )}
                          <div className="flex justify-center gap-6 text-xs text-muted-foreground tracking-wide">
                            {entry.energy !== undefined && <span>Energy: {entry.energy.toString()}</span>}
                            {entry.restlessness !== undefined && (
                              <span>Restlessness: {entry.restlessness.toString()}</span>
                            )}
                          </div>
                        </div>
                        {index < checkIns.length - 1 && <Separator className="mt-8" />}
                      </div>
                    ))}

                    {sleepLogs.slice(0, 5).map((entry, index) => (
                      <div key={`sleep-${index}`}>
                        <div className="space-y-3">
                          <div className="flex items-center justify-center gap-3">
                            <Glyph type="sleep" className="h-4 w-4 text-primary" />
                            <Badge variant="outline" className="font-sans tracking-wide">{entry.nakshatra}</Badge>
                            <span className="text-xs text-muted-foreground tracking-wide">
                              Day {entry.dayOfYear.toString()}
                            </span>
                          </div>
                          {entry.sleepNotes && (
                            <p className="text-sm text-center tracking-wide leading-relaxed">
                              {entry.sleepNotes}
                            </p>
                          )}
                        </div>
                        {index < sleepLogs.length - 1 && <Separator className="mt-8" />}
                      </div>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dreams" className="space-y-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
                  <Glyph type="sleep" className="h-6 w-6 text-primary" />
                  Dream Themes
                </CardTitle>
                <CardDescription className="text-center text-sm tracking-wide">
                  Recurring symbols and patterns by Nakshatra
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {dreamThemeEntries.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    No dream themes detected yet
                  </p>
                ) : (
                  <div className="space-y-6">
                    {dreamThemeEntries.map(([nakshatra, theme]) => (
                      <div key={nakshatra} className="space-y-3">
                        <div className="flex items-center justify-center gap-3">
                          <Badge variant="outline" className="font-sans tracking-wide">{nakshatra}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {theme.count} {theme.count === 1 ? 'dream' : 'dreams'}
                          </span>
                        </div>
                        {theme.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-2 justify-center">
                            {theme.keywords.map((keyword, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs tracking-wide px-3 py-1">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 font-sans text-2xl tracking-wide">
                  Dream Log
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {dreamLogs.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center">No dream entries</p>
                ) : (
                  dreamLogs.slice(0, 10).map((entry, index) => (
                    <div key={index}>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-3">
                          <Badge variant="outline" className="font-sans tracking-wide">{entry.nakshatra}</Badge>
                          <span className="text-xs text-muted-foreground tracking-wide">
                            Day {entry.dayOfYear.toString()}
                          </span>
                        </div>
                        {entry.dreamNotes && (
                          <p className="text-sm text-center tracking-wide leading-relaxed">
                            {entry.dreamNotes}
                          </p>
                        )}
                      </div>
                      {index < dreamLogs.length - 1 && <Separator className="mt-8" />}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
