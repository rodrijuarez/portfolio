import React from 'react';
import styles from './Landing.css';
import Description from '../Description';
import Name from '../Name';
import Profession from '../Profession';

class Landing extends React.Component {
  static propTypes = {};
  render = () =>
    <div className="contentSection">
      <div className="row">
        <Name text="Rodrigo Juarez" />
      </div>
      <div className="row">
        <Profession />
      </div>
      <div className="row">
        <Description />
      </div>
    </div>;
}

export default Landing;
