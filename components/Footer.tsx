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
      <p>©2023 Mathis Burger</p>
      <div className={styles.extraLinks}>
        <Link href="/impressum">
          <p>Impressum</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
