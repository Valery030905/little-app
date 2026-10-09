function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <a href="/">
                        <img src="/images/logo-footer.png" alt="Little Lemon logo" className="logo"/>
                    </a>
                </div>

                <div className="footer-column">
                    <h3>Doormat Navigation</h3>

                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/menu">Menu</a>
                    <a href="/reservations">Reservations</a>
                    <a href="/order-online">Order Online</a>
                    <a href="/login">Login</a>
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>123 Main Street</p>
                    <p>Chicago, IL 60601</p>
                    <p>(123) 456-7890</p>
                </div>

                <div className="footer-column">
                    <h3>Social Media</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;