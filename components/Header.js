import React, {useState} from 'react';
import style from '../styles/Header.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


export default function Header(props) {

    const [dropdownShow, setDropdownShow] = useState({display: 'block'});


    return (
        <div className={style.container}>
            <div className={style.imgBox}>
                <img
                    src="/logo.jpg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </div>
            <FontAwesomeIcon className={style.dropdown} onClick={() => setDropdownOpposite(setDropdownShow, dropdownShow)}  icon={faBars}/>
            <div className={style.linkBox}>
                <Link href={"/"}>
                    <div
                        className={`${style.navBox} ${props.active === "home" ? style.active: ''}`}
                        style={dropdownShow}
                    >
                        Home
                    </div>
                </Link>
                <Link href={"/projects"}>
                    <div className={`${style.navBox} ${props.active === "projects" ? style.active: ''}`}
                         style={dropdownShow}
                    >
                        Projects
                    </div>
                </Link>
            </div>
        </div>
    );
}

function setDropdownOpposite(changer, state) {
    if (state.display === 'block') {
        changer({display: 'none'});
    } else {
        changer({display: 'block'});
    }
}

