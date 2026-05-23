export function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-blue" />
            MENT<sup className="text-[10px] opacity-70">™</sup>{" "}
            <span className="text-white/50 font-normal">Video</span>
          </div>
          <p className="mt-4 text-sm max-w-md leading-relaxed">
            Semantic deep search for video. Built for enterprises, governments and media
            organizations operating at scale.
          </p>
        </div>
        <div>
          <div className="text-white text-sm font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#use-cases" className="hover:text-white">Use Cases</a></li>
            <li><a href="#why" className="hover:text-white">Why MENT</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white text-sm font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#cta" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} MENT™ Video. All rights reserved.</div>
          <div>Enterprise AI Video Intelligence</div>
        </div>
      </div>
    </footer>
  );
}
