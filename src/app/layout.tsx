import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MBDC 2027 | Mumbai Business Debate Championship",
    template: "%s | MBDC 2027",
  },
  description:
    "Mumbai Business Debate Championship 2027 — Where Ideas Compete, Leaders Emerge. National-level business debate and leadership event in Mumbai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
