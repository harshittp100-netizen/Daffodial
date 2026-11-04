import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Venue & Travel" };

export default function VenuePage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Location
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">
              Venue & Travel
            </h1>
            <p className="text-white/60 text-lg">
              Preferred format: one main auditorium supported by breakout rooms
              and common event facilities. Final venue subject to availability,
              site inspection, quotation and budget approval.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-semibold mb-8">
              Indicative Space Requirements
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy-800">
                  <tr>
                    <th className="py-3 px-4 text-gold-400 font-medium border-b border-white/10">
                      Space
                    </th>
                    <th className="py-3 px-4 text-gold-400 font-medium border-b border-white/10">
                      Indicative Requirement
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  {[
                    ["Main auditorium", "1,000–1,200 seats"],
                    ["Breakout rooms", "Three rooms, ~100–150 seats each"],
                    ["VIP / guest lounge", "~30–50 guests"],
                    ["Speaker / artist green room", "Private holding & preparation"],
                    ["Registration", "Six to eight counters or digital lanes"],
                    ["Sponsor activation", "Space for ~8–12 displays"],
                    ["Dining", "Catering capacity in staggered sittings"],
                    ["Media", "Interview / photo area & production control"],
                  ].map(([space, req]) => (
                    <tr key={space} className="border-b border-white/5">
                      <td className="py-3 px-4">{space}</td>
                      <td className="py-3 px-4">{req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-semibold mb-8">
              Venue Shortlist (Prospective)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-display text-lg font-semibold mb-2">
                  Jio World Convention Centre
                </h3>
                <p className="text-sm text-white/60 mb-4">
                  Premium convention environment and meeting/conference
                  facilities.
                </p>
                <span className="inline-block text-xs px-2 py-1 rounded bg-white/10 text-white/50">
                  Quotation & configuration not confirmed
                </span>
              </div>
              <div className="card">
                <h3 className="font-display text-lg font-semibold mb-2">
                  NESCO / Bombay Exhibition Centre
                </h3>
                <p className="text-sm text-white/60 mb-4">
                  Goregaon. Large event infrastructure; auditorium-style
                  configuration to be assessed.
                </p>
                <span className="inline-block text-xs px-2 py-1 rounded bg-white/10 text-white/50">
                  Configuration & quotation not confirmed
                </span>
              </div>
              <div className="card">
                <h3 className="font-display text-lg font-semibold mb-2">
                  CIDCO Exhibition & Convention Centre
                </h3>
                <p className="text-sm text-white/60 mb-4">
                  Navi Mumbai. Alternative facility for cost and availability
                  comparison.
                </p>
                <span className="inline-block text-xs px-2 py-1 rounded bg-white/10 text-white/50">
                  Suitable room configuration not confirmed
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-6">
              Technical & Safety Priorities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/70">
              {[
                "Main stage, debate podiums, lectern, accessible stage access",
                "LED wall, professional sound & wireless microphones",
                "Stage lighting, recording & multi-camera coverage",
                "Reliable internet and backup connectivity",
                "Power capacity & backup arrangements",
                "Fire safety, emergency exits, crowd flow, accessibility",
                "First-aid / medical response & security plan",
                "Parking, loading, VIP entry & public transport info",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 p-4 rounded-xl border border-white/10"
                >
                  <span className="text-gold-500">•</span> {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
