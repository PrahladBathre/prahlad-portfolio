import { ArrowDownRight, Boxes, Braces, Database, GitPullRequest, Layers3 } from "lucide-react";
import "./Architecture.css";

const layers = [
  { number: "01", label: "THE EXPERIENCE", title: "Interface", description: "Make the next action clear. Build responsive UI that feels considered, not merely assembled.", icon: Layers3, tools: ["React", "Next.js", "TypeScript", "CSS / Tailwind"] },
  { number: "02", label: "THE APPLICATION", title: "Logic & APIs", description: "Keep responsibilities clear, validate input, and make application behavior predictable.", icon: Braces, tools: ["Node.js", "Express", "Python", "FastAPI"] },
  { number: "03", label: "THE DATA", title: "Persistence", description: "Model information around the workflow and choose storage that suits the shape of the problem.", icon: Database, tools: ["MongoDB", "PostgreSQL", "SQL"] },
  { number: "04", label: "THE DELIVERY", title: "Engineering loop", description: "Use version control, API testing, deployment, and iteration to make progress easier to trust.", icon: GitPullRequest, tools: ["Git / GitHub", "Postman", "Deployment", "Debugging"] },
];

export default function Architecture() {
  return (
    <section className="architecture-section section-shell" id="architecture" aria-labelledby="architecture-title">
      <div className="architecture-heading"><p className="section-kicker">My approach / 04</p><div className="architecture-heading-grid"><h2 className="section-title" id="architecture-title">One product.<br /><em>Connected layers.</em></h2><p className="section-intro">I’m interested in how the whole application behaves — not just the screen someone sees first.</p></div></div>
      <div className="architecture-flow"><div className="architecture-flow-label"><Boxes size={15} /><span>APPLICATION STACK / CONCEPTUAL VIEW</span></div>{layers.map(({ number, label, title, description, icon: Icon, tools }, index) => <div className="architecture-layer" key={number}><div className="architecture-layer-index">{number}</div><div className="architecture-layer-icon"><Icon size={19} strokeWidth={1.5} /></div><div className="architecture-layer-copy"><p>{label}</p><h3>{title}</h3><span>{description}</span></div><div className="architecture-layer-tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>{index < layers.length - 1 && <div className="architecture-connector" aria-hidden="true"><i /></div>}</div>)}</div>
      <div className="architecture-bottom"><div><span className="architecture-bottom-mark">↳</span><p>Good engineering is a series of deliberate trade-offs, made visible.</p></div><a href="#contact">Talk through a project <ArrowDownRight size={15} /></a></div>
    </section>
  );
}
