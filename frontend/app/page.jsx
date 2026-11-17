import PortfolioApp from "../src/App.jsx";
const siteUrl = "https://prahlad-portfolio-beta.vercel.app";
const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Prahlad Bathre", url: siteUrl, jobTitle: "Full Stack Developer", sameAs: ["https://github.com/PrahladBathre","https://www.linkedin.com/in/prahlad101/"], knowsAbout: ["Full-stack web development","React","Next.js","JavaScript","Node.js","Python","FastAPI","MongoDB","PostgreSQL","REST APIs"] };
const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Prahlad Bathre Portfolio", url: siteUrl, author: { "@type": "Person", name: "Prahlad Bathre" } };
export default function HomePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]).replace(/</g, "\\u003c") }} /><PortfolioApp /></>;
}
