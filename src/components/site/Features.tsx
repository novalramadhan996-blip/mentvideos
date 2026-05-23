import {
  Boxes,
  Clapperboard,
  Clock,
  FileText,
  Film,
  Layers,
  Layers3,
  LineChart,
  Mic,
  Network,
  Search,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "All multimedia types",
    text: "Unified analysis across text, audio, image and video — in a single platform.",
  },
  {
    icon: Search,
    title: "Context-aware querying",
    text: "Search by meaning, context and complex parameters — not just keywords.",
  },
  {
    icon: Film,
    title: "Deep video search",
    text: "Index and retrieve information from inside long-form video at scale.",
  },
  {
    icon: Layers3,
    title: "Scene & frame search",
    text: "Locate semantic scenes and pixel-accurate frames across your archive.",
  },
  {
    icon: Clock,
    title: "Moment identification",
    text: "Pinpoint the exact moments of interest within hours of footage.",
  },
  {
    icon: Sparkles,
    title: "Generative outputs",
    text: "Auto-generate summaries, reports and reconstructed narratives from video.",
  },
  {
    icon: Network,
    title: "Knowledge augmentation",
    text: "Enrich video insights with linked context and external knowledge.",
  },
  {
    icon: LineChart,
    title: "Patterns & anomalies",
    text: "Surface correlations, trends and outliers across multimedia data.",
  },
  {
    icon: Mic,
    title: "Audio understanding",
    text: "Speech, sounds and language analyzed in temporal context.",
  },
  {
    icon: Boxes,
    title: "Categorization & clustering",
    text: "Group videos automatically by theme, entity and content.",
  },
  {
    icon: Clapperboard,
    title: "Clip generation",
    text: "Auto-extract relevant clips from hours of footage on demand.",
  },
  {
    icon: FileText,
    title: "Investigative workflows",
    text: "Annotate, share findings and collaborate on evidence as a team.",
  },
];

const examples = [
  { tag: "Brand", text: "Detect every appearance of a specific logo across a season of broadcasts." },
  { tag: "Event", text: "Surface all moments containing fire, smoke or crowd movement." },
  { tag: "Clip", text: "Extract a 30-second clip of a goal from a 3-hour match recording." },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[color:var(--navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-semibold tracking-widest text-[color:var(--accent-cyan)] uppercase">
            Main Video Capabilities
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            A complete toolkit for deep video intelligence.
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            MENT™ combines semantic understanding, temporal analysis and AI-driven indexing to turn
            video data into actionable intelligence — for analysts, operators and product teams.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-blue text-white shadow-glow transition-colors">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {examples.map((e) => (
            <div
              key={e.tag}
              className="reveal rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 flex gap-4 items-start"
            >
              <span className="text-[10px] font-semibold tracking-widest uppercase text-white bg-gradient-blue rounded px-2 py-1">
                {e.tag}
              </span>
              <p className="text-sm text-white/65 leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
