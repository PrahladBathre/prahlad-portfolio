import { ArrowUpRight, LockKeyhole, PanelsTopLeft } from "lucide-react";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section className="experience-section section-shell" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading"><p className="section-kicker">Professional experience / 01</p><h2 className="section-title" id="experience-title">Learning by<br /><em>shipping.</em></h2><p className="section-intro">A growing practice built through hands-on product work: balancing user needs, interface decisions, and the application logic underneath.</p></div>
      <div className="experience-timeline">
        <div className="timeline-rail"><span /></div>
        <article className="experience-entry">
          <div className="experience-date"><span>OCT 2026 — PRESENT</span><i>01</i></div>
          <div className="experience-content"><div className="experience-company-row"><div><p className="experience-company-kicker">CURRENT ROLE</p><h3>Full Stack Developer</h3><p className="experience-company">Cable manufacturing · Jabalpur, India</p></div><span className="experience-current"><i /> CURRENT</span></div>
            <p className="experience-summary">Contributing across frontend and backend development for a product website and an internal business application.</p>
            <div className="experience-responsibilities"><div><PanelsTopLeft size={17} /><span><strong>Product experience</strong><small>Building and refining responsive website interfaces and product-focused flows.</small></span></div><div><LockKeyhole size={17} /><span><strong>Internal application</strong><small>Enhancing CRM features used by the team, with implementation details kept private.</small></span></div></div>
            <div className="experience-tags"><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Full-stack feature work</span></div>
            <div className="experience-privacy"><LockKeyhole size={13} /> Client and internal systems are private; no confidential screens, links, or implementation details are shown.</div>
          </div>
        </article>
      </div>
      <div className="experience-bottom-note"><span>THE PRACTICE</span><p>Build with care. Validate assumptions. Keep learning from the work.</p><a href="#contact">Let’s connect <ArrowUpRight size={14} /></a></div>
    </section>
  );
}
