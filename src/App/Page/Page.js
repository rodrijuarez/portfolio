import React from 'react';
import Navigation from '../Navigation';
import styles from './Page.css';
import Landing from '../Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Page extends React.Component {
  static propTypes = {};

  render = () =>
    <Router>
      <div className="pageContainer">
        <div className="leftSectionContainer">
          <div className={['row', 'fixed'].join(' ')}>
            <Navigation />
          </div>
        </div>
        <div className="rightSectionContainer">
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={Landing} />
          <Route path="/projects" component={Landing} />
          <Route path="/contact" component={Landing} />
        </div>
      </div>
    </Router>;
}

Page.propTypes = {};

export default Page;
