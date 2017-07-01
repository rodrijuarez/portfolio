import React from 'react';
import styles from './Navigation.css';
import NavigationItem from './NavigationItem';

class Navigation extends React.Component {
  static propTypes = {};

  render = () =>
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavigationItem text="Home" />
        <NavigationItem text="About" />
        <NavigationItem text="Projects" />
        <NavigationItem text="Contact" />
      </ul>
    </div>;
}

export default Navigation;
