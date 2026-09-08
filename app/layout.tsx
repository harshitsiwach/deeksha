import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit ♥ Deeksha — 5 Years Homecoming",
  description: "Countdown to Deeksha landing in Delhi + farewell. Edmonton Toronto Abu Dhabi Delhi Calgary.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
