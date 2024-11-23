import "./Header.css"

function Header() {
    return(
        <header class="menu menu-content">
            <h1 class="logo">
                <a href="#home"> Coffe Break</a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#content">Content</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;