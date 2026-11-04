"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Super Admin one-time setup page.
 * Used to bootstrap the first admin account and verify Neon / Cloudinary connectivity.
 * After setupCompleted = true this page should redirect or be disabled.
 */
export default function SuperAdminSetupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/admin/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
          name: data.get("name"),
          contactEmail: data.get("contactEmail"),
          contactPhone: data.get("contactPhone"),
        }),
      });

      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Setup failed");

      setMessage("Setup completed successfully. Redirecting to admin…");
      setTimeout(() => router.push("/admin"), 1500);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Setup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-display font-bold text-navy-900 text-2xl mx-auto mb-4">
            M
          </div>
          <h1 className="font-display text-3xl font-semibold mb-2">Super Admin Setup</h1>
          <p className="text-white/60 text-sm">
            One-time bootstrap for MBDC 2027. Creates the first Super Admin account and initial EventConfig.
            Ensure <code className="text-gold-400">DATABASE_URL</code> (Neon) and optional Cloudinary keys are set in{" "}
            <code className="text-gold-400">.env</code>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5">
          <div>
            <label className="form-label" htmlFor="name">Your Name</label>
            <input className="form-input" id="name" name="name" required />
          </div>
          <div>
            <label className="form-label" htmlFor="email">Super Admin Email *</label>
            <input className="form-input" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="form-label" htmlFor="password">Password * (min 10 chars)</label>
            <input className="form-input" type="password" id="password" name="password" minLength={10} required />
          </div>
          <div>
            <label className="form-label" htmlFor="contactEmail">Official Event Contact Email</label>
            <input className="form-input" type="email" id="contactEmail" name="contactEmail" />
          </div>
          <div>
            <label className="form-label" htmlFor="contactPhone">Official Contact Phone</label>
            <input className="form-input" type="tel" id="contactPhone" name="contactPhone" />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 text-sm">
              {error}
            </div>
          )}
          {message && (
            <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300 text-sm">
              {message}
            </div>
          )}

          <button type="submit" className="btn-primary w-full py-3" disabled={loading}>
            {loading ? "Setting up…" : "Complete Setup"}
          </button>

          <p className="text-xs text-white/40 text-center">
            This page becomes unavailable once setup is marked complete. Keep your Neon and Cloudinary keys only in environment variables.
          </p>
        </form>
      </div>
    </div>
  );
}
