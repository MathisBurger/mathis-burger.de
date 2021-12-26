import React, {CSSProperties, useState} from 'react';
import style from '../styles/Header.module.css';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    /**
     * The active route in the header
     */
    active: string;
}

/**
 * The Header of page.
 */
const Header = ({active}: HeaderProps) =>  {

    const [dropdownShow, setDropdownShow] = useState<CSSProperties>({display: 'block'});

    const setDropdownOpposite = (changer, state) => {
        if (state.display === 'block') {
            changer({display: 'none'});
        } else {
            changer({display: 'block'});
        }
    }


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
            <FontAwesomeIcon className={style.dropdown} onClick={() => setDropdownOpposite(setDropdownShow, dropdownShow)}  icon={faBars} />
            <div className={style.linkBox}>
                <Link href={"/"}>
                    <div
                        className={`${style.navBox} ${active === "home" ? style.active: ''}`}
                        style={dropdownShow}
                    >
                        Home
                    </div>
                </Link>
                <Link href={"/projects"}>
                    <div className={`${style.navBox} ${active === "projects" ? style.active: ''}`}
                         style={dropdownShow}
                    >
                        Projects
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;

