import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateReferenceCode, generateTicketToken } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
  category: z.enum([
    "GENERAL_ATTENDEE",
    "DEBATE_TEAM",
    "RESEARCHER",
    "WORKSHOP",
    "SPEAKER",
    "JUDGE",
    "VIP",
    "VOLUNTEER",
    "SPONSOR_REP",
  ]),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  organisation: z.string().optional().nullable(),
  designation: z.string().optional().nullable(),
  teamName: z.string().optional().nullable(),
  institution: z.string().optional().nullable(),
  captainName: z.string().optional().nullable(),
  teamMembers: z.string().optional().nullable(),
  invitationCode: z.string().optional().nullable(),
  consentGiven: z.boolean(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (!data.consentGiven) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 });
    }

    // Check if event is in RSVP-only mode (default true)
    const config = await prisma.eventConfig.findFirst();
    const isRsvpOnly = config?.isRsvpOnly ?? true;

    // For restricted categories, invitation code is expected (basic check)
    if (["SPEAKER", "JUDGE", "VIP"].includes(data.category) && !data.invitationCode) {
      return NextResponse.json(
        { error: "Invitation code is required for this category" },
        { status: 400 }
      );
    }

    // Duplicate email check for same category (simple)
    const existing = await prisma.registration.findFirst({
      where: {
        email: data.email.toLowerCase(),
        category: data.category,
        status: { not: "CANCELLED" },
      },
    });
    if (existing) {
      return NextResponse.json(
        { error: "A registration with this email and category already exists" },
        { status: 409 }
      );
    }

    const referenceCode = generateReferenceCode();
    const ticketToken = generateTicketToken();

    const registration = await prisma.registration.create({
      data: {
        referenceCode,
        category: data.category,
        status: "PENDING",
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email.toLowerCase(),
        phone: data.phone || null,
        organisation: data.organisation || null,
        designation: data.designation || null,
        teamName: data.teamName || null,
        institution: data.institution || null,
        captainName: data.captainName || null,
        teamMembers: data.teamMembers || null,
        isRsvp: isRsvpOnly,
        invitationCode: data.invitationCode || null,
        consentGiven: true,
        consentAt: new Date(),
        ticketToken,
        ticket: {
          create: {
            qrPayload: ticketToken,
            status: "VALID",
          },
        },
      },
      include: { ticket: true },
    });

    // TODO: Send confirmation email via Resend here

    return NextResponse.json({
      success: true,
      referenceCode: registration.referenceCode,
      message: "RSVP recorded successfully",
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.errors }, { status: 400 });
    }
    console.error("RSVP error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
