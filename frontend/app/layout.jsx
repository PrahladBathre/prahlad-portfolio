import { Analytics } from "@vercel/analytics/next";
import "../src/index.css";
import "../src/component/HeroSection.css";
import "../src/component/WorkSection.css";
import "../src/component/ExperienceSection.css";
import "../src/component/AboutSection.css";
import "../src/component/Architecture.css";
import "../src/component/ContactSection.css";

const siteUrl = "https://prahlad-portfolio-beta.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Prahlad Bathre | Full Stack Developer", template: "%s | Prahlad Bathre" },
  description: "Prahlad Bathre is a full-stack developer building thoughtful web interfaces, reliable application logic, and connected systems with React, Next.js, Node.js, Python, and modern web technologies.",
  applicationName: "Prahlad Bathre Portfolio",
  authors: [{ name: "Prahlad Bathre", url: siteUrl }],
  creator: "Prahlad Bathre",
  publisher: "Prahlad Bathre",
  keywords: ["Prahlad Bathre","Full Stack Developer","Full Stack Developer India","React Developer","Next.js Developer","JavaScript Developer","Node.js","Python","FastAPI","MongoDB","PostgreSQL","Web Developer Portfolio"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "Prahlad Bathre Portfolio", title: "Prahlad Bathre | Full Stack Developer", description: "Thoughtful interfaces, dependable application logic, and connected web systems. Explore the work and approach of Prahlad Bathre.", locale: "en_IN", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Prahlad Bathre — Full Stack Developer" }] },
  twitter: { card: "summary_large_image", title: "Prahlad Bathre | Full Stack Developer", description: "Full-stack developer building thoughtful interfaces and dependable web systems.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  category: "technology",
};
export const viewport = { themeColor: "#08070b", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
