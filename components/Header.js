import React from 'react';
import style from '../styles/Header.module.css';
import Image from "next/image";
import Link from "next/link";

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
            <Link href={"/"}>
                <div className={`${style.navBox} ${props.active === "home" ? style.active: ''}`}>
                    Home
                </div>
            </Link>
            <Link href={"/projects"}>
                <div className={`${style.navBox} ${props.active === "projects" ? style.active: ''}`}>
                    Projects
                </div>
            </Link>
        </div>
    );
}
