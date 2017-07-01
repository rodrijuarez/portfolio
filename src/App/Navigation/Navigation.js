import React from 'react';
import styles from './Navigation.css';
import NavigationItem from './NavigationItem';

class Navigation extends React.Component {
  static propTypes = {};

  render = () =>
    <div className={styles.navigation}>
      <NavigationItem text="Home" />
    </div>;
}

export default Navigation;
