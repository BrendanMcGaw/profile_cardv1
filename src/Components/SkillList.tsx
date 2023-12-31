import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

// Create TSX object with icon, string and backgroundColor (object?)

type Skill = {
    name: string;
    backgroundColor: string;
    icon: object;
};
// Ask harry how I can utilise backgroundColor and icon here

// skill is our variable name and Skill is our object type that is being allocated to the skill property.
export const SkillList = (skill: Skill) => {
    const skills: string[] = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript apparently",
        "React",
        "React Native",
    ];

    // console.log(skills);
    // console.log(typeof (<FaRegLightbulb />));
    return (
        <footer className="skill-list">
            <span className="skill" style={{ backgroundColor: "yellow" }}>
                {<FaRegLightbulb />}
                {skills[0]}
            </span>
            <span className="skill" style={{ backgroundColor: "green" }}>
                <FaRegLightbulb />
                {skills[1]}
            </span>
            <span className="skill" style={{ backgroundColor: "purple" }}>
                <FaRegLightbulb />
                {skills[2]}
            </span>
            <span className="skill" style={{ backgroundColor: "orange" }}>
                <FaRegLightbulb />
                {skills[3]}
            </span>
            <span className="skill" style={{ backgroundColor: "aqua" }}>
                <FaRegLightbulb />
                {skills[4]}
            </span>
            <span className="skill" style={{ backgroundColor: "red" }}>
                <FaRegLightbulb />
                {skills[5]}
            </span>
        </footer>
    );
};
