import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/useTranslation";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingFAB } from "@/components/layout/FloatingFAB";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDev Studio | Professional Coding Service",
  description:
    "Jasa koding profesional oleh Gadang Jatu Mahiswara. Landing page, dashboard, company profile, portfolio, dan integrasi AI.",
  keywords: [
    "web development",
    "coding service",
    "landing page",
    "fullstack developer",
    "Next.js",
    "React",
    "Indonesia",
  ],
  authors: [{ name: "Gadang Jatu Mahiswara" }],
  openGraph: {
    title: "GDev Studio | Professional Coding Service",
    description:
      "Jasa koding profesional. Clean code, modern design, delivered on time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <LenisProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <FloatingFAB />
            </LenisProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
