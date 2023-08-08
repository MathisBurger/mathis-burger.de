import React, { PropsWithChildren } from 'react';
import styles from '../styles/Wrapper.module.scss';

/**
 * Wraps the children into a div for handing the responsive
 * footer content.
 *
 * @param children The children that are rendered inside
 * @constructor
 */
const Wrapper: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
