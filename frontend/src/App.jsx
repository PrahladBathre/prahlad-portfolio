import { useEffect, useState } from "react";
import logo from "./assets/PB_LOGO.svg";
import HeroSection from "./component/HeroSection.jsx";
import WorkSection from "./component/WorkSection.jsx";
import ExperienceSection from "./component/ExperienceSection.jsx";
import AboutSection from "./component/AboutSection.jsx";
import Architecture from "./component/Architecture.jsx";
import ContactSection from "./component/ContactSection.jsx";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "architecture", label: "Approach" },
  { id: "contact", label: "Contact" },
];

function FloatingNavigation() {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.36;
        const visibleSections = sections
          .map(({ id }) => ({ id, node: document.getElementById(id) }))
          .filter(({ node }) => node);
        let current = visibleSections[0]?.id || "work";
        for (const { id, node } of visibleSections) {
          if (node.getBoundingClientRect().top <= marker) current = id;
        }
        setActiveSection(current);
      });
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      <a className="floating-nav-mark" href="#top" aria-label="Prahlad Bathre, home">
        <img src={logo} alt="PB" />
      </a>
      <div className="floating-nav-links">
        {sections.map(({ id, label }) => (
          <a key={id} className={activeSection === id ? "is-active" : ""} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>
      <a className="floating-nav-availability" href="#contact"><span /> Open to opportunities</a>
    </nav>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loaderLeaving, setLoaderLeaving] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = 1500;
    const remaining = Math.max(0, minimumDuration - (performance.now() - startedAt));
    const timer = window.setTimeout(() => {
      setLoaderLeaving(true);
      window.setTimeout(() => setLoading(false), 420);
    }, remaining);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updatePointer = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className="portfolio-shell" id="top">
      <div className="ambient-field" aria-hidden="true" />
      <FloatingNavigation />
      <main>
        <HeroSection />
        <WorkSection />
        <ExperienceSection />
        <AboutSection />
        <Architecture />
        <ContactSection />
      </main>
      {loading && (
        <div className={`portfolio-loader${loaderLeaving ? " portfolio-loader--leaving" : ""}`} role="status" aria-label="Loading portfolio">
          <div className="loader-mark-wrap"><img src={logo} alt="" /></div>
          <p className="loader-name">PRAHLAD BATHRE<span>.</span></p>
          <div className="loader-track"><span /></div>
          <p className="loader-caption">ASSEMBLING THE EXPERIENCE</p>
        </div>
      )}
    </div>
  );
}
