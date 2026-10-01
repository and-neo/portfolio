import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <a className="footer-logo" href="#home">
                    AND<span>.</span>NEO
                </a>

                <p>Designed &amp; developed by Andreas Neofytou.</p>

                <a className="back-to-top" href="#home">
                    Back to top
                    <span aria-hidden="true">↑</span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
