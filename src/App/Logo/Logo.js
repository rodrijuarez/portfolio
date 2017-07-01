import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Logo.css';

const Logo = () =>
  <div className="logo">
    <img src={require('./logo.svg')} />
  </div>;

Logo.propTypes = {};

export default cssModule(Logo, styles);
