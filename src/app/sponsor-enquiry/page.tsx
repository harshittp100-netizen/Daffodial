"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SponsorEnquiryPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">Collaboration</p>
            <h1 className="font-display text-4xl font-semibold mb-4">Sponsor & Partner Enquiry</h1>
          </div>
          <form
            className="card space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo – enquiry not yet wired to database. Add an API route similar to /api/rsvp.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input className="form-input" id="name" name="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="org">Organisation *</label>
                <input className="form-input" id="org" name="org" required />
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="email">Work Email *</label>
              <input className="form-input" type="email" id="email" name="email" required />
            </div>
            <div>
              <label className="form-label" htmlFor="interest">Interest</label>
              <select className="form-input" id="interest" name="interest">
                <option value="title">Title Sponsor (₹25L)</option>
                <option value="presenting">Presenting (₹15L)</option>
                <option value="gold">Gold (₹8L)</option>
                <option value="silver">Silver (₹4L)</option>
                <option value="associate">Associate (₹2L)</option>
                <option value="custom">Custom / Other</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-input" id="message" name="message" rows={4} />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5">Submit Enquiry</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
