import React from 'react';
import styles from './Landing.css';
import Description from '../Description';
import Name from '../Name';
import Profession from '../Profession';
import { CSSTransitionGroup } from 'react-transition-group';

class Landing extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
    document.title = 'Home - Rodrigo Juarez';
  }

  getNameSection() {
    if (!this.state.mounted) return;
    return (
      <div>
        <Name text="Rodrigo Juarez" />
      </div>
    );
  }

  getProfessionSection() {
    if (!this.state.mounted) return;
    return (
      <div>
        <Profession />
      </div>
    );
  }

  getDescriptionSection() {
    if (!this.state.mounted) return;
    return (
      <div>
        <Description />
      </div>
    );
  }

  render = () =>
    <div className={styles.contentSection}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionName={{
          enter: styles.nameSectionEnter,
          enterActive: styles.nameSectionEnterActive,
          leave: styles.nameSectionLeave,
          leaveActive: styles.nameSectionLeaveActive,
          appear: styles.nameSectionAppear,
          appearActive: styles.nameSectionAppearActive
        }}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
        component="div"
        className={styles.row}
      >
        {this.getNameSection()}
      </CSSTransitionGroup>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionName={{
          enter: styles.professionSectionEnter,
          enterActive: styles.professionSectionEnterActive,
          leave: styles.professionSectionLeave,
          leaveActive: styles.professionSectionLeaveActive,
          appear: styles.professionSectionAppear,
          appearActive: styles.professionSectionAppearActive
        }}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
        component="div"
        className={styles.row}
      >
        {this.getProfessionSection()}
      </CSSTransitionGroup>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionName={{
          enter: styles.descriptionSectionEnter,
          enterActive: styles.descriptionSectionEnterActive,
          leave: styles.descriptionSectionLeave,
          leaveActive: styles.descriptionSectionLeaveActive,
          appear: styles.descriptionSectionAppear,
          appearActive: styles.descriptionSectionAppearActive
        }}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
        component="div"
        className={styles.row}
      >
        {this.getDescriptionSection()}
      </CSSTransitionGroup>
    </div>;
}

export default Landing;
