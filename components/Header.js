import React from 'react';
import style from '../styles/Header.module.css';
import Image from "next/image";

export default function Header(props) {
    return (
        <div className={style.container}>
            <div className={style.imgBox}>
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </div>
            <div className={`${style.navBox} ${props.active === "home" ? style.active: ''}`}>
                Home
            </div>
            <div className={`${style.navBox} ${props.active === "projects" ? style.active: ''}`}>
                Projects
            </div>
        </div>
    );
}
