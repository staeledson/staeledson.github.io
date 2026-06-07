import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE = "https://staeledson.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Stael Edson · Desenvolvedor Full Stack — Laravel, Vue.js & IA",
  description:
    "Stael Edson — Desenvolvedor Full Stack especializado em Laravel, PHP, Vue.js, Node.js, PostgreSQL, Docker e IA (RAG). Construo sistemas SaaS escaláveis. Aberto a vagas remotas.",
  keywords: [
    "desenvolvedor full stack", "full stack developer", "Laravel", "PHP", "Vue.js",
    "Node.js", "NestJS", "PostgreSQL", "Docker", "AWS", "CI/CD", "RAG", "IA",
    "LangChain", "SaaS", "remoto", "Stael Edson",
  ],
  authors: [{ name: "Stael Edson" }],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: "Stael Edson · Desenvolvedor Full Stack — Laravel, Vue.js & IA",
    description:
      "Construo sistemas SaaS escaláveis com Laravel, Vue.js, Node.js e IA. Veja meus projetos e estudos de caso.",
    images: [{ url: "/profile.jpg", width: 460, height: 460, alt: "Stael Edson" }],
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stael Edson · Full Stack Developer — Laravel, Vue.js & AI",
    description: "Building scalable SaaS systems with Laravel, Vue.js, Node.js and AI.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='24' fill='%236366f1'/%3E%3Ctext x='50' y='68' font-family='sans-serif' font-size='52' font-weight='700' fill='%23fff' text-anchor='middle'%3ESE%3C/text%3E%3C/svg%3E",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stael Edson",
  jobTitle: "Full Stack Developer",
  url: SITE,
  image: `${SITE}/profile.jpg`,
  sameAs: ["https://www.linkedin.com/in/staeledson/", "https://github.com/staeledson"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sobral",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Laravel", "PHP", "Vue.js", "Node.js", "NestJS", "PostgreSQL", "Docker",
    "AWS", "CI/CD", "RAG", "LangChain", "REST APIs",
  ],
  worksFor: { "@type": "Organization", name: "Grupo Pluralmed" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
