import { NavLink } from "react-router-dom"
import "./Logo.css"



export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
          <img src="https://www.svgrepo.com/show/85838/female-art-portrait-with-stand.svg" alt="logo" id="logo" />
      </NavLink>
    </div>
  )
}