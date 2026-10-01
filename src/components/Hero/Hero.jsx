import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">
                        ANDREAS NEOFYTOU · FULL STACK DEVELOPER
                    </p>

                    <h1 className="hero-title">
                        I build thoughtful,
                        <br />
                        <span>full-stack</span> web experiences.
                    </h1>

                    <p className="hero-description">
                        Computing graduate focused on building responsive,
                        user-oriented web applications with React, Node, Express
                        and MongoDB.
                    </p>

                    <div className="hero-action-divider"></div>

                    <div className="hero-actions">
                        <a className="button button-primary" href="#work">
                            View my work
                            <span aria-hidden="true">→</span>
                        </a>

                        <a className="button button-secondary" href="#about">
                            About me
                        </a>
                    </div>
                </div>

                <div className="hero-decoration" aria-hidden="true">
                    <div className="hero-shape hero-shape-coral"></div>
                    <div className="hero-shape hero-shape-yellow"></div>

                    <span className="hero-code">&lt;/&gt;</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
