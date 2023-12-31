import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import profilePicture from "./images/myPhoto.jpg";
import { FaRegLightbulb } from "react-icons/fa";

export const App = () => {
    return (
        <div className="card">
            <img src={profilePicture} alt="" className="avatar" />
            <div className="data">
                <h1>Brendan McGaw</h1>
                <p>
                    Full-time student of life, always trying to develop further
                    skills and in the current throws of learning React and
                    TypeScript. When I'm not writing code, I'm playing with my
                    son, going surfing or spending time with family. Oh and
                    working full-time as a point of sale installer.
                </p>
                <footer className="skill-list">
                    <span
                        className="skill"
                        style={{ backgroundColor: "yellow" }}
                    >
                        <FaRegLightbulb />
                        HTML
                    </span>
                    <span
                        className="skill"
                        style={{ backgroundColor: "green" }}
                    >
                        <FaRegLightbulb />
                        CSS
                    </span>
                    <span
                        className="skill"
                        style={{ backgroundColor: "purple" }}
                    >
                        <FaRegLightbulb />
                        JavaScript
                    </span>
                    <span
                        className="skill"
                        style={{ backgroundColor: "orange" }}
                    >
                        <FaRegLightbulb />
                        Python
                    </span>
                    <span className="skill" style={{ backgroundColor: "aqua" }}>
                        <FaRegLightbulb />
                        React
                    </span>
                    <span className="skill" style={{ backgroundColor: "red" }}>
                        <FaRegLightbulb />
                        React Native
                    </span>
                </footer>
            </div>
        </div>
    );
};

// Turn all of these into seperate components.
