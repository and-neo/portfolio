import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section section" id="contact">
            <div className="container">
                <header className="contact-header">
                    <span className="contact-number">03</span>

                    <div>
                        <p className="contact-label">GET IN TOUCH</p>

                        <h2>
                            Let's build something
                            <br />
                            worth talking about.
                        </h2>
                    </div>
                </header>

                <div className="contact-content">
                    <div className="contact-intro">
                        <p>
                            I'm currently looking for entry-level opportunities
                            in software development where I can contribute,
                            learn and continue growing as a developer.
                        </p>

                        <a
                            className="contact-email"
                            href="mailto:andreas.neofytou13@gmail.com"
                        >
                            andreas.neofytou13@gmail.com
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <div className="contact-links">
                        <a
                            href="https://www.linkedin.com/in/and-neo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>LinkedIn</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="https://github.com/and-neo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>GitHub</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
