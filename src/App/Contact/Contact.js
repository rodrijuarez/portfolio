import React from 'react';
import styles from './Contact.css';

class Contact extends React.Component {
  static propTypes = {};
  render = () =>
    <div className={[styles.contentSection, styles.disableSelect].join(' ')}>
      <h2>CONTACT</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div
          className={[styles.row, styles.inputWrapper, styles.half].join(' ')}
        >
          <label className={styles.label}>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div
          className={[
            styles.row,
            styles.inputWrapper,
            styles.half,
            styles.marginLeft
          ].join(' ')}
        >
          <label className={styles.label}>E-mail</label>
          <input type="text" placeholder="E-mail" />
        </div>
        <div className={[styles.row, styles.textareaWrapper].join(' ')}>
          <div className={[styles.row, styles.labelWrapper].join(' ')}>
            <label className={styles.label}>Message</label>
          </div>
          <textarea placeholder="Message" rows="7" />
          <div className={[styles.linksWrapper, styles.marginLeft].join(' ')}>
            <div className={[styles.linkWrapper]}>
              <img
                src={require('../../assets/icons/github.svg')}
                className={styles.icon}
              />
              <label className={styles.link}>github.com/rodrijuarez</label>
            </div>
            <div className={[styles.linkWrapper]}>
              <img
                src={require('../../assets/icons/twitter.svg')}
                className={styles.icon}
              />
              <label className={styles.link}>twitter.com/_rodrijuarez</label>
            </div>
            <div className={[styles.linkWrapper]}>
              <img
                src={require('../../assets/icons/mail.svg')}
                className={styles.icon}
              />
              <label className={styles.link}>
                rodrigo.juarez.inf@gmail.com
              </label>
            </div>
          </div>
        </div>
        <button
          className={[styles.row, styles.half, styles.buttonWrapper].join(' ')}
        >
          Send
        </button>
      </form>
    </div>;

  componentDidMount() {
    document.title = 'Contact - Rodrigo Juarez';
  }
}

export default Contact;
