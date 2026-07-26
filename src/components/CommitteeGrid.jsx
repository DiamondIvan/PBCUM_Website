import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';

function Avatar({ initials, color }) {
  return (
    <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${color} text-xl font-semibold text-white shadow-[0_20px_50px_rgba(17,24,39,0.16)]`}>
      {initials}
    </div>
  );
}

export function CommitteeGrid({ members }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {members.map((member, index) => (
        <motion.article
          key={member.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.06 }}
          className="group rounded-[30px] border border-black/6 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between gap-4">
            <Avatar initials={member.image} color={member.color} />
            <div className="rounded-full border border-black/6 bg-[#fafafa] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-black/42">
              {member.role}
            </div>
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-ink">{member.name}</h3>
          <p className="mt-2 text-sm leading-7 text-black/58">Leading with clarity, taste, and a strong sense of community identity.</p>
          <div className="mt-6 flex items-center gap-3 text-black/38">
            <a href="#" aria-label={`${member.name} on Instagram`} className="rounded-full border border-black/6 p-2 transition hover:border-umred hover:text-umred"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label={`${member.name} on LinkedIn`} className="rounded-full border border-black/6 p-2 transition hover:border-umred hover:text-umred"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label={`Email ${member.name}`} className="rounded-full border border-black/6 p-2 transition hover:border-umred hover:text-umred"><Mail className="h-4 w-4" /></a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
