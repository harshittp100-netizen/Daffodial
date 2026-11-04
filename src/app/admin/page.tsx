import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-display font-bold text-navy-900">
            M
          </div>
          <span className="font-semibold">MBDC 2027 Admin</span>
        </div>
        <Link href="/" className="text-sm text-white/60 hover:text-gold-400">
          ← Public site
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="font-display text-3xl font-semibold mb-2">Operations Dashboard</h1>
        <p className="text-white/60 mb-10">
          Role-based modules for registration, debate, speakers, sponsors and reporting.
          Authenticate via the setup flow first.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Registrations / RSVPs", desc: "View & manage attendee and team RSVPs", href: "#" },
            { title: "Debate Administration", desc: "Teams, rounds, scores, results", href: "#" },
            { title: "Speakers & Guests", desc: "Invitations, profiles, Cloudinary photos", href: "#" },
            { title: "Sponsors", desc: "Pipeline, packages, deliverables", href: "#" },
            { title: "Tickets & Check-in", desc: "QR validation and attendance", href: "#" },
            { title: "Event Config", desc: "Dates, venue, RSVP vs open registration", href: "#" },
            { title: "Users & Roles", desc: "Super Admin and department managers", href: "#" },
            { title: "Reports", desc: "CSV exports, attendance, results", href: "#" },
            { title: "Setup", desc: "First-time Super Admin bootstrap", href: "/admin/setup" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card hover:border-gold-500/40 transition"
            >
              <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-white/50">{item.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-xl border border-white/10 bg-navy-800/40 text-sm text-white/50">
          <strong className="text-white/80">Next steps after deploy:</strong>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Set <code className="text-gold-400">DATABASE_URL</code> (Neon pooled) and <code className="text-gold-400">DIRECT_URL</code></li>
            <li>Set Cloudinary and Resend keys in environment</li>
            <li>Run <code className="text-gold-400">npx prisma db push</code></li>
            <li>Visit <code className="text-gold-400">/admin/setup</code> to create Super Admin</li>
            <li>Toggle RSVP-only vs open registration in Event Config when ready</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
