import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import BackgroundVisuals from "@/components/BackgroundVisuals";

export const metadata: Metadata = {
  title: "AI Coding und Projektmanagement",
  description:
    "Von Intention zu Produkt. Eine neue Art, IT-Ergebnisse zu bauen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full overflow-hidden">
      <body className="h-full min-h-0 font-sans overflow-hidden">
        <LanguageProvider>
          <BackgroundVisuals />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
