import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Sponsors & Partners" };

export default function SponsorsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Partnership
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">
              Sponsors & Collaborators
            </h1>
            <p className="text-white/60 text-lg">
              Meaningful brand engagement, relevant audience access and
              measurable post-event reporting. No sponsor is confirmed until a
              written agreement is signed.
            </p>
          </div>

          <section className="mb-20">
            <h2 className="font-display text-2xl font-semibold mb-8">
              Sponsorship Packages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card border-gold-500/40 bg-gradient-to-b from-gold-500/10 to-transparent relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs font-medium uppercase tracking-wider text-gold-400 bg-gold-500/20 px-2 py-1 rounded">
                  Flagship
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">
                  Title Sponsor
                </h3>
                <div className="text-3xl font-display font-semibold text-gold-400 mb-4">
                  ₹25 Lakh
                </div>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Naming association</li>
                  <li>• Premium stage & website branding</li>
                  <li>• Prominent activation space</li>
                  <li>• VIP access</li>
                  <li>• Category exclusivity (agreed)</li>
                </ul>
                <p className="text-xs text-white/40">Quantity: 1</p>
              </div>

              <div className="card">
                <h3 className="font-display text-xl font-semibold mb-1">
                  Presenting Sponsor
                </h3>
                <div className="text-3xl font-display font-semibold text-gold-400 mb-4">
                  ₹15 Lakh
                </div>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Prominent branding</li>
                  <li>• Selected session integration</li>
                  <li>• Activation space</li>
                  <li>• VIP access</li>
                </ul>
                <p className="text-xs text-white/40">Quantity: 1</p>
              </div>

              <div className="card">
                <h3 className="font-display text-xl font-semibold mb-1">
                  Gold Sponsor
                </h3>
                <div className="text-3xl font-display font-semibold text-gold-400 mb-4">
                  ₹8 Lakh
                </div>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Strong event branding</li>
                  <li>• Activation space</li>
                  <li>• Digital recognition</li>
                </ul>
                <p className="text-xs text-white/40">Quantity: 2</p>
              </div>

              <div className="card">
                <h3 className="font-display text-xl font-semibold mb-1">
                  Silver Sponsor
                </h3>
                <div className="text-3xl font-display font-semibold text-gold-400 mb-4">
                  ₹4 Lakh
                </div>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Website & signage recognition</li>
                  <li>• Selected networking benefits</li>
                </ul>
                <p className="text-xs text-white/40">Quantity: 3</p>
              </div>

              <div className="card">
                <h3 className="font-display text-xl font-semibold mb-1">
                  Associate Sponsor
                </h3>
                <div className="text-3xl font-display font-semibold text-gold-400 mb-4">
                  ₹2 Lakh
                </div>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Partner recognition</li>
                  <li>• Selected promotional visibility</li>
                </ul>
                <p className="text-xs text-white/40">Quantity: 3</p>
              </div>
            </div>
            <p className="text-sm text-white/50 mt-6">
              Illustrative target if all packages sold: ₹74 lakh. Packages and
              deliverables are subject to final negotiation and written
              agreement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-semibold mb-6">
              Potential Partner Sectors
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Banking & Financial Services",
                "Technology & Software",
                "Education & Universities",
                "Automobile & Mobility",
                "Media & Communications",
                "Hospitality & Travel",
                "Food & Beverage",
                "Consulting & Professional Services",
              ].map((sector) => (
                <span
                  key={sector}
                  className="px-4 py-2 rounded-full border border-white/15 text-sm text-white/70"
                >
                  {sector}
                </span>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Link href="/sponsor-enquiry" className="btn-primary px-8 py-3.5">
              Request Sponsorship Proposal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
