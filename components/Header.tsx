import React, { CSSProperties, useState } from 'react'
import style from '../styles/Header.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
  /**
   * The active route in the header
   */
  active: string
}

interface HeaderElement {
  /**
   * The name of the route
   */
  name: string
  /**
   * The label of the element
   */
  label: string
  /**
   * The route of the element
   */
  link: string
}

/**
 * The Header of page.
 */
const Header = ({ active }: HeaderProps) => {
  const [dropdownShow, setDropdownShow] = useState<CSSProperties>({
    display: 'block',
  })

  const setDropdownOpposite = (changer, state) => {
    if (state.display === 'block') {
      changer({ display: 'none' })
    } else {
      changer({ display: 'block' })
    }
  }

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
  ]

  return (
    <div className={style.container}>
      <div className={style.imgBox}>
        <img src="/logo.jpg" alt="Logo" width={50} height={50} />
      </div>
      <FontAwesomeIcon
        className={style.dropdown}
        onClick={() => setDropdownOpposite(setDropdownShow, dropdownShow)}
        icon={faBars}
      />
      <div className={style.linkBox}>
        {listElements.map((element) => (
          <Link href={element.link}>
            <div
              className={`${style.navBox} ${
                active === element.name ? style.active : ''
              }`}
              style={dropdownShow}
            >
              {element.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
