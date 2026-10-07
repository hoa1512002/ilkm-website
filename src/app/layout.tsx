import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ILKM | AI-Accelerated RF, Antenna & PCB Engineering",
  description: "ILKM researches AI-assisted engineering methods for RF circuits, antennas, microwave systems and high-frequency PCB design, combining electromagnetic simulation, optimization and machine learning.",
  keywords: ["AI RF design", "antenna optimization", "RF engineering", "microwave engineering", "AI antenna design", "high-frequency PCB", "electromagnetic optimization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased min-h-screen flex flex-col selection:bg-[var(--accent)]/30`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
