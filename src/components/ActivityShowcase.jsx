import { motion } from 'framer-motion';
import { CalendarDays, MoveRight } from 'lucide-react';
import { MotionCard } from './ui/MotionCard';

export function ActivityShowcase({ events }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {events.map((event, index) => (
        <MotionCard
          key={event.title}
          className="group overflow-hidden rounded-[34px] border border-black/6 bg-white shadow-soft transition duration-350 hover:-translate-y-1.5 hover:shadow-card-hover"
        >
          <div className={`h-60 bg-gradient-to-br ${event.accent} p-7 text-white`}>
            <div className="flex items-center justify-between text-sm text-white/75">
              <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                {event.category}
              </span>
              <CalendarDays className="h-4 w-4 opacity-75" />
            </div>
            <div className="mt-12 flex h-full flex-col justify-end">
              <p className="font-latin text-[11px] uppercase tracking-widest3 text-white/60">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {event.title}
              </h3>
            </div>
          </div>
          <div className="p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="font-latin text-xs font-semibold uppercase tracking-widest2 text-black/38">
                {event.date}
              </p>
              <MoveRight className="h-5 w-5 text-black/28 transition duration-300 group-hover:translate-x-1.5 group-hover:text-umred" />
            </div>
            <p className="mt-4 text-sm leading-[1.85] text-black/58">{event.summary}</p>
          </div>
        </MotionCard>
      ))}
    </div>
  );
}
