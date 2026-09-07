import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { PointerGlow } from "@/components/ui/PointerGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Joshua Rhei J. Liao — a full-stack software engineer and BSc Computer Science student at the University of Roehampton, London, building web apps end to end.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Software Engineer`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description,
  applicationName: `${siteConfig.shortName} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Joshua Liao",
    "Joshua Rhei Liao",
    "software engineer",
    "full-stack developer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "University of Roehampton",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} | Software Engineer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer`,
    description,
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
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

// Runs before first paint so the stored theme is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <AuroraBackground />
        <PointerGlow />
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
