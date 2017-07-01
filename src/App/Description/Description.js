import React from 'react';
import styles from './Description.css';

class Description extends React.Component {
  static propTypes = {};
  render = () =>
    <p className={[styles.description, 'disable-select'].join(' ')}>
      {'  '}Passionate software developer with a focus on{' '}
      <span className={styles.bold}>web development</span>, <span className={styles.bold}>design </span>
      and <span className={styles.bold}>UX</span>.
    </p>;
}

export default Description;
