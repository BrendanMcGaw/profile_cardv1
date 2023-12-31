import React from "react";
import "./App.css";
import { SkillList } from "./Components/SkillList.tsx";
import { Avatar } from "./Components/Avatar.tsx";
import { Intro } from "./Components/Intro.tsx";

export const App = () => {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList colors />
            </div>
        </div>
    );
};

// Turn all of these into seperate components.
