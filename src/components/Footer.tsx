import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-display font-bold text-navy-900">
                M
              </div>
              <span className="font-semibold">MBDC 2027</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Mumbai Business Debate Championship. Where Ideas Compete, Leaders Emerge.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-gold-400 transition">About MBDC</Link></li>
              <li><Link href="/championship" className="hover:text-gold-400 transition">Championship</Link></li>
              <li><Link href="/agenda" className="hover:text-gold-400 transition">Agenda</Link></li>
              <li><Link href="/speakers" className="hover:text-gold-400 transition">Speakers</Link></li>
              <li><Link href="/venue" className="hover:text-gold-400 transition">Venue & Travel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Participate</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/rsvp" className="hover:text-gold-400 transition">RSVP / Register</Link></li>
              <li><Link href="/sponsor-enquiry" className="hover:text-gold-400 transition">Sponsor Enquiry</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition">Contact & FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-400 transition">Privacy & Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Status</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              All attendance, guest, sponsor, budget and venue figures are planning targets. Exact dates, venue and confirmed speakers will be updated as decisions are finalised.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026–2027 Mumbai Business Debate Championship</p>
          <p>Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
