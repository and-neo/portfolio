import "./ProjectShowCase.css";

function ProjectShowcase() {
    return (
        <section className="project-section section" id="work">
            <div className="container">
                <header className="project-section-header">
                    <span className="section-number">01</span>

                    <div>
                        <p className="section-label">SELECTED WORK</p>
                        <h2>MovieVerse.</h2>
                    </div>
                </header>

                <div className="project-intro">
                    <div className="project-heading">
                        <h3>
                            Full-stack movie &amp; TV
                            <br />
                            discovery platform.
                        </h3>
                    </div>

                    <div className="project-summary">
                        <p>
                            MovieVerse is a full-stack web application designed
                            and developed as my final-year Computing project. It
                            combines dynamic movie and TV data with personalized
                            features for registered users.
                        </p>

                        <p>
                            I was responsible for the complete development
                            process, including UI/UX design, frontend
                            implementation, REST API development, database
                            modelling, authentication, third-party API
                            integration and deployment.
                        </p>
                    </div>
                </div>

                <div className="project-tech">
                    <span>React</span>
                    <span>Vite</span>
                    <span>Node</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>JWT</span>
                    <span>TMDb API</span>
                </div>

                <div className="project-preview">
                    <img
                        src="/movieverse/home.png"
                        alt="MovieVerse home page showing trending movies and TV shows"
                    />
                </div>

                <div className="project-links">
                    <a
                        className="project-link project-link-primary"
                        href="https://movieverse-self.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View live project
                        <span aria-hidden="true">↗</span>
                    </a>

                    <a
                        className="project-link project-link-secondary"
                        href="https://github.com/and-neo/MovieVerse"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View source
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="project-experience">
                    <div className="experience-heading">
                        <p className="section-label">DESIGN &amp; EXPERIENCE</p>

                        <h3>
                            Designed around discovery,
                            <br />
                            built for interaction.
                        </h3>

                        <p>
                            I designed the interface to keep content discovery
                            simple while giving movies and TV shows enough
                            visual space to feel engaging. Reusable components
                            and consistent interaction patterns are used
                            throughout the application.
                        </p>
                    </div>

                    <div className="experience-feature">
                        <div className="experience-image">
                            <img
                                src="/movieverse/details.png"
                                alt="MovieVerse movie details interface"
                            />
                        </div>

                        <div className="experience-copy">
                            <span>01 / CONTENT DISCOVERY</span>

                            <h4>Information without the clutter.</h4>

                            <p>
                                Detail pages combine artwork, metadata and user
                                actions into a clear hierarchy, while additional
                                content such as cast, reviews and similar titles
                                remains easy to explore.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="responsive-showcase">
                    <div className="responsive-copy">
                        <span>02 / RESPONSIVE DESIGN</span>

                        <h4>Designed beyond the desktop.</h4>

                        <p>
                            The interface adapts across screen sizes with
                            responsive grids, mobile navigation and layouts
                            designed specifically for smaller displays rather
                            than simply shrinking the desktop experience.
                        </p>
                    </div>

                    <div className="mobile-previews">
                        <div className="mobile-preview">
                            <img
                                src="/movieverse/mobile-home.png"
                                alt="MovieVerse mobile home page"
                            />
                        </div>

                        <div className="mobile-preview mobile-preview-offset">
                            <img
                                src="/movieverse/mobile-library.png"
                                alt="MovieVerse movie details page on mobile"
                            />
                        </div>
                    </div>
                </div>
                <div className="technical-showcase">
                    <div className="technical-heading">
                        <p className="section-label">TECHNICAL HIGHLIGHTS</p>

                        <h3>
                            More than
                            <br />
                            the interface.
                        </h3>

                        <p>
                            MovieVerse was developed as a complete full-stack
                            application, connecting a React frontend with an
                            Express REST API, MongoDB persistence and external
                            movie and TV data.
                        </p>
                    </div>

                    <div className="technical-grid">
                        <article className="technical-item">
                            <span>01</span>
                            <h4>Full-stack architecture</h4>
                            <p>
                                React communicates with an Express REST API
                                responsible for application logic, database
                                operations and communication with external
                                services.
                            </p>
                        </article>

                        <article className="technical-item">
                            <span>02</span>
                            <h4>Authentication &amp; user data</h4>
                            <p>
                                JWT-based authentication protects user-specific
                                functionality, including profiles, favorites,
                                watchlists and reviews stored with MongoDB.
                            </p>
                        </article>

                        <article className="technical-item">
                            <span>03</span>
                            <h4>TMDb API integration</h4>
                            <p>
                                Movie and TV data is retrieved through the
                                backend rather than directly from the client,
                                keeping external API configuration separated
                                from the frontend.
                            </p>
                        </article>

                        <article className="technical-item">
                            <span>04</span>
                            <h4>User-generated content</h4>
                            <p>
                                Registered users can create, update and remove
                                ratings and reviews, with ownership checks
                                handled by the backend.
                            </p>
                        </article>
                    </div>

                    <div className="technical-screens">
                        <figure className="technical-screen">
                            <div className="technical-screen-image">
                                <img
                                    src="/movieverse/library.png"
                                    alt="MovieVerse user library with favorites and watchlist"
                                />
                            </div>

                            <figcaption>
                                <span>PERSONAL LIBRARY</span>
                                Favorites and watchlist persisted to each user's
                                account.
                            </figcaption>
                        </figure>

                        <figure className="technical-screen">
                            <div className="technical-screen-image">
                                <img
                                    src="/movieverse/reviews.png"
                                    alt="MovieVerse ratings and reviews interface"
                                />
                            </div>

                            <figcaption>
                                <span>RATINGS &amp; REVIEWS</span>
                                Authenticated user-generated content with CRUD
                                functionality.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectShowcase;
