import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';

function Avatar({ initials, color }) {
  return (
    <div
      className={`flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-gradient-to-br ${color} text-2xl font-semibold text-white shadow-[0_20px_50px_rgba(17,24,39,0.18)]`}
    >
      {initials}
    </div>
  );
}

export function CommitteeGrid({ members }) {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {members.map((member, index) => (
        <motion.article
          key={member.name}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, delay: index * 0.07 }}
          className="group rounded-[32px] border border-black/6 bg-white p-7 shadow-soft transition duration-350 hover:-translate-y-1.5 hover:shadow-card-hover"
        >
          <div className="flex items-start justify-between gap-4">
            <Avatar initials={member.image} color={member.color} />
            <div className="mt-1 rounded-full border border-black/6 bg-[#fafafa] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-black/40">
              {member.role}
            </div>
          </div>
          <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-ink">{member.name}</h3>
          <p className="mt-2.5 text-sm leading-[1.8] text-black/55">
            以清晰的思路、审美的眼光与真挚的社群关怀，引领学会向前。
          </p>
          <div className="mt-7 flex items-center gap-2.5 text-black/35">
            <a
              href="#"
              aria-label={`${member.name} 的 Instagram`}
              className="rounded-full border border-black/6 p-2.5 transition duration-200 hover:border-umred hover:text-umred"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label={`${member.name} 的 LinkedIn`}
              className="rounded-full border border-black/6 p-2.5 transition duration-200 hover:border-umred hover:text-umred"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label={`发邮件给 ${member.name}`}
              className="rounded-full border border-black/6 p-2.5 transition duration-200 hover:border-umred hover:text-umred"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
