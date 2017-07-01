import React from 'react';
import styles from './Logo.css';

const Logo = () =>
  <div className={styles.logo}>
    <img src={require('./logo.svg')} />
  </div>;

Logo.propTypes = {};

export default Logo;
