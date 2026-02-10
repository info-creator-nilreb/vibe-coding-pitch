import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import BackgroundVisuals from "@/components/BackgroundVisuals";

export const metadata: Metadata = {
  title: "Vibe Coding für IT-Projektmanager",
  description:
    "Von Intention zu Produkt. Eine neue Art, IT-Ergebnisse zu bauen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen font-sans">
        <LanguageProvider>
          <BackgroundVisuals />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
