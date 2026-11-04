import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy-600/40 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-400 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                National-Level Event · Mumbai · 2027
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
                Where Ideas Compete,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  Leaders Emerge.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
                Mumbai Business Debate Championship 2027 is a two-day national platform bringing together students, researchers, young professionals and business leaders for high-stakes debate, workshops, keynotes and meaningful networking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rsvp" className="btn-primary text-base px-8 py-3.5">
                  RSVP / Register
                </Link>
                <Link href="/sponsor-enquiry" className="btn-outline text-base px-8 py-3.5">
                  Become a Sponsor
                </Link>
              </div>
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10">
                <div>
                  <div className="text-3xl font-display font-semibold text-gold-400">₹10L</div>
                  <div className="text-sm text-white/50 mt-1">Prize Pool</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-gold-400">32</div>
                  <div className="text-sm text-white/50 mt-1">Debate Teams</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-gold-400">2,000</div>
                  <div className="text-sm text-white/50 mt-1">Audience Target</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-gold-400">2</div>
                  <div className="text-sm text-white/50 mt-1">Days of Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot */}
        <section className="py-24 bg-navy-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">The Platform</p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 leading-tight">
                  A National Stage for Business Debate & Leadership
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  MBDC 2027 creates a structured environment where critical thinking meets real-world business challenges. Participants debate current issues in AI, sustainability, startups, leadership and the future of work — while building networks that last.
                </p>
                <ul className="space-y-3 text-white/80">
                  {[
                    "National team competition with prelims to grand finale",
                    "Keynotes, panels and researcher workshops",
                    "Structured networking and sponsor engagement",
                    "₹10 lakh prize pool and championship recognition",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-gold-400 font-medium hover:text-gold-300 transition">
                  Learn more about MBDC
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display text-6xl text-gold-500/30 mb-4">MBDC</div>
                    <p className="text-white/40 text-sm">Event visuals appear here once confirmed</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-navy-900 border border-gold-500/30 rounded-xl p-5 shadow-xl">
                  <div className="text-2xl font-display font-semibold text-gold-400">Oct–Dec 2027</div>
                  <div className="text-sm text-white/60">Exact dates to be announced</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
              Ready to Compete or Collaborate?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Whether you are a debate team, researcher, workshop participant, or a brand wanting meaningful engagement — MBDC 2027 is built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rsvp" className="btn-primary px-8 py-3.5">
                RSVP Now
              </Link>
              <Link href="/sponsor-enquiry" className="btn-outline px-8 py-3.5">
                Sponsorship Opportunities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
