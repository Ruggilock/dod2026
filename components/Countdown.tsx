"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-08-25T00:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#00ff88] py-16">
      <div className="absolute left-0 top-0 w-full animate-marquee whitespace-nowrap border-b border-black/20 py-2 font-mono text-xs uppercase tracking-widest text-black">
        <span className="inline-block px-4">BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • </span>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="font-mono text-7xl font-bold leading-none text-black md:text-8xl">
              {timeLeft.days}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-black/70">
              DAYS
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-7xl font-bold leading-none text-black md:text-8xl">
              {timeLeft.hours}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-black/70">
              HOURS
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-7xl font-bold leading-none text-black md:text-8xl">
              {timeLeft.minutes}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-black/70">
              MINUTES
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-7xl font-bold leading-none text-black md:text-8xl">
              {timeLeft.seconds}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-black/70">
              SECONDS
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full animate-marquee-reverse whitespace-nowrap border-t border-black/20 py-2 font-mono text-xs uppercase tracking-widest text-black">
        <span className="inline-block px-4">BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • BREAKPOINT 2025 • SEE YOU SOON • </span>
      </div>
    </div>
  );
}
