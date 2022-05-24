import React from "react";
import UserNav from "./userNav";
import MainNav from "./mainNav";
import heroImage from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero__photo" src={heroImage} alt=""></img>
            <div className="hero__content">
                <UserNav />
                <MainNav />
                <div className="hero__box">
                    <span>Zacznij pomagać!</span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <img className="decoration" alt="decoration" src={decoration}></img>
                    <div className="hero__buttons">
                        <button className="hero__button">ODDAJ<br></br>RZECZY</button>
                        <button className="hero__button">ZORGANIZUJ<br></br>ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;