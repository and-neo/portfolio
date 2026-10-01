import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-container">
                <a className="navbar-logo" href="#home">
                    AND<span>.</span>NEO
                </a>

                <nav className="navbar-links" aria-label="Main navigation">
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
