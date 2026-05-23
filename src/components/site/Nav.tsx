import { useEffect, useState } from "react";

const links = [
  { href: "#problem", label: "Context" },
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#why", label: "Why MENT" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--navy-deep)]/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white font-semibold tracking-tight">
          <span className="inline-block h-6 w-6 rounded-md bg-gradient-blue shadow-glow" />
          <span>
            MENT<sup className="text-[10px] opacity-70">™</sup>
          </span>
          <span className="text-white/50 font-normal">Video</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="hidden sm:inline-flex items-center rounded-md bg-white text-[color:var(--navy-deep)] px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Job Opening
        </a>
      </div>
    </header>
  );
}
