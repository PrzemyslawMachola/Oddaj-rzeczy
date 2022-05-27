import React from "react";
import "../scss/elements/who.scss";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Who = () => {
    return (
        <div className="who" id="who">
            <div className="who__title">
                <span >Komu pomagamy?</span>
                <img className="stepsDecoration" alt="decoration" src={decoration}></img>
            </div>
            <div className="who__options">
                <Link className="who__button" to="">Fundacjom</Link>
                <Link className="who__button" to="">Organizacjom pozarządowym</Link>
                <Link className="who__button" to="">Lokalnym zbiórkom</Link>
            </div>
            <div className="who__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            
            <div className="who__item">
                <div className="who__item__text">
                    <span className="who__item__title">Fundacja 1</span>
                    <span className="who__item__subtitle">Cel i misja: pomoc osobom w potrzebie</span>
                </div>
                <div className="who__item__description">ubrania, jedzenie, zabawki</div>
            </div>
            <div className="who__item">
                <div className="who__item__text">
                    <span className="who__item__title">Fundacja 2</span>
                    <span className="who__item__subtitle">Cel i misja: pomoc osobom w potrzebie</span>
                </div>
                <div className="who__item__description">ubrania, jedzenie, zabawki</div>
            </div>
            <div className="who__item">
                <div className="who__item__text">
                    <span className="who__item__title">Fundacja 3</span>
                    <span className="who__item__subtitle">Cel i misja: pomoc osobom w potrzebie</span>
                </div>
                <div className="who__item__description">ubrania, jedzenie, zabawki</div>
            </div>

        </div>
    )
}

export default Who;