import React from 'react';
import Navigation from '../Navigation';
import styles from './Page.css';
import About from '../About';
import Contact from '../Contact';
import Landing from '../Landing';
import Projects from '../Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Page extends React.Component {
  static propTypes = {};

  render = () =>
    <Router>
      <div className={styles.pageContainer}>
        <div className={styles.leftSectionContainer}>
          <div className={[styles.row, styles.fixed].join(' ')}>
            <Navigation />
          </div>
        </div>
        <div className={styles.rightSectionContainer}>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>;
}

Page.propTypes = {};

export default Page;
