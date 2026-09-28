import "./HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-stars" />

            <div className="hero-nebula hero-nebula-one" />
            <div className="hero-nebula hero-nebula-two" />

            <header className="hero-nav">
                <div className="hero-logo">
                    <img
                        src="/src/assets/PB_LOGO.svg"
                        alt="Prahlad Bathre"
                    />
                </div>

                <nav className="hero-links">
                    <a href="#work">
                        WORK
                    </a>

                    <a href="#about">
                        ABOUT
                    </a>

                    <a href="#contact">
                        CONTACT
                    </a>
                </nav>
            </header>

            <main className="hero-content">
                <p className="hero-eyebrow">
                    FULL STACK DEVELOPER
                </p>

                <h1>
                    I build
                    <br />
                    <span>
                        digital systems.
                    </span>
                </h1>

                <p className="hero-description">
                    I’m Prahlad — a Full Stack Developer
                    focused on turning ideas into practical,
                    scalable web applications.
                </p>

                <div className="hero-actions">
                    <a
                        href="#work"
                        className="hero-button hero-button-primary"
                    >
                        VIEW MY WORK
                        <span>↗</span>
                    </a>

                    <a
                        href="#contact"
                        className="hero-button hero-button-secondary"
                    >
                        LET&apos;S CONNECT
                    </a>
                </div>
            </main>

            <div className="hero-orbit">
                <div
                    className="hero-orbit-ring hero-orbit-ring-one"
                />

                <div
                    className="hero-orbit-ring hero-orbit-ring-two"
                />

                <div className="hero-orbit-core">
                    <div className="hero-core-glow" />
                </div>
            </div>

            <div className="hero-scroll">
                <span />
                <p>EXPLORE MY WORK</p>
            </div>
        </section>
    );
};

export default HeroSection;