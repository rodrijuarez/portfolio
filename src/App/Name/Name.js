import React from 'react';
import styles from './Name.css';

class Name extends React.Component {
  static propTypes = {};
  render = () => {
    return (
      <div className={styles.name}>
        <h1 className={[styles.firstName, styles.disableSelect].join(' ')}>
          RODRIGO
        </h1>
        <h1 className={[styles.lastName, styles.disableSelect].join(' ')}>
          JUAREZ
        </h1>
      </div>
    );
  };
}

export default Name;
