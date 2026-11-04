import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomBytes } from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Generate a human-readable reference code e.g. MBDC-2027-A7K3 */
export function generateReferenceCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  const bytes = randomBytes(4);
  for (let i = 0; i < 4; i++) {
    code += chars[bytes[i] % chars.length];
  }
  return `MBDC-2027-${code}`;
}

/** Unpredictable token for QR – never embed PII */
export function generateTicketToken(): string {
  return randomBytes(24).toString("base64url");
}
