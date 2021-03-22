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

                    <div className={style.projectCard}>
                        <h2>IKEA name generator</h2>
                        <p>
                            This is a little fun project. It is a webapp, which generates
                            random ikea product names.
                        </p>
                        <div className={style.langRow}>
                            <LanguageElement language={"react"} />
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
