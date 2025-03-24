import React from 'react';

import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

/**
 * The footer component that displays as relevant footer
 * information
 *
 * @constructor
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>©2024 Mathis Burger</p>
      <div className={styles.extraLinks}>
        <Link href="/impressum" style={{ textDecoration: 'none' }}>
          <p>Impressum</p>
        </Link>
        <Link href="/privacy" style={{ textDecoration: 'none' }}>
          <p>Datenschutz</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
