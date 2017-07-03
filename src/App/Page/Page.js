import React from 'react';
import Description from '../Description';
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
        {/*<div className={[styles.row, 'fixed'].join(' ')}>
          <Logo />
        </div>*/}
        <div className={[styles.row, 'fixed'].join(' ')}>
          <Navigation />
        </div>
      </div>
      <div className={styles.rightSectionContainer}>
        <div className={styles.contentSection}>
          <div className={styles.row}>
            <Name text="Rodrigo Juarez" />
          </div>
          <div className={styles.row}>
            <Profession />
          </div>
          <div className={styles.row}>
            <Description />
          </div>
        </div>
      </div>
    </div>;
}

Page.propTypes = {};

export default Page;
