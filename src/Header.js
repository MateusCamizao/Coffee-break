import "./Header.css"

function Header() {
    return(
        <header>
            <aside class="menu">
                <div class="page-content menu-content">
                        <h1 class="logo">
                            <a href="#">
                                Coffe Break
                            </a>
                        </h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Content</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div class="menu-spacing"></div>
        </header>
    );
}

export default Header;