import type { Metadata, Viewport } from "next";
import { Inter, Rubik_Mono_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const rubikMono = Rubik_Mono_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-display",
});

const themeScript = `
try {
  var savedTheme = window.localStorage.getItem("dush-theme");
  var theme = savedTheme === "night" ? "night" : "day";
  document.documentElement.dataset.theme = theme;
} catch (_) {
  document.documentElement.dataset.theme = "day";
}
`;

export const metadata: Metadata = {
  title: "Душные идеи",
  description: "Мемный сайт-портфолио QA с ручным тестированием, автотестами, мобилками и Matrix-режимом.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffd84d" },
    { media: "(prefers-color-scheme: dark)", color: "#06140d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className={`${inter.variable} ${rubikMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
