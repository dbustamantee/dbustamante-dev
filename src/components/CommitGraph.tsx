"use client";

import { useEffect, useState } from "react";

// Simulated weekly commit data inspired by real contribution patterns (3 years, ~156 weeks)
const WEEKS = 52;
const DAYS = 7;

function generateCommitData(): number[][] {
  const data: number[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    for (let d = 0; d < DAYS; d++) {
      // Higher activity on weekdays, occasional weekends
      const isWeekday = d < 5;
      const base = isWeekday ? 0.6 : 0.2;
      const rand = Math.random();
      if (rand > base) week.push(0);
      else if (rand > base * 0.4) week.push(1);
      else if (rand > base * 0.15) week.push(2);
      else week.push(3);
    }
    data.push(week);
  }
  return data;
}

const COLORS = [
  "bg-[#161b22]",
  "bg-green-900/60",
  "bg-green-600/80",
  "bg-green-400",
];

export function CommitGraph() {
  const [data, setData] = useState<number[][] | null>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setData(generateCommitData());
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!data) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-[#0d1117] p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">
          Setup Platform — 1,889 contributions
        </span>
        <div className="flex items-center gap-1 text-[10px] text-gray-500">
          <span>Less</span>
          {COLORS.map((c, i) => (
            <span key={i} className={`inline-block h-[10px] w-[10px] rounded-sm ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-[2px]">
          {data.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[2px]">
              {week.map((level, di) => (
                <span
                  key={di}
                  className={`block h-[9px] w-[9px] rounded-sm transition-all duration-500 ${COLORS[level]} ${animated ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                  style={{ transitionDelay: `${(wi * 7 + di) * 2}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
