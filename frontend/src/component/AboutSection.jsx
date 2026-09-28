import "./AboutSection.css";
import portrait from "../assets/new-portfolio.png";
const technologies = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "JWT",
    "Git",
    "GitHub",
    "Postman",
    "SQL",
];

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                {/* Heading */}
                <div className="about-heading">
                    <span className="about-eyebrow">
                        ABOUT / IDENTITY
                    </span>

                    <h2>
                        THE <span>BUILDER</span>
                    </h2>
                </div>

                {/* Main visual */}
                <div className="about-visual">

                    {/* Decorative cosmic atmosphere */}
                    <div className="about-glow about-glow-one" />
                    <div className="about-glow about-glow-two" />

                    <div className="about-grid" />
                    {/* Architectural connection system */}
                    <svg
                        className="about-connections"
                        viewBox="0 0 1000 650"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path className="connection-line connection-1" d="M120 120 L360 245" />
                        <path className="connection-line connection-2" d="M70 250 L350 310" />
                        <path className="connection-line connection-3" d="M150 500 L365 390" />
                        <path className="connection-line connection-4" d="M880 120 L640 245" />
                        <path className="connection-line connection-5" d="M930 250 L650 310" />
                        <path className="connection-line connection-6" d="M850 500 L635 390" />

                        <circle className="connection-dot dot-1" cx="360" cy="245" r="3" />
                        <circle className="connection-dot dot-2" cx="350" cy="310" r="3" />
                        <circle className="connection-dot dot-3" cx="365" cy="390" r="3" />

                        <circle className="connection-dot dot-4" cx="640" cy="245" r="3" />
                        <circle className="connection-dot dot-5" cx="650" cy="310" r="3" />
                        <circle className="connection-dot dot-6" cx="635" cy="390" r="3" />
                    </svg>
                    {/* Technology field */}
                    <div className="technology-field">
                        {technologies.map((technology, index) => (
                            <div
                                key={technology}
                                className={`tech-node tech-node-${index + 1}`}
                            >
                                <span>{technology}</span>
                            </div>
                        ))}
                    </div>

                    {/* Person */}
                    <div className="about-person">

                        <div className="person-frame">

                            <div className="person-image-wrapper">
                                <img
                                    src={portrait}
                                    alt="Prahlad Bathre"
                                    className="person-image"
                                    loading="lazy"
                                />
                            </div>

                            <div className="person-scan" />

                            <div className="person-corner corner-top-left" />
                            <div className="person-corner corner-top-right" />
                            <div className="person-corner corner-bottom-left" />
                            <div className="person-corner corner-bottom-right" />

                        </div>

                    </div>

                    {/* Orbit rings */}
                    <div className="about-ring about-ring-one" />
                    <div className="about-ring about-ring-two" />
                    <div className="about-ring about-ring-three" />

                </div>

                {/* About content */}
                <div className="about-content">

                    <p className="about-intro">
                        I build digital systems where{" "}
                        <span>design, logic and technology</span> meet.
                    </p>

                    <p className="about-description">
                        I'm a full-stack developer focused on building
                        practical applications, responsive interfaces and
                        reliable backend systems. I enjoy understanding
                        how things work beneath the surface and turning
                        ideas into usable products.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;