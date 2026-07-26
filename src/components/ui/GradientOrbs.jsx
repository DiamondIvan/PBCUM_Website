export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(161,18,23,0.16),transparent_62%)] blur-3xl animate-drift" />
      <div className="absolute right-[-8rem] top-[8rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(17,24,39,0.08),transparent_62%)] blur-3xl animate-float" />
      <div className="noise-overlay" />
    </div>
  );
}
