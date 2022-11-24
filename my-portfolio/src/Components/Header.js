import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail, HiAtSymbol } from "react-icons/hi"

function Header() {
   return (
    <header className="mainHeader">
        <Link to="/"> 
          <div className="headerTitle">
            <HiAtSymbol className="atSymbol"/>
            <h1>DaviAlbino</h1>
          </div>
        </Link>
        <div className="headerOptions">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
        </div>
        <div className="email">
            <HiOutlineMail className="emailIcon"/>
            <h2>negroalbino_@hotmail.com</h2>
        </div>
    </header>
   )
};

export default Header;