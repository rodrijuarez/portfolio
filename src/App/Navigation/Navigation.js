import React from 'react';
import styles from './Navigation.css';
import NavigationItem from './NavigationItem';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  static propTypes = {
    openMenuChanged: PropTypes.func,
    isMenuOpen: PropTypes.bool
  };

  render = () =>
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavigationItem text="Home" link="/" />
        <NavigationItem text="About" link="/about" />
        <NavigationItem text="Projects" link="/projects" />
        <NavigationItem text="Contact" link="/contact" />
      </ul>
      <Menu className={styles.hamburguerMenu} onStateChange={this.props.openMenuChanged} width={'230px'} isOpen={this.props.isMenuOpen}>
        <NavigationItem text="Home" link="/"/>
        <NavigationItem text="About" link="/about" />
        <NavigationItem text="Projects" link="/projects" />
        <NavigationItem text="Contact" link="/contact" />
      </Menu>
    </div>;
}

export default Navigation;
