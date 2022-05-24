import React from "react";
import { Link } from "react-router-dom";
import "../scss/elements/mainNav.scss";


const MainNav = () => {
    return (
        <div className="main__nav">
            <Link className="mainNavButton" to="/">Start</Link>
            <Link className="mainNavButton" to="/">O co chodzi?</Link>
            <Link className="mainNavButton" to="/">O nas</Link>
            <Link className="mainNavButton" to="/">Fundacja i organizacje</Link>
            <Link className="mainNavButton" to="/">Kontakt</Link>
        </div>
    )
}

export default MainNav;