import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: { default: "Yogesh Kumar — Frontend Engineer", template: "%s · Yogesh Kumar" },
  description:
    "Portfolio of Yogesh Kumar. React, Next.js, TypeScript, Tailwind. Performance, DX, and AI integrations.",
  openGraph: { type: "website", siteName: "Yogesh Kumar", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  icons: { shortcut: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
