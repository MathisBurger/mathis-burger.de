import React from "react";
import Header from "../components/Header";
import style from "../styles/Projects.module.css";
import LanguageElement from "../components/LanguageElement";


export default function Projects() {
    return (
        <>
            <Header active={"projects"} />
            <div className={style.container}>
                <h1>Projects</h1>
                <div className={style.projectBox}>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/crypto-simulator")}>
                        <h2>Crypto-Simulator</h2>
                        <p>
                            A partly multiplayer crypto-currency game.
                            You can simulate trading currencies on an webapp.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"golang"} />
                            <LanguageElement language={"angular"} />
                        </div>
                    </div>


                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/OpenInventory-Backend")}>
                        <h2>Open Inventory</h2>
                        <p>
                            An open source Inventory system made for
                            everyone, who want to organize his storage
                            with multiple user.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"golang"} />
                            <LanguageElement language={"angular"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/PaintShare")}>
                        <h2>PaintShare</h2>
                        <p>
                            A socialmedia platform to share self painted
                            pictures and other media for creators.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"rust"} />
                            <LanguageElement language={"react"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/CustomMidiController")}>
                        <h2>Custom MIDI Control</h2>
                        <p>
                            An C++ executable for the arduino, built
                            for a custom MIDI lighting desk
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"c++"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/MathOnWeb")}>
                        <h2>Math On Web</h2>
                        <p>
                            A webapp built to automate complex
                            math calculations aka. my homework ;)
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"svelte"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/ChocolateCSS")}>
                        <h2>ChocolateCSS</h2>
                        <p>
                            A SCSS library built for
                            faster development of dark themes
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"scss"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/sporty-leaderboards")}>
                        <h2>sporty leaderboards</h2>
                        <p>
                            An open source workout monitoring system I made of me and
                            my family, because we wanted to see our stats in comparison.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"react"} />
                            <LanguageElement language={"rust"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/SLF-Engine")}>
                        <h2>SLF-Engine</h2>
                        <p>
                            An open source "stadt-land-fluss" engine.
                            I built it for learning more about rust
                            and next.js
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"nextjs"} />
                            <LanguageElement language={"rust"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/ikea-name-generator")}>
                        <h2>IKEA name generator</h2>
                        <p>
                            This is a little fun project. It is a webapp, which generates
                            random ikea product names.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"react"} />
                        </div>
                    </div>


                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/commander")}>
                        <h2>Commander</h2>
                        <p>
                            A lightweight discordgo command handler with internal
                            help command and not found messages.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"golang"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/AnalAsia")}>
                        <h2>AnalAsia</h2>
                        <p>
                            An easy to use discord chat analytics bot.
                            You can analyse some basic stuff.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"golang"} />
                        </div>
                    </div>

                    <div className={style.projectCard} onClick={() => redirectToGithub("https://github.com/MathisBurger/shorty")}>
                        <h2>shorty</h2>
                        <p>
                            An not yet finished URL shortener
                            built to learn svelte and elixir
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"elixir"} />
                            <LanguageElement language={"svelte"} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

function redirectToGithub(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
