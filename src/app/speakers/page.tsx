import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Speakers & Guests" };

export default function SpeakersPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Voices of the Event
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">
              Speakers, Judges & Guests
            </h1>
            <p className="text-white/60 text-lg">
              Business leaders, entrepreneurs, academics, industry experts and
              invited personalities. Profiles will be published only for
              confirmed guests.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { role: "Keynote Speaker" },
              { role: "Panel Moderator" },
              { role: "Chief Guest / Jury" },
            ].map((item) => (
              <div key={item.role} className="card text-center">
                <div className="w-24 h-24 rounded-full bg-navy-700 mx-auto mb-5 flex items-center justify-center text-white/30 text-2xl font-display">
                  ?
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">
                  To Be Announced
                </h3>
                <p className="text-sm text-white/50">{item.role}</p>
                <p className="text-xs text-gold-500/80 mt-3 uppercase tracking-wider">
                  Invitees unconfirmed
                </p>
              </div>
            ))}
          </div>

          <div className="card bg-navy-800/60 border-gold-500/20">
            <h3 className="font-display text-xl font-semibold mb-3">
              Target Profile
            </h3>
            <p className="text-white/70 mb-4">
              We aim to host 20–30 speakers, judges and special guests drawn
              from:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-white/70">
              {[
                "Business leaders & CXOs",
                "Founders & entrepreneurs",
                "Academics & researchers",
                "Industry experts & consultants",
                "Policy & thought leaders",
                "Invited personalities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-gold-500">•</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/50 mt-6">
              No individual appearances are confirmed until written agreements
              are in place. This page will be updated as confirmations are
              received.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
