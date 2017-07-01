import React from 'react';
// import styles from './NavigationItem.css';
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

export default NavigationItem;
