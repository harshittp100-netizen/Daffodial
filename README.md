# MBDC 2027 — Mumbai Business Debate Championship

Full-stack event website built to the **Complete Event & Website Requirements Document**.

**Stack**
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- **Prisma** + **Neon Serverless PostgreSQL**
- **Cloudinary** for images (speakers, sponsor logos)
- Resend (email – ready to wire)
- Default registration mode: **RSVP / invitation-based**
- Categories: General Attendee, Debate Team, **Researcher**, **Workshop**, Speaker, Judge, VIP, etc.
- Super Admin **setup page** at `/admin/setup`

---

## 1. Prerequisites

- Node.js 18+
- A free [Neon](https://neon.tech) project (PostgreSQL)
- Optional: [Cloudinary](https://cloudinary.com) account
- Optional: [Resend](https://resend.com) for email

## 2. Environment

```bash
cp .env.example .env
```

Fill in:

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Neon **pooled** connection string |
| `DIRECT_URL` | Neon **direct** connection string (for migrations) |
| `NEXTAUTH_SECRET` | Random long string |
| `CLOUDINARY_*` | Image uploads |
| `RESEND_API_KEY` | Transactional email |
| `SUPER_ADMIN_EMAIL` / `PASSWORD` | Bootstrap only |

**Never commit `.env`.**

## 3. Install & Database

```bash
npm install
npx prisma generate
npx prisma db push          # creates tables on Neon
# optional: npx prisma db seed
```

## 4. Run

```bash
npm run dev
```

Open http://localhost:3000

## 5. First-time Super Admin Setup

1. Visit **http://localhost:3000/admin/setup**
2. Create the Super Admin account
3. This also creates the initial `EventConfig` with **`isRsvpOnly: true`**
4. After setup, the setup page is locked (a Super Admin already exists)

## 6. Key Routes

| Path | Description |
|------|-------------|
| `/` | Public home |
| `/rsvp` | **Default registration – RSVP form** with categories (Researcher, Workshop, Debate Team, Speaker…) |
| `/admin/setup` | One-time Super Admin bootstrap |
| `/admin` | Operations dashboard (scaffold) |
| `/api/rsvp` | RSVP submission API (writes to Neon via Prisma) |
| `/api/admin/setup` | Setup API |

## 7. Design Decisions (per latest instructions)

- **Prisma** chosen for schema clarity and ease of use with Neon.
- **Cloudinary** for all media (no local image generation pipeline).
- Registration is **RSVP-first** (`isRsvpOnly: true` by default). Super Admin can later open public registration via Event Config.
- Categories explicitly include **Researcher**, **Workshop**, **Speaker**, **Judge**, etc.
- Super Admin has a dedicated **setup page** to create the first admin and verify Neon connectivity.
- `.env.example` keeps placeholders for Neon + recent/keys; real keys stay in environment only.

## 8. Deploy (Vercel)

1. Push repo to GitHub
2. Import into Vercel
3. Add all environment variables (especially `DATABASE_URL` and `DIRECT_URL`)
4. Deploy – Prisma generate runs on build via `postinstall` / build script

## 9. Next development tasks

- Complete NextAuth role-based login for `/admin/*`
- Wire Resend confirmation emails after RSVP
- Speaker / Sponsor CRUD with Cloudinary upload
- QR check-in scanner page
- CSV export reports
- Agenda & Venue pages (content already designed in static version)

---

*Aligned with MBDC 2027 Complete Event & Website Brief · Version 1.0*
