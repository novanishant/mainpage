import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar">
     {/* LOGO */}
     <div className="logo">foundya</div>
     {/* NAVIGATION MENU */}
     <ul className="nav-links">
       {/* USING CHECKBOX HACK */}
       <input type="checkbox" id="checkbox_toggle" />
       <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
       {/* NAVIGATION MENUS */}
       <div className="menu">
         <li><Link to="/">EDC</Link ></li>
         <li><Link to="/">About Us</Link ></li>
         <li><Link to="/">Contact</Link ></li>
         <li id="SignUp" ><Link to="/" style={{color:"#FFFFFF"}}>Sign Up</Link ></li>
       </div>
     </ul>
   </nav>
        </div>
    )

}

export default NavBar
