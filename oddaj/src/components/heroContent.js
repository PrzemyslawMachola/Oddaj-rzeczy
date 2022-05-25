import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import "../scss/elements/heroContent.scss";

const HeroContent = () => {
    return (
        <div className="hero__box">
                    <span>Zacznij pomagać!</span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <img className="decoration" alt="decoration" src={decoration}></img>
                    <div className="hero__buttons">
                        <Link className="hero__button" to="/login">ODDAJ<br></br>RZECZY</Link>
                        <Link className="hero__button" to="/login">ZORGANIZUJ<br></br>ZBIÓRKĘ</Link>
                    </div>
                </div>
    )
}

export default HeroContent;