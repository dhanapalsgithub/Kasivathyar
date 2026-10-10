import Reveal from "@/components/Reveal";

const SectionHead = ({ eyebrow, title, sub, align = "center" }) => (
  <Reveal className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-3 font-display text-3xl font-bold text-amber-100 sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {sub && (
      <p className={`mt-4 max-w-2xl text-sm leading-relaxed text-stone-400 sm:text-base ${align === "center" ? "mx-auto" : ""}`}>
        {sub}
      </p>
    )}
    <div
      className={`mt-5 h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent ${align === "center" ? "mx-auto" : ""}`}
    />
  </Reveal>
);

export default SectionHead;
