import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProviderWrapper from "@/components/theme/ThemeProvider";
import ThemeToggle from "@/components/theme/ToggleTheme";
import LandingNavBar from "@/components/layout/LandingNavBar";
import SafeErrorBoundary from "./SafeErrorBoundary";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coduit",
  description: "Developers Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Coduit" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SafeErrorBoundary>
          <ThemeProviderWrapper>
            {children}
          </ThemeProviderWrapper>
        </SafeErrorBoundary>

      </body>
    </html>
  );
}
