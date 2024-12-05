import CardWidget from "../../common/cardWidget/CardWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="container-navbar navbar">
      <Link
        to="/"
        className="navbar-logo"
        aria-label="Ir a la página de inicio"
      >
        <img
          src="https://res.cloudinary.com/dznwdgz0t/image/upload/v1733361874/Coca-Cola-1210_gpqfkf.jpg"
          alt="Logo de Coca-Cola"
          className="navbar-logo-img"
        />
        <div className="navbar-logo-text">COCA-COLA</div>
      </Link>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Todas
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/1litro" className="navbar-link">
            1 litro
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/2litros" className="navbar-link">
            2 litros
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/3litros" className="navbar-link">
            3 litros
          </Link>
        </li>
      </ul>
      <Link className="logoCarrito" to="/cart" aria-label="Ir al carrito">
        <CardWidget />
      </Link>
    </nav>
  );
};
