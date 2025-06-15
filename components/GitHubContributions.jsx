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
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function GitHubContributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/maryammuhammadafzal")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Full API response:", data); // debugging
        setContributions(data.contributions);
      })
      .catch((error) => {
        console.error("❌ Error fetching contributions:", error);
      });
  }, []);

  let StartDate;
  if (contributions[0]) {
    StartDate = new Intl.DateTimeFormat("en", {
      month: "short",
      year: "numeric",
    }).format(new Date(contributions[0].date));
    console.log(contributions[0].date);
  }

  let lastDate;
  if (contributions[contributions.length - 1]) {
    let last = contributions[contributions.length - 1].date;
    if (contributions[0]) {
      lastDate = new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
      }).format(new Date(last));
    }
  }

  return (
    <div className="2xl:max-w-2xl max-w-lg h-full bg-white flex flex-col overflow-hidden justify-center items-center">
      <div className="w-full px-5 flex justify-between items-start">
        <p className="text-base text-gray-500">
          {contributions.length} Contributions
        </p>
        <a href="https://github.com/Maryammuhammadafzal">
          <Github size={30} />
        </a>
      </div>
      <div className="overflow-x-auto p-4 bg-background shadow-sm w-full max-w-full">
        <div className="flex gap-[4px]">
          {contributions.length > 0 &&
            Array.from({ length: contributions.length }, (_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[4px]">
                {contributions
                  .filter((_, index) => Math.floor(index / 7) === weekIndex)
                  .map((day, dayIndex) => (
                    <>
                      {/* {console.log(day)} */}
                      <div
                        key={dayIndex}
                        className={`w-5 h-5 rounded-sm transition-all duration-300 hover:scale-110 border border-gray-200 ${
                          day.count === 0
                            ? "bg-white"
                            : day.count < 2
                            ? "bg-lime-200"
                            : day.count < 3
                            ? "bg-lime-300"
                            : "bg-lime-400"
                        }`}
                        title={`${day.count} contributions ${day.date}`}
                        // style={{ backgroundColor: day.count=== 1 ? "green" : "gray" }}
                      />
                    </>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full px-5 flex justify-between items-end pt-3">
        <p className="text-base text-gray-500">{lastDate}</p>
        <p className="text-base text-gray-500">
          {contributions[0] && StartDate}
        </p>
      </div>
    </div>
  );
}
