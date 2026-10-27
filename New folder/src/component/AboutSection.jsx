import { ArrowDown, Compass, GitBranch, Layers3 } from "lucide-react";
import portrait from "../assets/new-portfolio.png";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div className="about-topline"><p className="section-kicker">A little context / 03</p><span>PERSONAL NOTE — PRAHLAD BATHRE</span></div>
      <div className="about-layout">
        <div className="about-portrait-card"><div className="about-portrait-top"><span>PROFILE / 001</span><span>IN CONTINUOUS BUILD</span></div><div className="about-portrait-image"><img src={portrait} alt="Portrait of Prahlad Bathre" loading="lazy" /></div><div className="about-portrait-bottom"><span className="about-spark">✳</span><span><strong>Curious by default.</strong><small>Practical by design.</small></span><span className="about-portrait-index">PB—26</span></div></div>
        <div className="about-copy"><h2 className="section-title" id="about-title">The work is<br />the <em>teacher.</em></h2><p className="about-lead">My path into development has been a process of asking how things work — and then building something that answers the question.</p><p className="about-body">I started by learning the foundations, moved into full-stack projects, and now contribute to software used in a professional setting. Each step has made me more interested in the connections between a clear interface, thoughtful backend logic, and data that stays reliable.</p><p className="about-body">I’m still growing, and I’m intentional about that. I’d rather explain what’s working, what’s in progress, and what I learned than dress a project up as something it isn’t.</p><div className="about-principles"><div><span><Compass size={17} /></span><strong>Understand the problem</strong><small>Start with the people and workflow.</small></div><div><span><Layers3 size={17} /></span><strong>Think end to end</strong><small>Connect UI, API, and persistence.</small></div><div><span><GitBranch size={17} /></span><strong>Improve in iterations</strong><small>Make progress visible and testable.</small></div></div><a className="about-down-link" href="#architecture">How I approach a build <ArrowDown size={15} /></a></div>
      </div>
    </section>
  );
}
