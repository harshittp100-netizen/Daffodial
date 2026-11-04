import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Championship" };

export default function ChampionshipPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">The Competition</p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">Business Debate Championship</h1>
            <p className="text-white/60 text-lg">National team competition with preliminary rounds through to grand finale. Detailed rulebook to be published after final approval.</p>
          </div>

          <section className="mb-20">
            <h2 className="font-display text-2xl font-semibold mb-8">Competition Structure</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { n: "32", l: "Preliminary Teams" },
                { n: "8", l: "Quarter-finals" },
                { n: "4", l: "Semi-finals" },
                { n: "2", l: "Grand Finale" },
                { n: "1", l: "Champion" },
              ].map((item) => (
                <div key={item.l} className="card text-center">
                  <div className="text-3xl font-display font-semibold text-gold-400 mb-2">{item.n}</div>
                  <div className="text-sm text-white/60">{item.l}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-display text-2xl font-semibold mb-8">Proposed Judging Rubric</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy-800">
                  <tr>
                    <th className="py-3 px-4 text-gold-400 font-medium border-b border-white/10">Criterion</th>
                    <th className="py-3 px-4 text-gold-400 font-medium border-b border-white/10">Weight</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  {[
                    ["Business knowledge", "25%"],
                    ["Logical reasoning", "20%"],
                    ["Communication", "20%"],
                    ["Evidence and research", "15%"],
                    ["Rebuttal and counterarguments", "10%"],
                    ["Team coordination", "10%"],
                    ["Total", "100%"],
                  ].map(([c, w]) => (
                    <tr key={c} className="border-b border-white/5">
                      <td className="py-3 px-4">{c}</td>
                      <td className="py-3 px-4">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-display text-2xl font-semibold mb-8">Prize Distribution — ₹10,00,000</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "National Champion", a: "₹5,00,000", highlight: true },
                { t: "First Runner-up", a: "₹3,00,000" },
                { t: "Second Runner-up", a: "₹1,00,000" },
                { t: "Best Speaker", a: "₹50,000" },
                { t: "Best Rebuttal", a: "₹25,000" },
                { t: "Special Jury Award", a: "₹25,000" },
              ].map((p) => (
                <div key={p.t} className={`card ${p.highlight ? "border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-transparent" : ""}`}>
                  <div className="text-sm text-white/50 mb-1">{p.t}</div>
                  <div className="font-display text-2xl font-semibold text-gold-400">{p.a}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Link href="/rsvp" className="btn-primary px-8 py-3.5">RSVP / Register Your Team</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
