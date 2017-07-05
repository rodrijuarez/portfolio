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

  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  render = () =>
    <Router>
      <div className={styles.pageContainer}>
        <div className={styles.leftSectionContainer}>
          <div className={[styles.row, styles.fixed].join(' ')}>
            <Navigation
              openMenuChanged={this.openMenuChanged.bind(this)}
              isMenuOpen={this.state.isMenuOpen}
            />
          </div>
        </div>
        <div
          className={[
            styles.rightSectionContainer,
            this.state.isMenuOpen ? styles.blur : ''
          ].join(' ')}
        >
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>;

  openMenuChanged(state) {
    this.setState(() => {
      return { isMenuOpen: state.isOpen };
    });
  }
}

Page.propTypes = {};

export default Page;
