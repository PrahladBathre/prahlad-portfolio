import "./WorkSection.css";

const WorkSection = () => {
    return (
        <section
            className="work-section"
            id="work"
        >
            <div className="work-header">
                <p className="work-eyebrow">
                    SELECTED WORK
                </p>

                <h2>
                    Systems I&apos;ve
                    <br />
                    <span>built.</span>
                </h2>
            </div>

            {/* ==================================================
                PROJECT 01 — CAMPSYNC
            ================================================== */}

            <article className="project-feature">
                <div className="project-meta">
                    <span className="project-number">
                        01
                    </span>

                    <span className="project-status">
                        COMPLETED
                    </span>
                </div>

                <div className="project-content">
                    <div className="project-info">
                        <p className="project-category">
                            DEPARTMENT MANAGEMENT SYSTEM
                        </p>

                        <h3>
                            CampSync
                        </h3>

                        <p className="project-description">
                            A department management system
                            designed for universities and
                            colleges, connecting students
                            and teachers through role-based
                            access and centralized academic
                            workflows.
                        </p>

                        <div className="project-features">
                            <span>
                                ATTENDANCE
                            </span>

                            <span>
                                NOTES
                            </span>

                            <span>
                                ROLE-BASED ACCESS
                            </span>

                            <span>
                                USER MANAGEMENT
                            </span>
                        </div>

                        <div className="project-stack">
                            <span>
                                MONGODB
                            </span>

                            <span>
                                EXPRESS
                            </span>

                            <span>
                                REACT
                            </span>

                            <span>
                                NODE.JS
                            </span>

                            <span>
                                JWT
                            </span>

                            <span>
                                BCRYPT
                            </span>
                        </div>

                        <div className="project-actions">
                            <a
                                href="#"
                                className="project-link project-link-primary"
                            >
                                VIEW PROJECT
                                <span>↗</span>
                            </a>

                            <a
                                href="#"
                                className="project-link"
                            >
                                GITHUB
                                <span>↗</span>
                            </a>
                        </div>
                    </div>

                    <div className="project-visual">
                        <div className="project-visual-frame campsync-visual-frame">
                            <div className="campsync-screenshot campsync-screenshot-one">
                                <img
                                    src="/campsync-dashboard.png"
                                    alt="CampSync dashboard"
                                />
                            </div>

                            <div className="campsync-screenshot campsync-screenshot-two">
                                <img
                                    src="/campsync-attendance.png"
                                    alt="CampSync attendance monitoring"
                                />
                            </div>
                        </div>

                        <div className="system-node system-node-one">
                            STUDENTS
                        </div>

                        <div className="system-node system-node-two">
                            TEACHERS
                        </div>

                        <div className="system-node system-node-three">
                            AUTH
                        </div>

                        <div className="system-node system-node-four">
                            DATABASE
                        </div>
                    </div>
                </div>
            </article>

            {/* ==================================================
                PROJECT 02 — LEAD MANAGEMENT SYSTEM
            ================================================== */}

            <article className="project-feature">
                <div className="project-meta">
                    <span className="project-number">
                        02
                    </span>

                    <span className="project-status">
                        IN DEVELOPMENT
                    </span>
                </div>

                <div className="project-content">
                    <div className="project-info">
                        <p className="project-category">
                            LEAD &amp; BOOKING MANAGEMENT SYSTEM
                        </p>

                        <h3>
                            Lead Management System
                        </h3>

                        <p className="project-description">
                            A hotel-focused management system
                            currently in development, designed
                            to manage leads, team assignments,
                            venue bookings, activity tracking,
                            and operational reporting through
                            role-based workflows.
                        </p>

                        <div className="project-features">
                            <span>
                                LEAD MANAGEMENT
                            </span>

                            <span>
                                ROLE-BASED ACCESS
                            </span>

                            <span>
                                VENUE BOOKINGS
                            </span>

                            <span>
                                ACTIVITY LOGS
                            </span>

                            <span>
                                REPORTING
                            </span>
                        </div>

                        <div className="project-stack">
                            <span>
                                REACT
                            </span>

                            <span>
                                FASTAPI
                            </span>

                            <span>
                                POSTGRESQL
                            </span>

                            <span>
                                JWT
                            </span>

                            <span>
                                REST API
                            </span>
                        </div>

                        <div className="project-actions">
                            <a
                                href="#"
                                className="project-link project-link-primary"
                            >
                                IN DEVELOPMENT
                            </a>
                        </div>
                    </div>

                    <div className="project-visual">
                        <div className="project-visual-frame">
                            <div className="project-visual-placeholder">
                                <span>
                                    LEAD MANAGEMENT
                                </span>

                                <small>
                                    SYSTEM IN DEVELOPMENT
                                </small>
                            </div>
                        </div>

                        <div className="system-node system-node-one">
                            LEADS
                        </div>

                        <div className="system-node system-node-two">
                            BOOKINGS
                        </div>

                        <div className="system-node system-node-three">
                            MEMBERS
                        </div>

                        <div className="system-node system-node-four">
                            POSTGRESQL
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default WorkSection;