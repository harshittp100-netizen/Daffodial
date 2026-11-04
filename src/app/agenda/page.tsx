import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Agenda" };

export default function AgendaPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Programme
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">
              Two-Day Agenda Framework
            </h1>
            <p className="text-white/60 text-lg">
              Indicative schedule. Exact session timings and room assignments
              will be finalised after venue capacity, guest availability and
              debate format are confirmed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Day 1 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gold-500/15 flex items-center justify-center font-display text-xl font-semibold text-gold-400">
                  01
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold">Day 1</h2>
                  <p className="text-white/50 text-sm">Business Leadership Summit</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Morning
                  </div>
                  <div className="text-white/80">
                    Registration, opening ceremony and keynote address
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Late morning
                  </div>
                  <div className="text-white/80">
                    Business leadership panel / industry discussion
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Lunch
                  </div>
                  <div className="text-white/80">Networking lunch</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Afternoon
                  </div>
                  <div className="text-white/80">
                    Debate preliminary rounds and business/innovation session
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Evening
                  </div>
                  <div className="text-white/80">
                    Guest appearance or entertainment segment and networking
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gold-500/15 flex items-center justify-center font-display text-xl font-semibold text-gold-400">
                  02
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold">Day 2</h2>
                  <p className="text-white/50 text-sm">Championship Finals</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Morning
                  </div>
                  <div className="text-white/80">
                    Quarter-finals and related sessions
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Midday
                  </div>
                  <div className="text-white/80">Semi-finals and lunch</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Afternoon
                  </div>
                  <div className="text-white/80">
                    Corporate discussion and grand debate finale
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-28 shrink-0 text-sm text-gold-400 font-medium">
                    Evening
                  </div>
                  <div className="text-white/80">
                    Awards, prize distribution, closing and networking
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-navy-800/40 text-sm text-white/60">
            <strong className="text-white/80">Note:</strong> Session timings,
            speaker assignments and room allocations will be published closer to
            the event once confirmations are in place. Registered participants
            will receive updated agendas via email.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
