import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function copyToClipboard(text) {
  if (!text) return;

  navigator.clipboard?.writeText(text);
}

function Avatar({ image, initials, color }) {
  const imageSrc = image ? `/committee_photo/${image}` : null;

  return (
    <div
      className={`flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${color} text-2xl font-semibold text-white shadow-[0_20px_50px_rgba(17,24,39,0.18)]`}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
}

function getAvatarState(member) {
  const isImageFile = typeof member.image === 'string' && /\.(png|jpe?g|webp|gif|svg)$/i.test(member.image);

  return {
    image: isImageFile ? member.image : null,
    initials: member.initials || (!isImageFile ? member.image : '') || (member.name ? member.name.charAt(0) : ''),
  };
}

export function CommitteeGrid({ members }) {
  const [activeEmail, setActiveEmail] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);
  const activeCardRef = useRef(null);

  useEffect(() => {
    if (!activeEmail) return;

    const handleClickOutside = (event) => {
      if (activeCardRef.current && !activeCardRef.current.contains(event.target)) {
        setActiveEmail(null);
        activeCardRef.current = null;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeEmail]);

  const handleCopy = (email) => {
    copyToClipboard(email);
    setCopiedEmail(email);
    window.setTimeout(() => setCopiedEmail(null), 1400);
  };

  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {members.map((member, index) => {
        const avatar = getAvatarState(member);

        return (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, delay: index * 0.07 }}
          className="group rounded-[32px] border border-black/6 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
        >
          <div className="flex items-start justify-between gap-4">
            <Avatar image={avatar.image} initials={avatar.initials} color={member.color} />
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
              href={member.instagram || '#'}
              target={member.instagram ? '_blank' : undefined}
              rel={member.instagram ? 'noreferrer' : undefined}
              aria-label={`${member.name} 的 Instagram`}
              className="rounded-full border border-black/6 p-2.5 transition duration-300 hover:border-umred hover:text-umred"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <div className="relative flex items-center justify-center">
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  if (member.email) {
                    const cardElement = event.currentTarget.closest('article');
                    activeCardRef.current = cardElement;
                    setActiveEmail(activeEmail === member.email ? null : member.email);
                  }
                }}
                aria-label={`发邮件给 ${member.name}`}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/6 p-0 transition duration-300 hover:border-umred hover:text-umred"
              >
                <Mail className="h-3.5 w-3.5" />
              </button>

              {member.email && activeEmail === member.email && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute left-1/2 top-full z-20 mt-3 w-[220px] -translate-x-1/2 rounded-2xl border border-black/8 bg-white p-3 text-left shadow-[0_16px_40px_rgba(17,24,39,0.12)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    Contact
                  </p>
                  <div className="mt-2 rounded-xl border border-black/6 bg-[#fafafa] px-3 py-2">
                    <p className="select-text break-all text-sm font-medium text-ink">
                      {member.email}
                    </p>
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-black/55">
                    Highlight the address and copy it manually, or use the button below.
                  </p>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleCopy(member.email);
                    }}
                    className="mt-3 inline-flex items-center rounded-full bg-[#111827] px-3.5 py-2 text-[11px] font-semibold text-white transition hover:bg-[#1f2937]"
                  >
                    {copiedEmail === member.email ? 'Copied!' : 'Copy email'}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.article>
        );
      })}
    </div>
  );
}
