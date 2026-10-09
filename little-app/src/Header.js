import Nav from "./Nav";
function Header() {
    return (
        <header className="header">
            <div className="container header-content">
            <a href="/">
                <img src="/images/logo.png" alt="Little Lemon logo" className="logo"/>
            </a>

            <Nav />
            </div>
        </header>
    );
}

export default Header;