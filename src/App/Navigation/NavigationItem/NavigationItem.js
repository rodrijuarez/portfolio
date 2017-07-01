import React from 'react';
import cssModule from 'react-css-modules';
import styles from './NavigationItem.css';
import PropTypes from 'prop-types';

class NavigationItem extends React.Component {
  static propTypes = {
    text: PropTypes.string
  };

  render = () =>
    <div>
      <p>
        {this.props.text}
      </p>
    </div>;
}

export default cssModule(NavigationItem, styles);
