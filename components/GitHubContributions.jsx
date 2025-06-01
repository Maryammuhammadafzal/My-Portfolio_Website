// 'use client';

// import { Card, CardContent } from '@/components/ui/card';
// import { useEffect } from 'react';

// export default function GitHubContributions() {
//   useEffect(() => {
//     import('react-github-calendar').then(({ default: GitHubCalendar }) => {
//       GitHubCalendar('.calendar', 'maryammuhammadafzal', {
//         responsive: true,
//       });
//     });
//   }, []);

//   return (
//     <Card className="max-w-xl mx-auto p-6 rounded-2xl shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300">
//       <CardContent className="p-0">
//         <h2 className="text-lg font-semibold mb-4">GitHub Contributions</h2>
//         <div className="calendar text-sm" />
//       </CardContent>
//     </Card>
//   );
// }

// "use client";
// import { useEffect, useRef } from "react";

// export default function GitHubContributions() {
//   const calendarRef = useRef();

//   useEffect(() => {
//     // Wait until GitHubCalendar is available
//     const interval = setInterval(() => {
//       if (window.GitHubCalendar) {
//         window.GitHubCalendar(calendarRef.current, "your-github-username", {
//           responsive: true,
//         });
//         clearInterval(interval);
//       }
//     }, 100);
//   }, []);

//   return (
//     <>
//       {/* Script to load GitHubCalendar from CDN */}
//       <script src="https://cdn.jsdelivr.net/npm/github-calendar@latest/dist/github-calendar.min.js"></script>
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-calendar@latest/dist/github-calendar-responsive.css" />

//       <div className="rounded-xl shadow-md p-4 bg-white dark:bg-zinc-900">
//         <h2 className="text-xl font-semibold mb-2 text-center">GitHub Contributions</h2>
//         <div ref={calendarRef} className="calendar"  />
//       </div>
//     </>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function GitHubContributions() {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/maryammuhammadafzal")
      .then((res) => res.json())
      .then((data) => {
        setWeeks(data.contributions.weeks);
      });
  }, []);

  return (
    <div className="overflow-x-auto p-4 rounded-xl bg-background border shadow-sm w-full max-w-full">
      <div className="flex gap-[4px]">
        {weeks && weeks.slice(-53).map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[4px]">
            {week.contributionDays.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="w-6 h-6 rounded-md transition-all duration-300 hover:scale-110"
                title={`${day.contributionCount} contributions`}
                style={{
                  backgroundColor: day.color,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

