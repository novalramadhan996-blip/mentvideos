import { Search } from "lucide-react";
import parisImg from "@/assets/example-paris.jpg";
import horseImg from "@/assets/example-horse.jpg";

const examples = [
  {
    img: parisImg,
    query: "outdoor meeting near a landmark at dusk",
    tags: [
      { t: "00:42:18", c: "Eiffel Tower · landmark · 0.96" },
      { t: "00:42:21", c: "5 people seated · negotiation · 0.92" },
      { t: "00:42:25", c: "Object · wooden box on table · 0.88" },
    ],
  },
  {
    img: horseImg,
    query: "person riding a horse through city traffic at night",
    tags: [
      { t: "01:08:02", c: "Horse · urban environment · 0.97" },
      { t: "01:08:05", c: "Vehicles · headlights · night · 0.94" },
      { t: "01:08:09", c: "Event · pursuit · low light · 0.89" },
    ],
  },
];

export function Examples() {
  return (
    <section id="examples" className="py-24 md:py-32 bg-[color:var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-[color:var(--accent-cyan)] uppercase">
            Examples
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            See semantic search in action.
          </h2>
          <p className="mt-5 text-white/65 text-lg leading-relaxed">
            MENT™ Video understands the full context of a frame — landmarks, objects, people,
            events and atmosphere — and returns the exact moments that match your query.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-elegant"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--navy-deep)]">
                <img
                  src={ex.img}
                  alt={ex.query}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-md bg-black/50 backdrop-blur border border-white/10 px-3 py-2 text-white text-xs">
                  <Search className="h-3.5 w-3.5 text-[color:var(--accent-cyan)]" />
                  <span className="truncate">"{ex.query}"</span>
                </div>
              </div>
              <div className="p-5 space-y-2 font-mono text-xs">
                {ex.tags.map((r) => (
                  <div
                    key={r.t}
                    className="flex items-center justify-between rounded-md bg-white/5 border border-white/10 px-3 py-2"
                  >
                    <span className="text-[color:var(--accent-cyan)] font-semibold">{r.t}</span>
                    <span className="text-white/65">{r.c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
