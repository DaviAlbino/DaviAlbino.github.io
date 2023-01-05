import React from "react";
import { HiAtSymbol } from "react-icons/hi"

function Footer() {
   return (
    <footer className="main-footer">
        {/* <Link to="/">  */}
          <div className="headerTitle">
            <HiAtSymbol className="atSymbol"/>
            <span>Made By </span>
            <span>Davi Albino</span>
          </div>
        {/* </Link> */}
        {/* <div className="headerOptions">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/projects"><h2>Projects</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
        </div>
        <div className="email">
            <HiOutlineMail className="emailIcon"/>
            <h2>negroalbino_@hotmail.com</h2>
        </div> */}
    </footer>
   )
};

export default Footer;