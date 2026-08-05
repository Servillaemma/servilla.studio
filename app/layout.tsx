import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Servilla — Editorial & Direction artistique",
  description: "Portfolio d’Emma Servilla, styliste et directrice artistique basée à Paris.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
