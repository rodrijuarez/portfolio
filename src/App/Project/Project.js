import React from 'react';
import styles from './Project.css';
import EasyTransition from 'react-easy-transition';

class Project extends React.Component {
  static propTypes = {};

  getTimeoutInSecondsForProject() {
    console.log('this.props, ', this.props);
    return (this.props.index + 1) * 500 / 1000;
  }

  render = () =>
    <EasyTransition
      className={[
        styles.project,
        this.props.half ? styles.half : '',
        this.props.half ? styles.inlineCenter : styles.center,
        this.props.marginLeft ? styles.marginLeft : '',
        styles.disableSelect
      ].join(' ')}
      component="div"
      path={'/projects'}
      initialStyle={{ opacity: 0 }}
      transition={`opacity ${this.getTimeoutInSecondsForProject()}s ease-in, background-color 1s ease`}
      finalStyle={{ opacity: 1, backgroundColor: this.props.backgroundColor }}
    >
      <h1>
        {this.props.name}
      </h1>
    </EasyTransition>;
}

export default Project;
