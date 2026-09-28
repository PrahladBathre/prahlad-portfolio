import "./Architecture.css";

const Architecture = () => {
    return (
        <section
            id="architecture"
            className="architecture-section"
        >
            <div className="architecture-container">

                <div className="architecture-heading">
                    <span className="architecture-eyebrow">
                        SYSTEM / ARCHITECTURE
                    </span>

                    <h2>
                        HOW I <span>BUILD</span>
                    </h2>

                    <p>
                        From interface to infrastructure,
                        every layer has a purpose.
                    </p>
                </div>

                <div className="architecture-system">

                    <div className="architecture-layer">
                        <span className="layer-index">01</span>

                        <div className="layer-content">
                            <span className="layer-label">
                                INTERFACE
                            </span>

                            <h3>Frontend</h3>

                            <p>
                                Building responsive interfaces
                                focused on interaction, clarity
                                and user experience.
                            </p>

                            <div className="layer-tech">
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                            </div>
                        </div>
                    </div>


                    <div className="architecture-connector">
                        <span />
                    </div>


                    <div className="architecture-layer">
                        <span className="layer-index">02</span>

                        <div className="layer-content">
                            <span className="layer-label">
                                LOGIC / SERVICES
                            </span>

                            <h3>Backend</h3>

                            <p>
                                Designing APIs, authentication
                                and application logic that connect
                                the interface to the data.
                            </p>

                            <div className="layer-tech">
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>Python</span>
                                <span>FastAPI</span>
                            </div>
                        </div>
                    </div>


                    <div className="architecture-connector">
                        <span />
                    </div>


                    <div className="architecture-layer">
                        <span className="layer-index">03</span>

                        <div className="layer-content">
                            <span className="layer-label">
                                DATA / STORAGE
                            </span>

                            <h3>Database</h3>

                            <p>
                                Structuring and managing data
                                so applications remain reliable,
                                searchable and maintainable.
                            </p>

                            <div className="layer-tech">
                                <span>PostgreSQL</span>
                                <span>MongoDB</span>
                                <span>SQL</span>
                            </div>
                        </div>
                    </div>


                    <div className="architecture-connector">
                        <span />
                    </div>


                    <div className="architecture-layer">
                        <span className="layer-index">04</span>

                        <div className="layer-content">
                            <span className="layer-label">
                                DEVELOPMENT
                            </span>

                            <h3>Engineering</h3>

                            <p>
                                Connecting everything through
                                version control, API testing,
                                deployment and continuous iteration.
                            </p>

                            <div className="layer-tech">
                                <span>Git</span>
                                <span>GitHub</span>
                                <span>Postman</span>
                                <span>REST APIs</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Architecture;