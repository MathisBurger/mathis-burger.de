import React, {useState} from 'react';
import style from '../styles/Header.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Header(props) {

    const [showDropdown, changeShowDropdown] = useState(false);

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
            <div className={style.dropdown} onClick={() => changeShowDropdown(!showDropdown)} />
            <div className={style.linkBox}>
                <Link href={"/"}>
                    <div className={`${style.navBox} ${props.active === "home" ? style.active: ''} ${showDropdown ? style.blockDisplay : style.noneDisplay}`}>
                        Home
                    </div>
                </Link>
                <Link href={"/projects"}>
                    <div className={`${style.navBox} ${props.active === "projects" ? style.active: ''} ${showDropdown ? style.blockDisplay : style.noneDisplay}`}>
                        Projects
                    </div>
                </Link>
            </div>
        </div>
    );
}

