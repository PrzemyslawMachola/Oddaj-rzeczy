import React from "react";
import Hero from "./hero";
import Stats from "./stats";
import Steps from "./stepsToGive";
import AboutUs from "./aboutUs";
import Who from "./who";
import Contact from "./contact";

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <Steps />
            <AboutUs />
            <Who />
            <Contact />
        </div>
    )
}

export default Home;