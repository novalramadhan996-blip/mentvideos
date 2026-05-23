import { Brain, Layers, Waves } from "lucide-react";

export function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-[color:var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <span className="text-xs font-semibold tracking-widest text-[color:var(--accent-cyan)] uppercase">
            The Solution
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            AI that understands video the way humans do.
          </h2>
          <p className="mt-5 text-white/65 text-lg leading-relaxed">
            MENT™ processes large-scale multimedia — extracting meaning, objects, relationships
            and contextual insights across time. The result is a deep semantic index over your
            video archive, queryable in natural language and ready for investigative,
            collaborative and generative workflows.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                icon: Brain,
                title: "Semantic understanding",
                text: "Models reason about events, objects, relationships and meaning — not just pixels.",
              },
              {
                icon: Layers,
                title: "Scene, frame & audio analysis",
                text: "Multi-layer indexing across visual, temporal and acoustic dimensions.",
              },
              {
                icon: Waves,
                title: "Search in natural language",
                text: "Ask questions of your video. Get back the exact moments that answer them.",
              },
            ].map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-blue text-white shadow-glow">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-sm text-white/65 mt-1">{f.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2 shadow-elegant">
            <div className="rounded-xl bg-[color:var(--navy-deep)] text-white p-6 font-mono text-sm">
              <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent-cyan)]" />
                ment.search
              </div>
              <div className="text-white/60">{"> query:"}</div>
              <div className="text-white">
                "find moments where a red truck stops near the entrance after sunset"
              </div>
              <div className="mt-5 space-y-2">
                {[
                  { t: "00:12:34", c: "Red vehicle approaching gate · 0.94" },
                  { t: "00:47:08", c: "Truck stationary · entrance zone · 0.91" },
                  { t: "01:22:51", c: "Driver exits vehicle · low light · 0.87" },
                ].map((r) => (
                  <div
                    key={r.t}
                    className="flex items-center justify-between rounded-md bg-white/5 border border-white/10 px-3 py-2"
                  >
                    <span className="text-[color:var(--accent-cyan)]">{r.t}</span>
                    <span className="text-white/70 text-xs">{r.c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
