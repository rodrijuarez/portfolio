import React from 'react';
import styles from './NavigationItem.css';
import PropTypes from 'prop-types';

class NavigationItem extends React.Component {
  static propTypes = {
    text: PropTypes.string
  };

  render = () =>
    <li className={styles.navigationItem}>
      <a href="/">
        {this.props.text.toUpperCase()}
      </a>
    </li>;
}

export default NavigationItem;
