import React from "react";
import style from "../styles/LangColors.module.css";

export default function LanguageElement(props) {

    return (
        <div className={style.row}>
            {switchData(props.language)}
        </div>
    );
}

function switchData(lang) {
    switch (lang) {
        case "golang":
            return <><div className={style.golangCircle} /><p>Go</p></>;
        case "angular":
            return <><div className={style.angularCircle} /><p>Angular</p></>;
        case "nextjs":
            return <><div className={style.nextjsCircle} /><p>NextJS</p></>;
        case "rust":
            return <><div className={style.rustCircle} /><p>Rust</p></>;
        case "react":
            return <><div className={style.reactCircle} /><p>React</p></>;
        case "c++":
            return <><div className={style.cppCircle} /><p>C++</p></>;
        case "elixir":
            return <><div className={style.elixirCircle} /><p>Elixir</p></>;
        case "svelte":
            return <><div className={style.svelteCircle} /><p>Svelte</p></>;
        case "scss":
            return <><div className={style.scssCircle} /><p>SCSS</p></>;
    }
}
