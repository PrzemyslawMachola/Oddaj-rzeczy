import React from "react";
// import { Link } from "react-router-dom";
import "../scss/elements/mainNav.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const MainNav = () => {
    return (
        <div className="main__nav">
            <Link className="mainNavButton" to="/">Start</Link>
            <Link 
                className="mainNavButton" 
                to="stepsToGive"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O co chodzi?</Link>
            <Link 
                className="mainNavButton" 
                to="aboutUs"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O nas</Link>
            <Link 
                className="mainNavButton" 
                to="who"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Fundacja i organizacje</Link>
            <Link 
                 className="mainNavButton" 
                 to="contact"
                 activeClass="active"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
            >Kontakt</Link>
        </div>
    )
}

export default MainNav;