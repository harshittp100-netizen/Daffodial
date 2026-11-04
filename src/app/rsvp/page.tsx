"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  { value: "GENERAL_ATTENDEE", label: "General Attendee" },
  { value: "DEBATE_TEAM", label: "Debate Team" },
  { value: "RESEARCHER", label: "Researcher" },
  { value: "WORKSHOP", label: "Workshop Participant" },
  { value: "SPEAKER", label: "Speaker (invited)" },
  { value: "JUDGE", label: "Judge (invited)" },
  { value: "VIP", label: "VIP / Invited Guest" },
] as const;

export default function RsvpPage() {
  const [category, setCategory] = useState<string>("GENERAL_ATTENDEE");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: data.get("category"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          organisation: data.get("organisation"),
          designation: data.get("designation"),
          teamName: data.get("teamName"),
          institution: data.get("institution"),
          captainName: data.get("captainName"),
          teamMembers: data.get("teamMembers"),
          invitationCode: data.get("invitationCode"),
          consentGiven: data.get("consent") === "on",
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-3">
              Invitation & RSVP
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
              RSVP for MBDC 2027
            </h1>
            <p className="text-white/60">
              Registration is invitation / RSVP based by default. Select your category and complete the form. Debate teams, researchers, workshop participants and invited speakers each have tailored fields.
            </p>
          </div>

          {submitted ? (
            <div className="card text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="font-display text-2xl font-semibold mb-2">RSVP Received</h2>
              <p className="text-white/70 mb-6">
                Thank you. Your response has been recorded. You will receive a confirmation email with further details shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div>
                <label className="form-label" htmlFor="category">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="firstName">First Name *</label>
                  <input className="form-input" id="firstName" name="firstName" required />
                </div>
                <div>
                  <label className="form-label" htmlFor="lastName">Last Name *</label>
                  <input className="form-input" id="lastName" name="lastName" required />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="email">Email *</label>
                <input className="form-input" type="email" id="email" name="email" required />
              </div>

              <div>
                <label className="form-label" htmlFor="phone">Phone</label>
                <input className="form-input" type="tel" id="phone" name="phone" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="organisation">Organisation / Institution</label>
                  <input className="form-input" id="organisation" name="organisation" />
                </div>
                <div>
                  <label className="form-label" htmlFor="designation">Designation / Role</label>
                  <input className="form-input" id="designation" name="designation" />
                </div>
              </div>

              {/* Debate Team fields */}
              {category === "DEBATE_TEAM" && (
                <div className="space-y-5 border-t border-white/10 pt-5">
                  <h3 className="font-medium text-gold-400">Team Details</h3>
                  <div>
                    <label className="form-label" htmlFor="teamName">Team Name *</label>
                    <input className="form-input" id="teamName" name="teamName" required={category === "DEBATE_TEAM"} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="institution">Institution *</label>
                    <input className="form-input" id="institution" name="institution" required={category === "DEBATE_TEAM"} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="captainName">Captain Name *</label>
                    <input className="form-input" id="captainName" name="captainName" required={category === "DEBATE_TEAM"} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="teamMembers">Team Members (one per line)</label>
                    <textarea className="form-input" id="teamMembers" name="teamMembers" rows={3} />
                  </div>
                </div>
              )}

              {/* Invitation code for restricted categories */}
              {["SPEAKER", "JUDGE", "VIP"].includes(category) && (
                <div>
                  <label className="form-label" htmlFor="invitationCode">
                    Invitation Code *
                  </label>
                  <input
                    className="form-input"
                    id="invitationCode"
                    name="invitationCode"
                    placeholder="Enter the code from your invitation"
                    required
                  />
                </div>
              )}

              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" name="consent" required className="mt-1" />
                <label htmlFor="consent" className="text-sm text-white/70">
                  I consent to the processing of my data for event administration and communication, and I have read the{" "}
                  <a href="/privacy" className="text-gold-400 hover:underline">Privacy & Terms</a>.
                </label>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm">
                  {error}
                </div>
              )}

              <button type="submit" className="btn-primary w-full py-3.5" disabled={loading}>
                {loading ? "Submitting…" : "Submit RSVP"}
              </button>
              <p className="text-xs text-white/40 text-center">
                Default mode is RSVP / invitation-based. Open registration can be enabled by Super Admin when ready.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
