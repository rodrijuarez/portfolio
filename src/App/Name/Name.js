import React from 'react';
import styles from './Name.css';

class Name extends React.Component {
  static propTypes = {};
  render = () => {
    return (
      <div className={styles.name}>
        <h1 className={[styles.firstName, 'disable-select'].join(' ')}>
          RODRIGO
        </h1>
        <h1 className={[styles.lastName, 'disable-select'].join(' ')}>
          JUAREZ
        </h1>
      </div>
    );
  };
}

export default Name;
