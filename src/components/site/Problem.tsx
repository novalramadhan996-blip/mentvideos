import { Database, FileVideo, SearchX } from "lucide-react";

const stats = [
  { v: "82%", l: "of internet traffic is video" },
  { v: "78%", l: "of users watch video weekly" },
  { v: "+75%", l: "growth in short-form video" },
  { v: "70B+", l: "daily YouTube Shorts views" },
];

const items = [
  {
    icon: FileVideo,
    title: "Video is exploding",
    text: "Short-form, live streams and long-form footage now dominate the internet. Watch time is growing 40%+ year-over-year — far faster than any team can review.",
  },
  {
    icon: SearchX,
    title: "Moments stay buried",
    text: "Traditional text search misses temporal context, scene transitions and semantic meaning inside footage. Critical moments remain invisible inside hours of video.",
  },
  {
    icon: Database,
    title: "Metadata is not enough",
    text: "Tags, titles and timestamps describe a file — not what actually happens inside it. Surface-level indexing cannot answer real investigative questions.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-[color:var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold tracking-widest text-[color:var(--accent-cyan)] uppercase">
            The Challenge
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            The world records more video than anyone can watch.
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            Video has become the dominant medium for information, communication and evidence — yet
            the tools to search inside it haven't kept pace.
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/10">
          {stats.map((s) => (
            <div key={s.l} className="bg-[color:var(--navy-deep)] p-6">
              <div className="text-3xl md:text-4xl font-semibold text-white">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-white/65 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="reveal rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-blue text-white shadow-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
