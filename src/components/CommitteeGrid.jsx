import { ArrowUpRight, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../pages/departments';

/**
 * CommitteeGrid — the 执委会, in the two tiers it actually has.
 *
 *   phone (< md)   each tier is a strip showing two people, stepped with
 *                  arrows or a swipe — the pattern ptum.my uses for its
 *                  committee. Fifteen cards laid out in full ran to three
 *                  screens of scrolling before the page moved on.
 *   md and up      each tier is laid out whole; there is room to.
 *
 * Differences from that reference, each on purpose:
 *
 *   · No autoplay. The arrows are the control, and content that moves on its
 *     own with no way to stop it fails WCAG 2.2.2.
 *   · No loop. Looping means cloning the slides — the carousel this replaced
 *     rendered all fifteen cards twice. At each end the arrow simply goes.
 *   · 44px arrows, not 11x22 chevrons, and they straddle the strip's edge
 *     rather than sitting over the photos.
 *   · Swiping comes from native scroll-snap, not script, so momentum and
 *     rubber-banding feel like the phone's own.
 *
 * One constraint shapes the cards: a strip with overflow-x: auto clips
 * vertical overflow too (overflow-y computes to auto). That is what hid the
 * old carousel's email popup completely. Here it would slice the big
 * `shadow-soft` off flat along the bottom, so inside the strip cards take a
 * small shadow and the strip keeps a little padding; from md up they get the
 * full one.
 *
 * Data lives in siteData.js `committee`.
 */

const photo = (image) => (image ? `/committee_photo/${image}` : null);

/* A slide is the strip's width less its 10px gaps, shared out: two on a phone,
   three from sm. At two, a 640–767px screen (a phone on its side, a small
   foldable) got a pair of 320px cards with the photo filling under a third of
   each, then jumped straight to four per row at md. snap-start stops each step
   on a card edge.
   The three-up width is written flat, 33.333% − 6.667px, rather than as
   (100% − 20px) / 3: Tailwind's class scanner cannot read nested parentheses
   in an arbitrary value and silently generates nothing for it. */
const SLIDE = 'shrink-0 snap-start basis-[calc(50%-5px)] sm:basis-[calc(33.333%-6.667px)]';
const STRIP_SHADOW = 'shadow-[0_6px_18px_rgba(17,24,39,0.06)] md:shadow-soft';
const STRIP =
  'flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-4 pt-[var(--strip-pad)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ' +
  'md:snap-none md:overflow-visible md:p-0';

/* The three measurements the arrows are centred from, declared once on the
   strip and read by both the cards and the arrows — see StripArrow.
   The photo is 72px below 360px and 88px from there. At 96px on a 320px phone
   the arrows sat 11px into the edge photos; 88px also happens to be exactly a
   third of the 264px source, so the portraits stay sharp on 3x screens. */
const STRIP_VARS =
  '[--strip-pad:0.5rem] [--card-pad:1.25rem] [--photo:4.5rem] min-[360px]:[--photo:5.5rem]';

/** Round portrait. Sources are 264x330, about 3x the circle, so they stay sharp
 *  on high-density phones. alt is empty because the name is printed beside it —
 *  a screen reader would otherwise read every name twice. */
function Avatar({ member, className, tint }) {
  const src = photo(member.image);
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full ${className}`}
      style={{ backgroundColor: tint }}
    >
      {src ? (
        <img
          src={src}
          alt=""
          width="264"
          height="330"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-xl font-semibold text-black/58">{member.name.charAt(0)}</span>
      )}
    </div>
  );
}

/** `relative z-10` keeps it clickable above a card's stretched link. */
function InstagramLink({ member, className = '' }) {
  if (!member.instagram) return null;
  return (
    <a
      href={`https://www.instagram.com/${member.instagram}/`}
      target="_blank"
      rel="noreferrer"
      aria-label={`${member.name} 的 Instagram（@${member.instagram}）`}
      className={`relative z-10 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-black/8 bg-white text-black/58 transition duration-200 hover:border-umred/30 hover:text-umred ${className}`}
    >
      <Instagram className="h-4 w-4" />
    </a>
  );
}

function TierHeading({ id, title, note }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-black/8 pb-3">
      <h3 id={id} className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">
        {title}
      </h3>
      <p className="text-sm text-black/58">{note}</p>
    </div>
  );
}

/* ─── The phone strip ─────────────────────────────────────────────────────── */

/**
 * A pointer and touch control only. It is out of the tab order and hidden from
 * screen readers, for two reasons:
 *
 *   · It added nothing for a keyboard. Tabbing onto a card already scrolls the
 *     strip to show it, and the arrows came after every card in the DOM, so a
 *     keyboard user reached them only once they had passed everyone.
 *   · It could strand focus. Pressing "next" until the end hid and disabled the
 *     very button holding focus, leaving no focus indicator anywhere on screen.
 *
 * Screen reader users lose nothing: the list is read person by person, and the
 * strip scrolls to whichever card they move to. preventDefault on mousedown
 * stops a click giving the button focus in browsers that otherwise would.
 *
 * `top` is computed from the same three custom properties the cards are sized
 * with (STRIP_VARS), so it stays on the centre of the photographs when any of
 * them changes. It used to be a hard-coded 54px that silently drifted off the
 * photos if the card padding or portrait size was touched. Inline rather than a
 * Tailwind arbitrary value: this calc has custom-property names full of
 * hyphens, which the class-name form is prone to mangling.
 */
function StripArrow({ direction, hidden, onClick }) {
  const Icon = direction < 0 ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={hidden}
      style={{ top: 'calc(var(--strip-pad) + var(--card-pad) + var(--photo) / 2 - 1.375rem)' }}
      className={`absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/95 text-ink shadow-[0_6px_20px_rgba(17,24,39,0.16)] backdrop-blur transition duration-200 active:scale-95 disabled:invisible md:hidden ${
        direction < 0 ? '-left-3' : '-right-3'
      }`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

function Strip({ className, children }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    // 2px of slack: snapping and fractional card widths rarely land on an
    // exact integer, and an arrow that flickers at the end reads as broken.
    const update = () => {
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    // Crossing md turns the strip into a layout with nothing to scroll; rotating
    // a phone changes how far there is to go.
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, []);

  /** One person per press, as on the reference — measured, since a slide's
   *  width follows the screen. */
  const step = (direction) => {
    const el = trackRef.current;
    const slide = el?.firstElementChild;
    if (!slide) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: direction * (slide.getBoundingClientRect().width + gap),
      behavior: reduce ? 'auto' : 'smooth',
    });
  };

  return (
    <div className={`relative mt-3 md:mt-5 ${STRIP_VARS}`}>
      <ul ref={trackRef} className={className}>
        {children}
      </ul>
      <StripArrow direction={-1} hidden={atStart} onClick={() => step(-1)} />
      <StripArrow direction={1} hidden={atEnd} onClick={() => step(1)} />
    </div>
  );
}

/* ─── 执行委员 ────────────────────────────────────────────────────────────── */

function OfficerCard({ member }) {
  return (
    <li
      className={`${SLIDE} flex flex-col items-center rounded-[24px] border border-black/6 bg-white px-3 pb-4 pt-[var(--card-pad)] text-center ${STRIP_SHADOW} md:basis-auto md:px-5 md:pb-5 md:pt-6`}
    >
      <Avatar member={member} className="h-[var(--photo)] w-[var(--photo)] md:h-24 md:w-24" tint="#F1ECE7" />
      <h4 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-ink md:mt-4 md:text-xl">
        {member.name}
      </h4>
      <p className="mb-3 mt-1 text-sm leading-snug text-black/58">{member.role}</p>
      {/* mt-auto pins the button to the bottom edge, so cards side by side line
          up even when one role — 特别活动咨询委员 — wraps and its neighbour's
          does not. */}
      <InstagramLink member={member} className="mt-auto" />
    </li>
  );
}

/* ─── 七小组负责人 ────────────────────────────────────────────────────────── */

/**
 * The whole card leads to the group's page, which is what a visitor looking at
 * a group lead most likely wants. It is a stretched link — the name's anchor
 * covers the card through ::after — not an <a> wrapped round everything,
 * because the Instagram link inside would then be a link nested in a link:
 * invalid HTML, announced unpredictably by screen readers.
 *
 * The focus ring is drawn on that same ::after, so the card lights up only when
 * the group link itself has keyboard focus. It used to hang off the card's
 * :focus-within, which also fired when focus was on the Instagram button —
 * making the whole card look selected when it was not. The ring is inset:
 * drawn outside the card, the phone strip would clip it along with the shadow.
 *
 * Name, colour and destination all come from the group's own page data, so a
 * card cannot disagree with the page it opens.
 */
function GroupLeadCard({ member, dept }) {
  const accent = dept?.accentHex ?? '#A11217';

  const name = (
    <>
      {member.name}
      {dept && (
        <>
          <ArrowUpRight
            aria-hidden="true"
            className="ml-1 inline h-3.5 w-3.5 -translate-y-px text-black/35 transition group-hover:text-umred"
          />
          <span className="sr-only">，{member.role}，前往{dept.title}的小组页面</span>
        </>
      )}
    </>
  );

  return (
    <li
      className={`${SLIDE} group relative flex min-w-0 flex-col items-center rounded-[20px] border border-black/6 bg-white px-3 pb-4 pt-[var(--card-pad)] text-center ${STRIP_SHADOW} transition duration-300 md:basis-[calc(25%-0.6rem)] xl:flex-1 xl:basis-0 ${
        dept ? 'md:hover:-translate-y-0.5 md:hover:shadow-card-hover' : ''
      }`}
    >
      {/* `1F` is 12% alpha: the group's colour, quietly, behind a photo still loading. */}
      <Avatar member={member} className="h-[var(--photo)] w-[var(--photo)] md:h-16 md:w-16" tint={`${accent}1F`} />

      <div className="mb-3 mt-3 w-full min-w-0">
        <h4 className="text-base font-semibold tracking-[-0.02em] text-ink transition group-hover:text-umred">
          {dept ? (
            <Link
              to={`/departments/${dept.slug}`}
              className="after:absolute after:inset-0 after:rounded-[20px] after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-umred/40"
            >
              {name}
            </Link>
          ) : (
            name
          )}
        </h4>
        <p className="mt-0.5 flex items-center justify-center gap-1.5 text-sm text-black/58">
          <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
          <span className="truncate">{member.role}</span>
        </p>
      </div>

      <InstagramLink member={member} className="mt-auto" />
    </li>
  );
}

/* ─── CommitteeGrid ───────────────────────────────────────────────────────── */

const DEPT_BY_SLUG = new Map(departments.map((d) => [d.slug, d]));
const DEPT_ORDER = new Map(departments.map((d, i) => [d.slug, i]));

export function CommitteeGrid({ members }) {
  const officers = members.filter((m) => !m.dept);
  // The 七小组 order, not the order the data happens to be written in, so this
  // row reads left to right exactly like the group grid higher up the page.
  const leads = members
    .filter((m) => m.dept)
    .sort((a, b) => (DEPT_ORDER.get(a.dept) ?? 99) - (DEPT_ORDER.get(b.dept) ?? 99));

  return (
    <div className="mt-12 space-y-10 sm:mt-14 md:space-y-14">
      {officers.length > 0 && (
        <section aria-labelledby="committee-officers">
          <TierHeading id="committee-officers" title="执行委员" note={`${officers.length} 位 · 统筹学会事务`} />
          {/* From md, four columns: eight officers fill two rows exactly. */}
          <Strip className={`${STRIP} md:grid md:grid-cols-4 md:gap-4`}>
            {officers.map((m) => (
              <OfficerCard key={m.name} member={m} />
            ))}
          </Strip>
        </section>
      )}

      {leads.length > 0 && (
        <section aria-labelledby="committee-leads">
          <TierHeading id="committee-leads" title="七小组负责人" note="点击卡片，前往小组页面" />
          {/* From md, four to a row with the remaining three centred beneath —
              seven has no column count between one and seven it divides into,
              and a card left alone at the start of a row reads as a gap. From
              xl, one line of seven: the whole of 七小组 across the page.
              25% − 0.6rem leaves 2.4px of slack over three 12px gaps, so
              rounding can never push the fourth card onto the next line. */}
          <Strip className={`${STRIP} md:flex-wrap md:justify-center md:gap-3 xl:flex-nowrap xl:gap-4`}>
            {leads.map((m) => (
              <GroupLeadCard key={m.name} member={m} dept={DEPT_BY_SLUG.get(m.dept)} />
            ))}
          </Strip>
        </section>
      )}
    </div>
  );
}
