import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">About the Event</p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6">Purpose, Vision & Objectives</h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-white/70">
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Purpose</h3>
                <p>To create a national platform where students, researchers, young professionals, entrepreneurs and business leaders debate current business and management issues, exchange ideas and build professional connections.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Vision</h3>
                <p>To establish MBDC as a respected national platform for business debate, leadership development and industry engagement.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Objectives</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encourage critical thinking, research and structured argument.</li>
                  <li>Develop public speaking, leadership and teamwork skills.</li>
                  <li>Connect students, researchers and emerging professionals with business leaders.</li>
                  <li>Create discussion around current business, economic, technology and management issues.</li>
                  <li>Offer sponsors meaningful brand engagement and access to a relevant audience.</li>
                  <li>Create networking and collaboration opportunities among institutions, companies and participants.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h4 className="font-display text-lg font-semibold mb-4 text-gold-400">At a Glance</h4>
              <dl className="space-y-4 text-sm">
                <div><dt className="text-white/50">Event</dt><dd className="font-medium">MBDC 2027</dd></div>
                <div><dt className="text-white/50">Tagline</dt><dd className="font-medium">Where Ideas Compete, Leaders Emerge.</dd></div>
                <div><dt className="text-white/50">Location</dt><dd className="font-medium">Mumbai, India</dd></div>
                <div><dt className="text-white/50">Window</dt><dd className="font-medium">Oct–Dec 2027</dd></div>
                <div><dt className="text-white/50">Duration</dt><dd className="font-medium">Two days</dd></div>
                <div><dt className="text-white/50">Prize Pool</dt><dd className="font-medium text-gold-400">₹10,00,000</dd></div>
                <div><dt className="text-white/50">Default mode</dt><dd className="font-medium">RSVP / Invitation</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
