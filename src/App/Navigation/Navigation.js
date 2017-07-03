import React from 'react';
import styles from './Navigation.css';
import NavigationItem from './NavigationItem';

class Navigation extends React.Component {
  static propTypes = {};

  render = () =>
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavigationItem text="Home" link="/" />
        <NavigationItem text="About" link="/about" />
        <NavigationItem text="Projects" link="/projects" />
        <NavigationItem text="Contact" link="/contact" />
      </ul>
    </div>;
}

export default Navigation;
