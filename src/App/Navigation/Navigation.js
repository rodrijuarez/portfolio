import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Navigation.css';
import NavigationItem from './NavigationItem';

class Navigation extends React.Component {
  static propTypes = {};

  render = () =>
    <div className="navigation">
      <NavigationItem text="Home" />
    </div>;
}

export default cssModule(Navigation, styles);
