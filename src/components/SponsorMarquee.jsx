export function SponsorMarquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden rounded-[28px] border border-black/6 bg-[#fafafa] py-6 shadow-soft">
      <div className="flex w-[200%] animate-marquee gap-4 px-4">
        {loop.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="min-w-[210px] flex-1 rounded-[22px] border border-black/5 bg-white px-7 py-5 text-center text-sm font-medium text-black/52 shadow-[0_8px_24px_rgba(17,24,39,0.04)] transition duration-200 hover:border-umred/20 hover:text-umred"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
