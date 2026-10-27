import {
  ArrowUpRight,
  Download,
  FileText,
  Mail,
  MoveUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/PB_LOGO.svg";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-container section-shell">
        <div className="contact-topline">
          <p className="section-kicker">Next conversation / 05</p>

          <span>
            <i />
            OPEN TO THE RIGHT OPPORTUNITY
          </span>
        </div>

        <div className="contact-main">
          <div className="contact-heading">
            <p className="contact-eyebrow">HAVE SOMETHING IN MIND?</p>

            <h2 id="contact-title">
              Let’s make
              <br />
              <em>it matter.</em>
            </h2>

            <p>
              I’m interested in thoughtful teams, useful products, and
              opportunities to keep growing as a full-stack developer.
            </p>

            <div className="contact-direct-links">
              <a
                href="https://github.com/PrahladBathre"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub size={16} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/prahlad101/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedinIn size={16} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <div className="contact-panel-top">
              <span className="contact-panel-mark">
                <img src={logo} alt="" />
                PB<span>.</span>
              </span>

              <span>CONTACT / 001</span>
            </div>

            <div className="contact-panel-body">
              <span className="contact-panel-icon">
                <Mail size={20} />
              </span>

              <p className="contact-panel-kicker">START WITH A MESSAGE</p>

              <h3>
                Good work starts
                <br />
                with a conversation.
              </h3>

              <p className="contact-panel-copy">
                Connect with me on LinkedIn, or explore my code and projects on
                GitHub.
              </p>

              <a
                className="contact-panel-link"
                href="https://www.linkedin.com/in/prahlad101/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="contact-panel-bottom">
              <span>JABALPUR, INDIA</span>
              <span>AVAILABLE FOR A CONVERSATION</span>
            </div>
          </div>
        </div>

        <div className="contact-resume-row">
          <div className="contact-resume-info">
            <div className="contact-resume-icon">
              <FileText size={20} />
            </div>

            <div className="contact-resume-text">
              <strong>Full Stack Developer Resume</strong>
              <span>View my skills, experience, and projects.</span>
            </div>
          </div>

          <a
            href="/resume/Prahlad_fullstack_resume.pdf"
            download="Prahlad_Bathre_Full_Stack_Developer.pdf"
            className="resume-download"
            aria-label="Download Prahlad Bathre's Full Stack Developer resume"
          >
            <Download size={15} />
            <span
              style={{
                margin: "0.5rem",
                fontSize: "0.8rem",
                alignItems: "center",
              }}
            >
              Download Resume
            </span>
          </a>
        </div>

        <footer className="contact-footer">
          <a
            href="#top"
            className="contact-footer-mark"
            aria-label="Back to top"
          >
            <img src={logo} alt="PB logo" />
          </a>

          <span>DESIGNED WITH INTENT · BUILT IN REACT</span>

          <a href="#top">
            BACK TO TOP
            <MoveUpRight size={13} />
          </a>

          <span>© 2026 PRAHLAD BATHRE</span>
        </footer>
      </div>
    </section>
  );
}
