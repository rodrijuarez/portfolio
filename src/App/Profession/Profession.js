import React from 'react';
import styles from './Profession.css';

class Profession extends React.Component {
  static propTypes = {};
  render = () =>
    <div className={[styles.profession, styles.disableSelect].join(' ')}>
      <h4>FRONT-END DEVELOPER</h4>
    </div>;
}

export default Profession;
