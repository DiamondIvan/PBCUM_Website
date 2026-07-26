import { motion } from 'framer-motion';
import { CalendarDays, MoveRight } from 'lucide-react';
import { MotionCard } from './ui/MotionCard';

export function ActivityShowcase({ events }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {events.map((event, index) => (
        <MotionCard key={event.title} className="group overflow-hidden rounded-[32px] border border-black/6 bg-white shadow-soft">
          <div className={`h-56 bg-gradient-to-br ${event.accent} p-6 text-white`}>
            <div className="flex items-center justify-between text-sm text-white/78">
              <span>{event.category}</span>
              <CalendarDays className="h-4 w-4" />
            </div>
            <div className="mt-10 flex h-full flex-col justify-end">
              <p className="text-xs uppercase tracking-[0.3em] text-white/68">0{index + 1}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{event.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/40">{event.date}</p>
              <MoveRight className="h-5 w-5 text-black/30 transition duration-300 group-hover:translate-x-1 group-hover:text-umred" />
            </div>
            <p className="mt-4 text-sm leading-7 text-black/62">{event.summary}</p>
          </div>
        </MotionCard>
      ))}
    </div>
  );
}
