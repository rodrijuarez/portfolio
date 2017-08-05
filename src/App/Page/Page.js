import React from 'react';
import Navigation from '../Navigation';
import styles from './Page.css';
import About from '../About';
import Contact from '../Contact';
import Landing from '../Landing';
import Projects from '../Projects';
import Scroll from 'react-scroll';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-102581168-1');

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
            <Navigation openMenuChanged={this.openMenuChanged.bind(this)} />
          </div>
        </div>
        <div
          className={[
            styles.rightSectionContainer,
            this.state.isMenuOpen ? styles.blur : ''
          ].join(' ')}
        >
          <Route component={ScrollToTop} />
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

const FireTracking = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  ReactGA.event({
    category: 'Navigation',
    action: 'Clicked Link'
  });
};

const ScrollToTop = () => {
  FireTracking();
  Scroll.animateScroll.scrollTo(0);
  return null;
};

Page.propTypes = {};

export default Page;
