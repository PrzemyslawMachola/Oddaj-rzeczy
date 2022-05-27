import React from "react";
import UserNav from "./userNav";
import MainNav from "./mainNav";
import HeroContent from "./heroContent";
import heroImage from "../assets/Home-Hero-Image.jpg";
import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const Hero = () => {
    return (
        <div className="hero" id="hero">
            <img className="hero__photo" src={heroImage} alt=""></img>
            <div className="hero__content">
                <UserNav />
                <MainNav />
                <HeroContent />
                <ScrollLink   
                    className="toTop" 
                    to="hero"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ></ScrollLink>
            </div>
        </div>
    )
}

export default Hero;