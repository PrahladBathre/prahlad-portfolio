
import { useState } from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa";

import "./ContactSection.css";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Backend integration will be added in the next step.
        console.log("Contact form data:", formData);
    };

    return (
        <section
            id="contact"
            className="contact-section"
        >
            <div className="contact-container">

                {/* STATUS */}

                <div className="contact-status">
                    <span className="status-dot" />

                    <span>
                        CONNECTION AVAILABLE
                    </span>
                </div>


                {/* HEADING */}

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


                {/* CONTACT FORM */}

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    {/* NAME */}

                    <div className="form-field">

                        <label htmlFor="contact-name">
                            NAME
                        </label>

                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="YOUR NAME"
                            autoComplete="name"
                            required
                        />

                    </div>


                    {/* EMAIL */}

                    <div className="form-field">

                        <label htmlFor="contact-email">
                            EMAIL
                        </label>

                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="YOU@EXAMPLE.COM"
                            autoComplete="email"
                            required
                        />

                    </div>


                    {/* MESSAGE */}

                    <div className="form-field form-field-message">

                        <label htmlFor="contact-message">
                            MESSAGE
                        </label>

                        <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="TELL ME ABOUT YOUR PROJECT..."
                            rows="5"
                            required
                        />

                    </div>


                    {/* SUBMIT */}

                    <button
                        type="submit"
                        className="contact-submit"
                    >
                        <span>
                            SEND TRANSMISSION
                        </span>

                        <span className="submit-arrow">
                            ↗
                        </span>
                    </button>

                </form>


                {/* DIRECT CONTACT ACTIONS */}

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


                {/* FOOTER */}

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
