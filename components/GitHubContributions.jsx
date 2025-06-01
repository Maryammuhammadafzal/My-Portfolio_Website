'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';

export default function GitHubContributions() {
  useEffect(() => {
    import('github-calendar').then(({ default: GitHubCalendar }) => {
      GitHubCalendar('.calendar', 'maryammuhammadafzal', {
        responsive: true,
      });
    });
  }, []);

  return (
    <Card className="max-w-xl mx-auto p-6 rounded-2xl shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300">
      <CardContent className="p-0">
        <h2 className="text-lg font-semibold mb-4">GitHub Contributions</h2>
        <div className="calendar text-sm" />
      </CardContent>
    </Card>
  );
}