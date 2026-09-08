import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit ♥ Deeksha — 5 Years Homecoming",
  description: "Countdown to Deeksha landing in Delhi + farewell. Edmonton Toronto Abu Dhabi Delhi Calgary.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff4d7e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
