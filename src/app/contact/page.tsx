"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Support</p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">Contact & FAQ</h1>
            <p className="text-white/60">Official contacts will be published once confirmed. Use the form for general enquiries.</p>
          </div>
          <form
            className="card space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo only – message not sent. Wire to an API route when ready.");
            }}
          >
            <div>
              <label className="form-label" htmlFor="name">Name *</label>
              <input className="form-input" id="name" name="name" required />
            </div>
            <div>
              <label className="form-label" htmlFor="email">Email *</label>
              <input className="form-input" type="email" id="email" name="email" required />
            </div>
            <div>
              <label className="form-label" htmlFor="message">Message *</label>
              <textarea className="form-input" id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="btn-primary w-full py-3">Send Message</button>
          </form>

          <div className="mt-12 space-y-6">
            <h2 className="font-display text-xl font-semibold">FAQ</h2>
            <div>
              <h3 className="font-medium text-gold-400 mb-1">Is registration open or RSVP-only?</h3>
              <p className="text-sm text-white/60">Default is RSVP / invitation-based. Super Admin can switch to open registration when ready.</p>
            </div>
            <div>
              <h3 className="font-medium text-gold-400 mb-1">What categories are available?</h3>
              <p className="text-sm text-white/60">General Attendee, Debate Team, Researcher, Workshop Participant, Speaker, Judge, VIP and more.</p>
            </div>
            <div>
              <h3 className="font-medium text-gold-400 mb-1">Prize pool?</h3>
              <p className="text-sm text-white/60">Proposed ₹10,00,000 total.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
