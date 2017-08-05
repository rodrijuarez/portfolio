import { CSSTransitionGroup } from 'react-transition-group';
import React from 'react';
import styles from './Contact.css';

class Contact extends React.Component {
  static propTypes = {};
  render = () =>
    <div className={[styles.contentSection, styles.disableSelect].join(' ')}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName={{
          enter: styles.contactTitleEnter,
          enterActive: styles.contactTitleEnterActive,
          leave: styles.contactTitleLeave,
          leaveActive: styles.contactTitleLeaveActive,
          appear: styles.contactTitleAppear,
          appearActive: styles.contactTitleAppearActive
        }}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        component="div"
        className={styles.row}
      >
        <h2>CONTACT</h2>
      </CSSTransitionGroup>
      <a href="https://github.com/rodrijuarez" target="_blank">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionName={{
            enter: styles.githubLinkEnter,
            enterActive: styles.githubLinkEnterActive,
            leave: styles.githubLinkLeave,
            leaveActive: styles.githubLinkLeaveActive,
            appear: styles.githubLinkAppear,
            appearActive: styles.githubLinkAppearActive
          }}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
          className={[styles.linkWrapper]}
          component="div"
        >
          <i className={['fa fa-github', styles.icon].join(' ')} aria-hidden="true" />
          <label className={styles.link}>github.com/rodrijuarez</label>
        </CSSTransitionGroup>
      </a>
      <a href="https://twitter.com/_rodrijuarez" target="_blank">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionName={{
            enter: styles.twitterLinkEnter,
            enterActive: styles.twitterLinkEnterActive,
            leave: styles.twitterLinkLeave,
            leaveActive: styles.twitterLinkLeaveActive,
            appear: styles.twitterLinkAppear,
            appearActive: styles.twitterLinkAppearActive
          }}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={500}
          className={[styles.linkWrapper]}
          component="div"
        >
          <i className={['fa fa-twitter', styles.icon].join(' ')} aria-hidden="true" />
          <label className={styles.link}>twitter.com/_rodrijuarez</label>
        </CSSTransitionGroup>
      </a>
      <a href="mailto:contact@rodrigojuarez.xyz">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionName={{
            enter: styles.mailLinkEnter,
            enterActive: styles.mailLinkEnterActive,
            leave: styles.mailLinkLeave,
            leaveActive: styles.mailLinkLeaveActive,
            appear: styles.mailLinkAppear,
            appearActive: styles.mailLinkAppearActive
          }}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={500}
          className={[styles.linkWrapper]}
          component="div"
        >
          <i className={['fa fa-envelope', styles.icon].join(' ')} aria-hidden="true" />
          <label className={styles.link}>contact@rodrigojuarez.xyz</label>
        </CSSTransitionGroup>
      </a>
      <a href="https://medium.com/@rodrijuarez" target="_blank">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={2500}
          transitionName={{
            enter: styles.mediumLinkEnter,
            enterActive: styles.mediumLinkEnterActive,
            leave: styles.mediumLinkLeave,
            leaveActive: styles.mediumLinkLeaveActive,
            appear: styles.mediumLinkAppear,
            appearActive: styles.mediumLinkAppearActive
          }}
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={500}
          className={[styles.linkWrapper]}
          component="div"
        >
          <i className={['fa fa-medium', styles.icon].join(' ')} aria-hidden="true" />
          <label className={styles.link}>@rodrijuarez</label>
        </CSSTransitionGroup>
      </a>
      <a href="https://medium.com/@rodrijuarez" target="_blank">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={2500}
          transitionName={{
            enter: styles.mediumLinkEnter,
            enterActive: styles.mediumLinkEnterActive,
            leave: styles.mediumLinkLeave,
            leaveActive: styles.mediumLinkLeaveActive,
            appear: styles.mediumLinkAppear,
            appearActive: styles.mediumLinkAppearActive
          }}
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={500}
          className={[styles.linkWrapper]}
          component="div"
        >
          <i className={['fa fa-file', styles.icon].join(' ')} aria-hidden="true" />
          <label className={styles.link}>resumé</label>
        </CSSTransitionGroup>
      </a>
    </div>;

  componentDidMount() {
    document.title = 'Contact - Rodrigo Juarez';
  }
}

export default Contact;
