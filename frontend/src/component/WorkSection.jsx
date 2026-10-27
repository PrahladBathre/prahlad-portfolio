import { ArrowUpRight, ArrowRight, Layers3, ShieldCheck, CircleDashed, Database } from "lucide-react";
import "./WorkSection.css";

const Stack = ({ items }) => <div className="case-stack">{items.map((item) => <span key={item}>{item}</span>)}</div>;

export default function WorkSection() {
  return (
    <section className="work-section section-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading-row">
        <div><p className="section-kicker">Selected work / 01—02</p><h2 className="section-title" id="work-title">Ideas, shaped into<br /><em>systems.</em></h2></div>
        <p className="section-intro">A closer look at how I approach interfaces, application logic, and the decisions that connect them. Project status is stated plainly.</p>
      </div>

      <article className="case-card campsync-card">
        <div className="case-topline"><span>01 / PERSONAL PROJECT</span><span className="case-status"><i /> In progress · partial live demo</span></div>
        <div className="case-main-grid">
          <div className="case-copy">
            <p className="case-category">DEPARTMENT MANAGEMENT / MERN</p>
            <h3>CampSync<span className="case-title-period">.</span></h3>
            <p className="case-description">A department-focused platform concept that brings academic workflows into one place, with separate access for different user roles.</p>
            <div className="case-capabilities"><span>Department management</span><span>Authentication & RBAC</span><span>Academic resources</span><span>Dashboard & charts</span></div>
            <div className="case-proof"><div><ShieldCheck size={17} /><span>Role-aware access patterns</span></div><div><Layers3 size={17} /><span>Full-stack MERN structure</span></div></div>
            <Stack items={["MongoDB", "Express", "React", "Node.js", "JWT", "MVC"]} />
            <div className="case-actions"><a className="case-primary-link" href="https://campsync.onrender.com/" target="_blank" rel="noreferrer">Open live demo <ArrowUpRight size={16} /></a><a className="case-secondary-link" href="https://github.com/PrahladBathre/CampSync" target="_blank" rel="noreferrer">Explore source <ArrowUpRight size={15} /></a></div>
            <p className="case-caveat">The hosted demo is partial and the project is not currently used by a live user base. Socket.IO collaboration is still in progress.</p>
          </div>
          <div className="case-visual campsync-visual">
            <div className="visual-glow" />
            <div className="visual-window"><div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>CAMPSYNC / DASHBOARD</span><span className="window-live">PREVIEW</span></div><img src="/campsync-dashboard.png" alt="CampSync dashboard interface preview" loading="lazy" /></div>
            <div className="visual-window visual-window-offset"><div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>ATTENDANCE / OVERVIEW</span></div><img src="/campsync-attendance.png" alt="CampSync attendance interface preview" loading="lazy" /></div>
            <div className="visual-float-chip"><span className="chip-icon"><Layers3 size={15} /></span><span><strong>Connected workflows</strong><small>Interface · API · database</small></span></div>
            <span className="visual-index">CS / 001</span>
          </div>
        </div>
        <div className="case-footer"><span>ENGINEERING FOCUS</span><span>Access control <i /> Data flow <i /> Product iteration</span><a href="https://github.com/PrahladBathre/CampSync" target="_blank" rel="noreferrer" aria-label="CampSync source code"><ArrowRight size={17} /></a></div>
      </article>

      <article className="case-card lms-card">
        <div className="case-topline"><span>02 / LEARNING PROJECT</span><span className="case-status case-status-planned"><i /> UI prototype · backend not implemented</span></div>
        <div className="case-main-grid">
          <div className="case-copy">
            <p className="case-category">HOTEL OPERATIONS / SYSTEM DESIGN</p>
            <h3>Lead Management<br /><span>System.</span></h3>
            <p className="case-description">A hotel-oriented workflow concept for tracking enquiries and bookings. The current deliverable is the UI design; the backend and working workflows remain planned work.</p>
            <div className="case-capabilities"><span>Lead pipeline — planned</span><span>Team assignment — planned</span><span>Venue booking — planned</span><span>Operational reports — planned</span></div>
            <div className="case-proof"><div><CircleDashed size={17} /><span>UI concept in progress</span></div><div><Database size={17} /><span>Data model under design</span></div></div>
            <Stack items={["React UI", "FastAPI planned", "PostgreSQL planned", "REST API planned"]} />
            <div className="case-actions"><a className="case-secondary-link" href="https://github.com/PrahladBathre" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a></div>
            <p className="case-caveat">This is not a functioning lead-management application yet. Backend services, authentication, persistence, and booking logic have not been completed.</p>
          </div>
          <div className="case-visual lms-visual">
            <div className="lms-window"><div className="lms-window-top"><span className="lms-brand-mark">LM<span>.</span></span><span>WORKSPACE / CONCEPT</span><span className="lms-window-state">UI ONLY</span></div><div className="lms-mock-layout"><aside><i /><i /><i /><i /></aside><div className="lms-mock-main"><div className="lms-mock-title"><span /><i /></div><div className="lms-mock-metrics"><span /><span /><span /></div><div className="lms-mock-table"><div /><div /><div /><div /><div /><div /></div></div></div><div className="lms-overlay-note"><span className="lms-note-mark">↗</span><span><strong>Designed first.</strong><small>Workflow & data logic to follow.</small></span></div></div>
            <span className="lms-side-label">CONCEPT / 002</span>
          </div>
        </div>
        <div className="case-footer"><span>ENGINEERING FOCUS</span><span>Requirements <i /> Workflow design <i /> Data modeling</span><span className="case-footer-note">IN DEVELOPMENT</span></div>
      </article>
    </section>
  );
}
