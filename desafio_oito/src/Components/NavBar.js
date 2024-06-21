import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/photos">Fotos</NavLink>
      <NavLink to="/description">Descrição</NavLink>
    </nav>
  );
};

export default NavBar;
