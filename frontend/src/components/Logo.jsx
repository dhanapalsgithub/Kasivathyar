export const LogoMark = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="kv-gold" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#F6D47C" />
        <stop offset="0.55" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#FF9933" />
      </linearGradient>
    </defs>
    <path
      d="M24 4c7.5 5.4 13 11 13 19.2 0 4.5-1.7 8.3-4.4 11.1H15.4C12.7 31.5 11 27.7 11 23.2 11 15 16.5 9.4 24 4Z"
      stroke="url(#kv-gold)"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M24 15.5c2.7 2.8 4 4.9 4 7.2a4 4 0 1 1-8 0c0-2.3 1.3-4.4 4-7.2Z"
      fill="url(#kv-gold)"
      className="kv-flicker"
    />
    <path d="M13 38.5h22c0 3.2-4.9 5.5-11 5.5s-11-2.3-11-5.5Z" fill="url(#kv-gold)" />
  </svg>
);

export const LogoFull = () => (
  <span className="flex items-center gap-3" data-testid="site-logo">
    <LogoMark />
    <span className="leading-tight whitespace-nowrap">
      <span className="block font-display text-xl font-bold tracking-wide text-amber-100">
        Kashi <span className="gold-text">Vadhyar</span>
      </span>
      <span className="block text-[9px] tracking-[0.3em] uppercase text-amber-500/80">
        Tamil Kshetra Purohit
      </span>
    </span>
  </span>
);

export default LogoFull;
