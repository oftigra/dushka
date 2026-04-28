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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dushka.vercel.app";
const siteDescription =
  "QA-портфолио Ивана: ручное тестирование, автотесты, mobile QA, API, регресс и AI-assisted QA без стерильной корпоративщины.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Душные идеи | QA portfolio",
    template: "%s | Душные идеи",
  },
  description: siteDescription,
  applicationName: "Душные идеи",
  authors: [{ name: "Ivan" }],
  creator: "Ivan",
  keywords: [
    "QA",
    "QA engineer",
    "manual testing",
    "automation testing",
    "mobile QA",
    "API testing",
    "regression testing",
    "Playwright",
    "Postman",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Душные идеи | QA portfolio",
    description: siteDescription,
    url: "/",
    siteName: "Душные идеи",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Душные идеи - мемное QA-портфолио",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Душные идеи | QA portfolio",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
