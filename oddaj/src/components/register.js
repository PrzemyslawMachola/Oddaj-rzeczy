import React from "react";
import { Link } from "react-router-dom";
import UserNav from "./userNav";
import MainNav from "./mainNav";
import decoration from "../assets/Decoration.svg";
import "../scss/elements/login.scss";


const Login = () => {
    return (
        <div className="login">
            <UserNav />
            <MainNav />
            <span className="login__title">Zaloguj się</span>
            <img className="decoration" src={decoration} alt="decoration"></img>
            <form className="login__form">
                <label className="login__label">Email<input className="login__input"></input></label>
                <label className="login__label">Hasło<input className="login__input"></input></label>
                <label className="login__label">Powtórz hasło<input className="login__input"></input></label>

            </form>
            <div className="login__buttons">
                <Link className="userNavButton" to="/login">Zaloguj</Link>
                <button className="login__button">Zalóż konto</button>
             
            </div>
        </div>
    )
};

export default Login;