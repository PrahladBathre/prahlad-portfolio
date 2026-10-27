import { ArrowDownRight, ArrowUpRight, Code2, Sparkles, Braces, Database, Layers3 } from "lucide-react";
import logo from "../assets/PB_LOGO.svg";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="hero-kicker-line" /> PORTFOLIO / 2026 <span className="hero-kicker-divider">·</span> FULL STACK DEVELOPMENT</div>
          <p className="hero-pretitle">I turn ideas into <span>working systems.</span></p>
          <h1 id="hero-title">Building the web<br />with <span>intent.</span></h1>
          <p className="hero-description">I’m Prahlad — a full-stack developer drawn to the space where thoughtful interfaces meet dependable application logic.</p>
          <div className="hero-cta-row">
            <a className="hero-cta hero-cta-primary" href="#work">Explore selected work <ArrowUpRight size={16} strokeWidth={1.7} /></a>
            <a className="hero-cta hero-cta-quiet" href="#contact">Start a conversation <ArrowDownRight size={16} strokeWidth={1.7} /></a>
          </div>
          <div className="hero-proofline"><span><Code2 size={14} /> UI → API → DATA</span><i /> <span><Sparkles size={14} /> BUILT TO BE USEFUL</span></div>
        </div>

        <div className="hero-visual-stage" aria-label="Animated Violet Noir developer emblem">
          <div className="hero-visual-grid" />
          <div className="visual-orbit visual-orbit-one" />
          <div className="visual-orbit visual-orbit-two" />
          <div className="visual-orbit visual-orbit-three" />
          <div className="visual-aura" />
          <div className="visual-core"><img src={logo} alt="Prahlad Bathre logo" /><span className="visual-core-ring" /></div>
          <div className="visual-node visual-node-ui"><span><Layers3 size={15} /></span><div><strong>INTERFACE</strong><small>React · Next.js</small></div></div>
          <div className="visual-node visual-node-api"><span><Braces size={15} /></span><div><strong>APPLICATION</strong><small>APIs · Logic</small></div></div>
          <div className="visual-node visual-node-data"><span><Database size={15} /></span><div><strong>DATA</strong><small>Model · Persist</small></div></div>
          <div className="visual-stage-label visual-stage-label-top"><span>PB / 01</span><span>FULL-STACK SYSTEMS</span></div>
          <div className="visual-stage-caption"><span className="caption-pulse" /><div><strong>Curiosity into craft.</strong><small>Design-minded. Systems-focused.</small></div><span className="caption-arrow">↗</span></div>
          <div className="visual-stage-label visual-stage-label-bottom"><span>JABALPUR, INDIA</span><span>UI → API → DATA</span></div>
        </div>
        <div className="hero-bottom-note"><span>01 — A LITTLE ABOUT HOW I THINK</span><a href="#work" aria-label="Scroll to selected work"><span className="scroll-line" /> SCROLL TO EXPLORE</a></div>
      </div>
    </section>
  );
}
