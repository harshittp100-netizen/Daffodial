import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
  name: z.string().min(1),
  contactEmail: z.string().email().optional().nullable(),
  contactPhone: z.string().optional().nullable(),
});

export async function POST(req: NextRequest) {
  try {
    // Guard: only allow if no Super Admin exists yet
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "SUPER_ADMIN" },
    });
    if (existingAdmin) {
      return NextResponse.json(
        { error: "Setup already completed. A Super Admin exists." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const data = schema.parse(body);

    const passwordHash = await bcrypt.hash(data.password, 12);

    // Create Super Admin
    await prisma.user.create({
      data: {
        email: data.email.toLowerCase(),
        passwordHash,
        name: data.name,
        role: "SUPER_ADMIN",
      },
    });

    // Create initial EventConfig (RSVP-only by default)
    await prisma.eventConfig.create({
      data: {
        name: "Mumbai Business Debate Championship 2027",
        tagline: "Where Ideas Compete, Leaders Emerge.",
        dateWindow: "October–December 2027",
        contactEmail: data.contactEmail || data.email,
        contactPhone: data.contactPhone || null,
        isRegistrationOpen: false,
        isRsvpOnly: true,
        setupCompleted: true,
      },
    });

    return NextResponse.json({ success: true, message: "Setup completed" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.errors }, { status: 400 });
    }
    console.error("Setup error:", err);
    return NextResponse.json(
      { error: "Setup failed. Check DATABASE_URL (Neon) connectivity." },
      { status: 500 }
    );
  }
}
