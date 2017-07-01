import React from 'react';
import styles from './Name.css';

class Name extends React.Component {
  static propTypes = {};
  render = () => {
    return (
      <div className={styles.name}>
        <p className={[styles.firstName, 'disable-select'].join(' ')}>
          RODRIGO
        </p>
        <p className={[styles.lastName, 'disable-select'].join(' ')}>JUAREZ</p>
      </div>
    );
  };
}

export default Name;
