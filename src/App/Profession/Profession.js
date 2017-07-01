import React from 'react';
import styles from './Profession.css';

class Profession extends React.Component {
  static propTypes = {};
  render = () =>
    <div className={[styles.profession, 'disable-select'].join(' ')}>
      - SOFTWARE DEVELOPER
    </div>;
}

export default Profession;
