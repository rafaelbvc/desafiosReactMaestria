import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar_container}>
      <p className={styles.brand}>
        React<span>Links</span>
      </p>
      <menu>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          About
        </NavLink>
      </menu>
    </nav>
  );
};

export default NavBar;
