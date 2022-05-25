import React from "react";
import UserNav from "./userNav";
import MainNav from "./mainNav";
import HeroContent from "./heroContent";
import heroImage from "../assets/Home-Hero-Image.jpg";
import { Link, animateScroll as scroll } from "react-scroll";


const Hero = () => {
    return (
        <div className="hero" id="hero">
            <img className="hero__photo" src={heroImage} alt=""></img>
            <div className="hero__content">
                <UserNav />
                <MainNav />
                <HeroContent />
                <Link   
                    className="toTop" 
                    to="hero"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ></Link>
            </div>
        </div>
    )
}

export default Hero;