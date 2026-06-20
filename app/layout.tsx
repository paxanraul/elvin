import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Body / UI — clean, Cyrillic-capable
const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Display — distinctive geometric poster face with Cyrillic
const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "800"],
  variable: "--font-display",
  display: "swap",
});

// Technical HUD — timecodes, track numbers, labels
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DJ ELVIN — Диджей для свадеб и торжеств",
  description:
    "DJ ELVIN — диджей для свадеб, торжеств и частных мероприятий. Музыка, которая собирает людей вместе. Бронирование выступлений в Москве, Санкт-Петербурге и других городах.",
  openGraph: {
    title: "DJ ELVIN",
    description: "Музыка, которая собирает людей вместе.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
