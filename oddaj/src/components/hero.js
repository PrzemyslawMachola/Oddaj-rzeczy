import React from "react";
import UserNav from "./userNav";
import MainNav from "./mainNav";
import heroImage from "../assets/Home-Hero-Image.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero__photo" src={heroImage} alt=""></img>
            <div className="hero__content">
                <UserNav />
                <MainNav />
                zacznij pomagać
            </div>
        </div>
    )
}

export default Hero;