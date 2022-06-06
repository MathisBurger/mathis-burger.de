import React from "react";
import Header from "../components/Header";
import style from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard";
import {Language} from "../components/LanguageElement";

type ProjectInfo = {
    /**
     * The URL to the refering github repository
     */
    url: string;
    /**
     * All languages that are used in this project
     */
    languages: Language[];
    /**
     * The name of the project
     */
    name: string;
    /**
     * The description of the project
     */
    description: string;
}


const Projects = () =>  {

    const projects: ProjectInfo[] = [
        {
            url: "https://github.com/MathisBurger/shorty",
            languages: [Language.elixir, Language.svelte],
            name: "Shorty",
            description: "An not yet finished URL shortener built to learn svelte and elixir"
        },
        {
            url: "https://github.com/MathisBurger/AnalAsia",
            languages: [Language.golang],
            name: "AnalAsia",
            description: "An easy to use discord chat analytics bot. You can analyse some basic stuff."
        },
        {
            url: "https://github.com/MathisBurger/commander",
            languages: [Language.golang],
            name: "Commander",
            description: "A lightweight discordgo command handler with internal help command and not found messages."
        },
        {
            url: "https://github.com/MathisBurger/ikea-name-generator",
            languages: [Language.react],
            name: "Ikea name generator",
            description: "This is a little fun project. It is a webapp, which generates random ikea product names."
        },
        {
            url: "https://github.com/MathisBurger/SLF-Engine",
            languages: [Language.nextjs, Language.rust],
            name: "SLF-Engine",
            description: "An open source stadt-land-fluss engine. I built it for learning more about rust and next.js"
        },
        {
            url: "https://github.com/MathisBurger/sporty-leaderboards",
            languages: [Language.rust, Language.react],
            name: "Sporty-Leaderboards",
            description: "An open source workout monitoring system I made of me and my family, because we wanted to see our stats in comparison."
        },
        {
            url: "https://github.com/MathisBurger/CustomMidiController",
            languages: [Language.cpp],
            name: "CustomMidiControl",
            description: "An C++ executable for the arduino, built for a custom MIDI lighting desk"
        },
        {
            url: "https://github.com/MathisBurger/PaintShare",
            languages: [Language.rust, Language.react],
            name: "PaintShare",
            description: "A socialmedia platform to share self painted pictures and other media for creators."
        },
        {
            url: "https://github.com/MathisBurger/OpenInventory-Backend",
            languages: [Language.golang, Language.angular],
            name: "Open Inventory",
            description: "An open source Inventory system made for everyone, who want to organize his storage with multiple user."
        },
        {
            url: "https://github.com/MathisBurger/crypto-simulator",
            languages: [Language.golang, Language.angular],
            name: "Crypto Simulator",
            description: "A partly multiplayer crypto-currency game. You can simulate trading currencies on an webapp."
        },
        {
            url: "https://github.com/MathisBurger/dom-toretto",
            languages: [Language.golang],
            name: "Dom Toretto",
            description: "A simple discord bot that responds to every discord message containing family"
        },
        {
            url: "https://github.com/rednit-team/tinder.js",
            languages: [Language.typescript],
            name: "Tinder JS",
            description: "I built a tinder API wrapper as a fun project as a contributor"
        },
        {
            url: "https://github.com/MathisBurger/ChocolateCSS",
            languages: [Language.scss],
            name: "ChocolateCSS",
            description: "A SCSS library built for faster development of dark themes"
        },
        {
            url: "https://github.com/MathisBurger/MathOnWeb",
            languages: [Language.svelte],
            name: "MathOnWeb",
            description: "A webapp built to automate complex math calculations aka. my homework ;)"
        },
        {
            url: "https://github.com/MathisBurger/vaccinecounter",
            languages: [Language.php, Language.react, Language.scss],
            name: "Vaccinecounter",
            description: "A simple webapp built for monitoring the number of vaccines and the people in a doctors office."
        },
        {
            url: "https://github.com/MathisBurger/SimpleInventory",
            languages: [Language.php, Language.vue, Language.mui],
            name: "SimpleInventory",
            description: "Another modern lokking and super fast web inventory system for the personal and internal use."
        },
        {
            url: "https://github.com/MathisBurger/digify",
            languages: [Language.csharp, Language.react, Language.mui],
            name: "digify",
            description: "An small open source classbook for the private use in schools"
        },
        {
            url: "https://github.com/MathisBurger/SoundboardServer",
            languages: [Language.golang, Language.nextjs, Language.mui],
            name: "SoundboardServer",
            description: "A web interface that plays sounds on the host device"
        },
        {
            url: "https://github.com/MathisBurger/terminalToDo",
            languages: [Language.rust],
            name: "terminalToDo",
            description: "A simple to-do app as an cli. Makes managing toDos for terminal addicted people much easier."
        },
    ]
    return (
        <>
            <Header active={"projects"} />
            <div className={style.container}>
                <h1>Projects</h1>
                <h3>Total: {projects.length}</h3>
                <div className={style.projectBox}>
                    {projects.reverse().map((project, i) => (
                        <ProjectCard
                            githubUrl={project.url}
                            languages={project.languages}
                            name={project.name}
                            description={project.description}
                            key={`project-${i}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;

