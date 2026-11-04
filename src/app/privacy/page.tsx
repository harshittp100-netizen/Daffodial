import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Privacy & Terms" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold mb-6">Privacy & Terms</h1>
          <div className="space-y-6 text-white/70">
            <p>Registration and RSVP data are collected solely for event administration, communication, ticketing and check-in. Data is stored securely (Neon PostgreSQL) and access is role-restricted.</p>
            <p>By submitting a form you consent to processing for the stated purposes. Unsubscribe options will be provided where required.</p>
            <p>Ticket prices, refund and cancellation policies will be published before sales open. All figures currently shown are planning estimates.</p>
            <p>This is a planning website (Version 1.0). Formal legal terms will be published prior to opening registration. This content is not legal advice.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
