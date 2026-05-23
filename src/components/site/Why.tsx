import { Crosshair, Gauge, Layers, Network } from "lucide-react";

const values = [
  { icon: Crosshair, title: "Precise moment detection", text: "Frame-accurate localization of events and entities." },
  { icon: Layers, title: "Deep semantic understanding", text: "Reasoning across visual, audio and contextual signals." },
  { icon: Gauge, title: "Faster video analysis", text: "Reduce review time from hours to seconds." },
  { icon: Network, title: "Built to scale", text: "Production-grade pipelines for enterprise archives." },
];

export function Why() {
  return (
    <section id="why" className="py-24 md:py-32 bg-[color:var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold tracking-widest text-[color:var(--accent-cyan)] uppercase">
            Why MENT™ Video
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            The fastest way to turn video into intelligence.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-blue text-white shadow-glow">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
