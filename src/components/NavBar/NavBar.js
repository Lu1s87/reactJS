import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/images/logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <div className="menu">
        <div className="menu__container">
          <NavLink to={"/"}>
            <img src={logo} className="menu__logo" alt="Gaming" />
          </NavLink>
          <CartWidget />
        </div>
      </div>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink
              to={"category/video"}
              className={({ isActive }) => (isActive ? "blue" : "white")}
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Video
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to={"category/memorias"}
              className={({ isActive }) => (isActive ? "blue" : "white")}
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Memorias
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to={"category/placasbase"}
              className={({ isActive }) => (isActive ? "blue" : "white")}
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Placas Base
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink
              to={"category/procesadores"}
              className={({ isActive }) => (isActive ? "blue" : "white")}
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Procesadores
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
