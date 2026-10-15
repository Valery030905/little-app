import Nav from "./Nav";
function Header({ setPage }) {
    return (
        <header className="header">
            <div className="container header-content">
            <a href="/">
                <img src="/images/logo.png" alt="Little Lemon logo" className="logo"/>
            </a>

            <Nav setPage={setPage} />
            </div>
        </header>
    );
}

export default Header;