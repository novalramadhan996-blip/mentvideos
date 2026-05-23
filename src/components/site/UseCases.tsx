import { BarChart3, Camera, FileSearch, Newspaper, Scale } from "lucide-react";

const cases = [
  {
    icon: Camera,
    title: "Surveillance & monitoring",
    text: "Real-time and forensic search across CCTV, body cams and operational feeds.",
  },
  {
    icon: FileSearch,
    title: "Video investigation",
    text: "Accelerate investigations by surfacing relevant moments in seconds, not days.",
  },
  {
    icon: BarChart3,
    title: "Media analytics",
    text: "Quantify brand exposure, content trends and audience-relevant moments.",
  },
  {
    icon: Scale,
    title: "Evidence extraction",
    text: "Compile court-ready clips and timestamped findings from large archives.",
  },
  {
    icon: Newspaper,
    title: "Content intelligence",
    text: "Understand, organize and re-purpose video catalogs at production scale.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32 bg-[color:var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold tracking-widest text-[color:var(--accent-cyan)] uppercase">
            Use Cases
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            Built for teams who can't afford to miss a moment.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`reveal rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur hover:-translate-y-0.5 hover:border-white/20 transition-all ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-blue text-white shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
