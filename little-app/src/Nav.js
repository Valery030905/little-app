import {useState} from "react";
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navigation" aria-label="Main navigation">

            <button
                type="button"
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen((previous) => !previous)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="nav-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul
                id="nav-menu"
                className={`nav-menu ${menuOpen ? "open" : ""}`}
            >
                <li>
                    <a href="/" onClick={closeMenu}>Home</a>
                </li>

                <li>
                    <a href="/about" onClick={closeMenu}>About</a>
                </li>

                <li>
                    <a href="/menu" onClick={closeMenu}>Menu</a>
                </li>

                <li>
                    <a href="/Reservation" onClick={closeMenu}>Reservations</a>
                </li>

                <li>
                    <a href="/order-online" onClick={closeMenu}>Order Online</a>
                </li>

                <li>
                    <a href="/login" onClick={closeMenu}>Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;