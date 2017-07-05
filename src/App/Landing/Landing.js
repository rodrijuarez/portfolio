import React from 'react';
import styles from './Landing.css';
import Description from '../Description';
import Name from '../Name';
import Profession from '../Profession';

class Landing extends React.Component {
  static propTypes = {};

  componentDidMount() {
    document.title = 'Home - Rodrigo Juarez';
  }

  render = () =>
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
    </div>;
}

export default Landing;
