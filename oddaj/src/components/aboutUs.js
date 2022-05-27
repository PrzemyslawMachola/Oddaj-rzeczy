import React from "react";
import "../scss/elements/aboutUs.scss";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg"

const AboutUs = () => {
    return (
        <div className="about" id="aboutUs" >
            <div className="about__text">
                <span className="about__title">O nas</span>
                <img className="about__decoration" alt="decoration" src={decoration}></img>
                <p className="about__message">Nori grape silver beet brocoli kombu beet greens fava bean potato wuandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip</p>
                <img className="signature" alt="signature" src={signature}></img>
            </div>
            <img className="about_img" alt="people-in-circle" src={people} ></img>
        </div>
    )
}

export default AboutUs;