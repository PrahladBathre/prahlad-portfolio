import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa";

import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="contact-section"
        >
            <div className="contact-container">

                <div className="contact-status">
                    <span className="status-dot" />

                    <span>
                        CONNECTION AVAILABLE
                    </span>
                </div>


                <div className="contact-heading">

                    <span className="contact-eyebrow">
                        FINAL TRANSMISSION
                    </span>

                    <h2>
                        LET'S BUILD
                        <span> SOMETHING.</span>
                    </h2>

                    <p>
                        Have an idea, a project or an opportunity?
                        Let's turn it into something useful.
                    </p>

                </div>


                <div className="contact-actions">

                    {/* EMAIL */}

                    <a
                        href="mailto:your-email@example.com"
                        className="contact-action"
                    >

                        <span className="action-icon">
                            <FaEnvelope />
                        </span>

                        <span className="action-label">
                            EMAIL
                        </span>

                        <span className="action-value">
                            GET IN TOUCH
                        </span>

                        <span className="action-arrow">
                            ↗
                        </span>

                    </a>


                    {/* GITHUB */}

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-action"
                    >

                        <span className="action-icon">
                            <FaGithub />
                        </span>

                        <span className="action-label">
                            GITHUB
                        </span>

                        <span className="action-value">
                            VIEW CODE
                        </span>

                        <span className="action-arrow">
                            ↗
                        </span>

                    </a>


                    {/* LINKEDIN */}

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-action"
                    >

                        <span className="action-icon">
                            <FaLinkedinIn />
                        </span>

                        <span className="action-label">
                            LINKEDIN
                        </span>

                        <span className="action-value">
                            CONNECT
                        </span>

                        <span className="action-arrow">
                            ↗
                        </span>

                    </a>

                </div>


                <footer className="contact-footer">

                    <span>
                        PRAHLAD / FULL STACK DEVELOPER
                    </span>

                    <span>
                        © 2026
                    </span>

                    <span>
                        SYSTEM / ONLINE
                    </span>

                </footer>

            </div>
        </section>
    );
};

export default ContactSection;