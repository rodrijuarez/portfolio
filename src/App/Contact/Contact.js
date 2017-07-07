import React from 'react';
import styles from './Contact.css';
import { CSSTransitionGroup } from 'react-transition-group';

// <div className={[styles.linksWrapper, styles.marginLeft].join(' ')}>
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
      <form onSubmit={e => e.preventDefault()}>
        <div
          className={[styles.row, styles.half, styles.textareaWrapper].join(
            ' '
          )}
        >
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
              <img
                src={require('../../assets/icons/github.svg')}
                className={styles.icon}
              />
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
              <img
                src={require('../../assets/icons/twitter.svg')}
                className={styles.icon}
              />
              <label className={styles.link}>twitter.com/_rodrijuarez</label>
            </CSSTransitionGroup>
          </a>
          <a href="mailto:rodrigo.juarez.inf@gmail.com">
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
              <img
                src={require('../../assets/icons/mail.svg')}
                className={styles.icon}
              />
              <label className={styles.link}>
                rodrigo.juarez.inf@gmail.com
              </label>
            </CSSTransitionGroup>
          </a>
        </div>
      </form>
    </div>;

  componentDidMount() {
    document.title = 'Contact - Rodrigo Juarez';
  }
}

export default Contact;
