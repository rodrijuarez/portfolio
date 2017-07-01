import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Page.css';
import Navigation from '../Navigation';
import Logo from '../Logo';

class Page extends React.Component {
  static propTypes = {};

  render = () =>
    <div>
      {/*<Logo />
      <Navigation />*/}
    </div>;
}

Page.propTypes = {};

export default cssModule(Page, styles);
