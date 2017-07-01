import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import styles from './Page.css';

class Page extends React.Component {
  static propTypes = {};

  render = () =>
    <div className={styles.pageContainer}>
      <Logo />
      <Navigation />
    </div>;
}

Page.propTypes = {};

export default Page;
