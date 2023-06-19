import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import "./Nav.css"

export default function Nav(params) {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          {/* <li><a href="./home.html">Home</a></li> */}
          <NavLink to="/">Главная</NavLink>
        </li>

        {/* <li><a href="./about.html">About</a></li> */}
        <li className="NavItem">
          <NavLink to="/about">О нас</NavLink>
        </li>

        {/* <li><a href="./contacts.html">Contacts</a></li> */}
        <li className="NavItem">
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
        {/* <li><a href="./delivery.html">Delivery</a></li> */}
        <Search/>
      </ul>
    </nav>
  )
}