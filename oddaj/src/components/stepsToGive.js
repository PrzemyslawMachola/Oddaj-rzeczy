import React from "react";
import { Link } from "react-router-dom";
import "../scss/elements/stepsToGive.scss";
import decoration from "../assets/Decoration.svg";
import step1 from "../assets/Icon-1.svg";
import step2 from "../assets/Icon-2.svg";
import step3 from "../assets/Icon-3.svg";
import step4 from "../assets/Icon-4.svg";



const Steps = () => {
    return (
        <div className="steps" id="stepsToGive" >
            <div className="steps__title">
                <span>Wystarczą 4 proste kroki</span>
                <img className="stepsDecoration" alt="decoration" src={decoration}></img>
            </div>
            <div className="fourSteps">
                <div className="steps__box">
                    <img className="steps__img" src={step1}></img>
                    <span className="steps__text">
                        Wybierz rzeczy<br></br>
                        -------<br></br>
                        ubrania, zabawki<br></br>
                        sprzęt i inne
                    </span>
                </div>
                <div className="steps__box">
                    <img className="steps__img" src={step2}></img>
                    <span className="steps__text">
                        Spakuj je<br></br>
                        -------<br></br>
                        skorzystaj z<br></br>
                        worków na śmieci
                    </span>
                </div>
                <div className="steps__box">
                    <img className="steps__img" src={step3}></img>
                    <span className="steps__text">
                        Zdecyduj komu<br></br>
                        chcesz pomóc<br></br>
                        -------<br></br>
                        wybierz zaufane<br></br>
                        miejsce
                    </span>
                </div>
                <div className="steps__box">
                    <img className="steps__img" src={step4}></img>
                    <span className="steps__text">
                        Zamów kuriera<br></br>
                        -------<br></br>
                        kurier przyjedzie<br></br>
                        w dogodnym terminie
                    </span>
                </div>
            </div>
            <div className="steps__buttons">
                <Link className="steps__button" to="/login">ODDAJ<br></br>RZECZY</Link>
            </div>
        </div>
    )
}

export default Steps;