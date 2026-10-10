import { SHLOKA } from "@/data/content";

const Row = () => (
  <div className="flex shrink-0 items-center">
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i} className="flex items-center">
        <span className="font-sanskrit text-lg tracking-wide text-amber-200/80 sm:text-xl">{SHLOKA}</span>
        <span className="mx-8 text-amber-500/70" aria-hidden="true">
          ✦
        </span>
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div
    data-testid="sanskrit-marquee"
    className="relative overflow-hidden border-y border-amber-500/15 bg-[#0D0F15] py-5"
  >
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0B0E] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0B0E] to-transparent" />
    <div className="marquee-track">
      <Row />
      <Row />
    </div>
  </div>
);

export default Marquee;
