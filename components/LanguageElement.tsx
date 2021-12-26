import React from "react";
import style from "../styles/LangColors.module.css";

export enum Language {
    golang,
    angular,
    nextjs,
    rust,
    react,
    cpp,
    elixir,
    svelte,
    scss,
    php,
    mui,
}

interface LanguageElementProps {
    /**
     * The language that should be displayed
     */
    language: Language;
}

/**
 * A basic container for displaying different
 * software languages and frameworks.
 */
const  LanguageElement = ({language}: LanguageElementProps) =>  {

    const switchData = (lang: Language) =>  {
        switch (lang) {
            case Language.golang:
                return <><div className={style.golangCircle} /><p>Go</p></>;
            case Language.angular:
                return <><div className={style.angularCircle} /><p>Angular</p></>;
            case Language.nextjs:
                return <><div className={style.nextjsCircle} /><p>NextJS</p></>;
            case Language.rust:
                return <><div className={style.rustCircle} /><p>Rust</p></>;
            case Language.react:
                return <><div className={style.reactCircle} /><p>React</p></>;
            case Language.cpp:
                return <><div className={style.cppCircle} /><p>C++</p></>;
            case Language.elixir:
                return <><div className={style.elixirCircle} /><p>Elixir</p></>;
            case Language.svelte:
                return <><div className={style.svelteCircle} /><p>Svelte</p></>;
            case Language.scss:
                return <><div className={style.scssCircle} /><p>SCSS</p></>;
            case Language.php:
                return <><div className={style.phpCircle} /><p>PHP</p></>;
            case Language.mui:
                return <><div className={style.muiCircle} /><p>Material UI</p></>;
        }
    }

    return (
        <div className={style.row}>
            {switchData(language)}
        </div>
    );
};

export default LanguageElement;
