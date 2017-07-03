import React from 'react';
import styles from './NavigationItem.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavigationItem extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
  };

  render = () =>
    <li className={styles.navigationItem}>
      <NavLink
        to={this.props.link}
        activeClassName={styles.active}
        exact={true}
      >
        {this.props.text.toUpperCase()}
      </NavLink>
    </li>;
}

export default NavigationItem;
