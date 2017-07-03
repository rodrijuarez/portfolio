import React from 'react';
import styles from './Profession.css';

class Profession extends React.Component {
  static propTypes = {};
  render = () =>
    <div className={[styles.profession, 'disable-select'].join(' ')}>
      <h3>- SOFTWARE DEVELOPER</h3>
    </div>;
}

export default Profession;
