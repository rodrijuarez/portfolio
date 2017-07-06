import React from 'react';
import styles from './About.css';
import { CSSTransitionGroup } from 'react-transition-group';

class About extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
    document.title = 'About - Rodrigo Juarez';
  }

  getMainSection() {
    if (this.state.mounted) {
      return (
        <div>
          <h2>RODRIGO JUAREZ</h2>
          <p className={styles.justify}>
            I was born and raised in{' '}
            <span className={styles.bold}>Buenos Aires, Argentina</span>. In a
            very short period of time I learned the basics and got involved in
            the tech industry pretty quickly.   At the beginning of my career I
            spent most of my time working for software factories, where I’ve met
            a lot of great people and learned a lot from them. I was also
            fortunate enough to work on{' '}
            <span className={styles.bold}>Bons</span>, a digital agency with a
            great focus on UX and UI, a place where I’ve also discovered the
            startup world.   At some point I realised that I wanted to
            experience that world at first hand, and that’s where I joined{' '}
            <span className={styles.bold}>Airfy</span>, the company that I work
             for currently.
          </p>
        </div>
      );
    }
  }

  getCareerSection() {
    if (this.state.mounted) {
      return (
        <div>
          <h3>Career</h3>
          <p className={styles.justify}>
            Nowadays I’m focusing on my career as a{' '}
            <span className={styles.bold}>front end developer</span>, anyways, I
            must also tell you that in the past I’ve also worked as a{' '}
            <span className={styles.bold}>full stack developer</span>, so I can
            fulfill any role.
          </p>
        </div>
      );
    }
  }

  getTechnologiesSection() {
    if (this.state.mounted) {
      return (
        <div>
          <h3>Technologies</h3>
          <p className={styles.justify}>
            In the latest years I’ve been focused on building applications
            around
            <span className={styles.bold}> Angular</span> and{' '}
            <span className={styles.bold}>Javascript</span>, but one of my main
            goals is to get more involved in{' '}
            <span className={styles.bold}>React</span> and its community, where
            I’ve only developed some small projects (i.e{' '}
            <span className={styles.bold}>this site!</span>).
          </p>
        </div>
      );
    }
  }

  getDesignSection() {
    if (this.state.mounted) {
      return (
        <div>
          <h3>Design</h3>
          <p className={styles.justify}>
            Lately I’ve been also getting more involved in learning{' '}
            <span className={styles.bold}>design</span>; reading books,
            tutorials, practicing, involving with the communities and learning
            from them.
          </p>
        </div>
      );
    }
  }

  getTravelSection() {
    if (this.state.mounted) {
      return (
        <div>
          <h3>Travel and relocation</h3>
          <p className={styles.justify}>
            I’m also planning to move to{' '}
            <span className={styles.bold}>Europe</span>, the countries that I’m
            mostly interested in are <span className={styles.bold}>
              France
            </span>{' '}
            (currently learning french) and{' '}
            <span className={styles.bold}>Germany</span>. So if you got any
            offer involving relocation to those countries, I’m all ears!
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.contentSection}>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionName={{
            enter: styles.mainSectionEnter,
            enterActive: styles.mainSectionEnterActive,
            leave: styles.mainSectionLeave,
            leaveActive: styles.mainSectionLeaveActive,
            appear: styles.mainSectionAppear,
            appearActive: styles.mainSectionAppearActive
          }}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
          component="div"
          className={styles.row}
        >
          {this.getMainSection()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionName={{
            enter: styles.careerSectionEnter,
            enterActive: styles.careerSectionEnterActive,
            leave: styles.careerSectionLeave,
            leaveActive: styles.careerSectionLeaveActive,
            appear: styles.careerSectionAppear,
            appearActive: styles.careerSectionAppearActive
          }}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={500}
          component="div"
          className={styles.row}
        >
          {this.getCareerSection()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionName={{
            enter: styles.technologiesSectionEnter,
            enterActive: styles.technologiesSectionEnterActive,
            leave: styles.technologiesSectionLeave,
            leaveActive: styles.technologiesSectionLeaveActive,
            appear: styles.technologiesSectionAppear,
            appearActive: styles.technologiesSectionAppearActive
          }}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={500}
          component="div"
          className={styles.row}
        >
          {this.getTechnologiesSection()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={2500}
          transitionName={{
            enter: styles.designSectionEnter,
            enterActive: styles.designSectionEnterActive,
            leave: styles.designSectionLeave,
            leaveActive: styles.designSectionLeaveActive,
            appear: styles.designSectionAppear,
            appearActive: styles.designSectionAppearActive
          }}
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={500}
          component="div"
          className={styles.row}
        >
          {this.getDesignSection()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionName={{
            enter: styles.travelSectionEnter,
            enterActive: styles.travelSectionEnterActive,
            leave: styles.travelSectionLeave,
            leaveActive: styles.travelSectionLeaveActive,
            appear: styles.travelSectionAppear,
            appearActive: styles.travelSectionAppearActive
          }}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={500}
          component="div"
          className={styles.row}
        >
          {this.getTravelSection()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default About;
