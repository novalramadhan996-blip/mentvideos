import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative bg-hero text-white overflow-hidden pt-28 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-cyan)]" />
            AI Video Intelligence Platform
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05]">
            MENT<sup className="text-2xl md:text-3xl opacity-70">™</sup> Video —{" "}
            <span className="text-gradient">Semantic Deep Search</span> for Video
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 font-medium">
            Analyze every scene, frame, and moment.
          </p>
          <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
            MENT™ Video brings semantic understanding to video at scale — searching inside
            footage by event, object, meaning, audio, and context. Find the exact moment that
            matters across millions of hours.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-blue px-5 py-3 text-sm font-medium text-white shadow-glow hover:opacity-95 transition"
            >
              Explore Video Search
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 backdrop-blur px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              <Play className="h-4 w-4" />
              Job Opening
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-xl gap-6 text-left">
            {[
              { v: "10×", l: "Faster review" },
              { v: "99%", l: "Scene precision" },
              { v: "PB+", l: "Scale ready" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-semibold text-white">{s.v}</div>
                <div className="text-xs md:text-sm text-white/55 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock visual */}
        <div className="reveal mt-16 md:mt-20 relative rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-elegant overflow-hidden">
          <div className="aspect-[16/8] bg-[linear-gradient(135deg,oklch(0.22_0.06_260),oklch(0.32_0.08_255))] relative">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Play className="h-7 w-7 text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
              <div className="h-1 flex-1 rounded-full bg-white/15 overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-blue" />
              </div>
              <span className="text-xs text-white/70 font-mono">02:14 / 06:48</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {["Scene 12 · Vehicle entering", "Logo · Acme Corp", "Event · Crowd gathering", "Audio · Alarm 00:42"].map(
              (t) => (
                <div key={t} className="bg-[color:var(--navy-deep)] px-4 py-3 text-xs text-white/70">
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
