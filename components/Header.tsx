import React, { useEffect, useState } from 'react';
import style from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

  const [navOpen, setNavOpen] = useState<boolean>(true);

  useEffect(() => {
    if (document.body.clientWidth < 680) {
      setNavOpen(false);
    }
  }, []);

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
      name: 'cv',
      label: 'CV',
      link: '/cv',
    },
    {
      name: 'socials',
      label: 'Socials',
      link: '/socials',
    },
    {
      name: 'blog',
      label: 'Blog',
      link: 'https://blog.mathis-burger.de',
    },
  ];

  return (
    <header className={style.header}>
      <div className={style.logo}>Mathis Burger</div>
      <div className={style.menuToggle}>
        <FontAwesomeIcon onClick={() => setNavOpen(!navOpen)} icon={faBars} />
      </div>
      <nav id="nav" className={`${style.nav} ${navOpen ? style.open : ''}`}>
        {listElements.map((el) => (
          <Link href={el.link} key={el.name}>
            {el.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
