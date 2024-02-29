import React, {CSSProperties, useEffect, useState} from 'react';
import style from '../styles/Header.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useRouter} from "next/router";

interface HeaderProps {
  /**
   * The active route in the header
   */
  active: string;
}

interface HeaderElement {
  /**
   * The name of the route
   */
  name: string;
  /**
   * The label of the element
   */
  label: string;
  /**
   * The route of the element
   */
  link: string;
}

/**
 * The Header of page.
 */
const Header = ({ active }: HeaderProps) => {

  const router = useRouter();

  const [dropdownShow, setDropdownShow] = useState<CSSProperties>({
    display: 'block',
  });

  useEffect(() => {
    const ls = localStorage.getItem('header-dropdown');
    if (ls !== null && ls !== '') {
      setDropdownShow(JSON.parse(ls));
    }
  }, []);

  const setDropdownOpposite = (changer, state) => {
    if (document.body.clientWidth < 680) {
      if (state.display === 'block') {
        changer({ display: 'none' });
        localStorage.setItem('header-dropdown', JSON.stringify({ display: 'none' }));
      } else {
        changer({ display: 'block' });
        localStorage.setItem('header-dropdown', JSON.stringify({ display: 'block' }));
      }
    }
  };

  const listElements: HeaderElement[] = [
    {
      name: 'home',
      label: 'Home',
      link: '/',
    },
    {
      name: 'projects',
      label: 'Projects',
      link: '/projects',
    },
    {
      name: 'socials',
      label: 'Socials',
      link: '/socials',
    },
    {
      name: 'blog',
      label: 'Blog',
      link: '/blog',
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.imgBox}>
        <img src="/me4.jpeg" alt="Logo" width={50} height={50} />
      </div>
      <FontAwesomeIcon
        className={style.dropdown}
        onClick={() => setDropdownOpposite(setDropdownShow, dropdownShow)}
        icon={faBars}
      />
      <div className={`${style.linkBox} ${dropdownShow.display === 'block' ? style.openDropdown : ''}`}>
        {listElements.map((element) => (
            <div
              className={`${style.navBox} ${
                active === element.name ? style.active : ''
              }`}
              key={element.link}
              style={dropdownShow}
              onClick={() => {
                setDropdownOpposite(setDropdownShow, dropdownShow);
                router.push(element.link);
              }}
            >
              {element.label}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
