import React, {useEffect, useState} from 'react';
import style from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
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
      link: '/blog',
    },
  ];

  return (
    <div className={style.container}>
      <FontAwesomeIcon
        className={style.dropdown}
        onClick={() => setNavOpen(!navOpen)}
        icon={faBars}
      />
      <div
        className={`${style.linkBox} ${navOpen ? `${style.openDropdown}` : ''}`}
      >
        {listElements.map((element) => (
          <div
            className={`${style.navBox} ${
              active === element.name ? style.active : ''
            }`}
            key={element.link}
            style={{display: navOpen ? 'block' : 'none'}}
            onClick={() => {
              if (document.body.clientWidth <= 680) {
                setNavOpen(false);
              }
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
