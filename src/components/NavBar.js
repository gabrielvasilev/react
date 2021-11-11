import CartWidget from "./CartWidget"

const NavBar = () =>{

return (
    <header>
        <figure>
              <img src="img/LOGO.png" />
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
            <a href="#">Tiendas</a>
            </li>
            <li>
            <a href="#">SALE</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
)
}

export default NavBar