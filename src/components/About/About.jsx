import "./About.css";

function About() {
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <header className="about-header">
                    <span className="about-number">02</span>

                    <div>
                        <p className="section-label">ABOUT ME</p>
                        <h2>
                            Building, learning,
                            <br />
                            and growing as a developer.
                        </h2>
                    </div>
                </header>

                <div className="about-content">
                    <div className="about-intro">
                        <p className="about-lead">
                            I'm Andreas, a Computing graduate based in Cyprus,
                            focused on starting my career in software
                            development.
                        </p>

                        <p>
                            I enjoy working across both frontend and backend
                            development, turning ideas into responsive and
                            practical web applications. I particularly enjoy the
                            process of solving problems, learning new
                            technologies and seeing a project develop from an
                            initial idea into a working product.
                        </p>

                        <p>
                            I'm currently looking for an entry-level opportunity
                            where I can contribute to real projects, continue
                            developing my technical skills and grow as part of
                            an experienced development team.
                        </p>
                    </div>

                    <div className="about-skills">
                        <div className="skill-group">
                            <span>DEVELOPMENT</span>

                            <div className="skill-list">
                                <p>JavaScript</p>
                                <p>React</p>
                                <p>Node</p>
                                <p>Express</p>
                                <p>MongoDB</p>
                            </div>
                        </div>

                        <div className="skill-group">
                            <span>TOOLS &amp; WORKFLOW</span>

                            <div className="skill-list">
                                <p>Git &amp; GitHub</p>
                                <p>Vite</p>
                                <p>VS Code</p>
                                <p>REST APIs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-decoration" aria-hidden="true">
                    <div className="about-shape about-shape-coral"></div>
                    <div className="about-shape about-shape-yellow"></div>
                    <div className="about-shape about-shape-olive"></div>
                </div>
            </div>
        </section>
    );
}

export default About;
