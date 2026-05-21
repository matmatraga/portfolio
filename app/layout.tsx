import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: `${siteConfig.name} · ${siteConfig.title} · Freelance & Contract`,
  description: `Software engineer at ${siteConfig.company} (Java, Vue, Hibernate, MySQL). Available for contract and part-time MERN work. Based in ${siteConfig.location}.`,
  openGraph: {
    title: `${siteConfig.name} · Contract & Part-time Developer`,
    description: `MERN full-stack engineer at ${siteConfig.company}. Open to freelance and contract projects.`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} · Software Engineer`,
    description: `Contract & part-time MERN development · ${siteConfig.company}`,
  },
};

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    var d = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', d);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
