import "./Header.css"

function Header() {
    return(
        <header>
            <section class="grid-container">
                <h1>
                    <a href="#">
                        <img class="logo-img" src="./logo-coffee.png"></img>
                    </a>
                </h1>

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Content</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Header;