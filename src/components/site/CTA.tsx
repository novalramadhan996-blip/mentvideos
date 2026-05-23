import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[color:var(--navy-deep)]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--navy)] text-white p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-gradient-blue opacity-30 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Unlock deep insights from your videos.
            </h2>
            <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto">
              See how MENT™ Video can transform the way your organization searches, analyzes and
              acts on video data.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[color:var(--navy-deep)] hover:bg-white/90 transition"
              >
                Job Opening
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
