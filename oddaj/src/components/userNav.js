import React from "react";
import {Link} from "react-router-dom";
import "../scss/elements/userNav.scss";

const UserNav = () => {
    return (
        <div className="user__nav">
            <Link className="userNavButton" to="/login">Zaloguj</Link>
            <Link className="userNavButton" to="/register">Załóż konto</Link>
        </div>
    )
}

export default UserNav;