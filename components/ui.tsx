import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-white/10">
      <Container className="py-14 md:py-20">
        <p className="font-display text-xl uppercase tracking-[0.18em] text-signal">{kicker}</p>
        <h1 className="mt-3 max-w-5xl font-display text-6xl uppercase leading-[0.84] text-paper md:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{lede}</p>
      </Container>
    </header>
  );
}

export function buttonClass(tone: "signal" | "ghost" | "ink" = "signal") {
  const base =
    "inline-flex min-h-12 items-center justify-center px-5 text-center font-display text-xl uppercase tracking-wide transition-colors";
  if (tone === "signal") return `${base} border-2 border-signal bg-signal text-ink hover:bg-ink hover:text-signal`;
  if (tone === "ink") return `${base} bg-ink text-paper hover:bg-asphalt`;
  return `${base} border border-current bg-transparent hover:border-signal hover:bg-signal hover:text-ink`;
}

export function ExternalLink({
  href,
  children,
  className = "",
  newTab,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  newTab: string;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> ({newTab})</span>
    </a>
  );
}
