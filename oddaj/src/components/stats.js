import React from "react";
import "../scss/elements/stats.scss";


const Stats = () => {
    return (
        <div className="stats">
            <div className="stats__box">
                <div className="stats__value">1</div>
                <div className="stats__title">ODDANYCH WORKÓW</div>
                <div className="stats__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="stats__box">
                <div className="stats__value">2</div>
                <div className="stats__title">WSPARTYCH ORGANIZACJI</div>
                <div className="stats__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="stats__box">
                <div className="stats__value">3</div>
                <div className="stats__title">ZORGANIZOWANYCH ZBIÓREK</div>
                <div className="stats__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    )
}

export default Stats;