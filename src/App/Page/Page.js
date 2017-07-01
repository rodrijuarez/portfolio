import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import Name from '../Name';
import Profession from '../Profession';
import styles from './Page.css';

class Page extends React.Component {
  static propTypes = {};

  render = () =>
    <div className={styles.pageContainer}>
      <div className={styles.leftSectionContainer}>
        <div className={styles.row}>
          <Logo />
        </div>
        <div className={styles.row}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSectionContainer}>
        <Name text="Rodrigo Juarez" />
        <Profession />
      </div>
    </div>;
}

Page.propTypes = {};

export default Page;
