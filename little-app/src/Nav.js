import {useState} from "react";
function Nav({ setPage}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    const goToPage = (page) =>{
        setPage(page);
        closeMenu();
    }

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
                    <a
                        href="/"
                        onClick={(event) => {
                            event.preventDefault();
                            goToPage("home");
                        }}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="/about"
                        onClick={(event) => {
                            event.preventDefault();
                            goToPage("about");
                        }}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="/menu"
                        onClick={(event) => {
                            event.preventDefault();
                            goToPage("menu");
                        }}
                    >
                        Menu
                    </a>
                </li>

                <li>
                    <a
                        href="/reservation"
                        onClick={(event) => {
                            event.preventDefault();
                            goToPage("reservation");
                        }}
                    >
                        Reservations
                    </a>
                </li>

                <li>
                     <a
                        href="/order-online"
                        onClick={(event) => {
                            event.preventDefault();
                            goToPage("order-online");
                        }}
                    >
                        Order Online
                    </a>
                </li>

                <li>
                    <a
                        href="/login"
                        onClick={(event) => {
                            event.preventDefault();
                            goToPage("login");
                        }}
                    >
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;