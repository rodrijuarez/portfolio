import React from 'react';
import styles from './Projects.css';
import Project from '../Project/Project';
import { CSSTransitionGroup } from 'react-transition-group';

class Projects extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { mounted: false, projects: [] };
    this.transitionForProject = this.transitionForProject.bind(this);
    this.getDelayForProjectTransition = this.getDelayForProjectTransition.bind(
      this
    );
  }

  /*

        {
          name: 'Plot.ly',
          styleName: 'plotlyProject',
          backgroundColor: '#447BDC',
          half: true,
          link: 'https://plot.ly/'
        },
        */

  componentDidMount() {
    this.setState({
      mounted: true,
      projects: [
        {
          name: 'Open records',
          styleName: 'openRecordsProject',
          backgroundColor: '#FF9800',
          link: 'http://seamlessgov.com/openrecord'
        },
        {
          name: 'Formfill',
          styleName: 'formfillProject',
          backgroundColor: '#188DF2',
          link: 'http://seamlessgov.com/formfill'
        },
        {
          name: 'Daysleft.to',
          styleName: 'daysleftProject',
          backgroundColor: '#F0524F',
          link: 'https://itunes.apple.com/us/app/daysleft.to/id1018601836?mt=8'
        }
      ]
    });
    document.title = 'Projects - Rodrigo Juarez';
  }

  render = () =>
    <div className={[styles.contentSection, styles.disableSelect].join(' ')}>
      <div className={styles.row}>
        <h2>PROJECTS</h2>
      </div>
      {this.state.projects.map((project, index) => {
        return (
          <Project
            key={project.name}
            marginLeft={project.marginLeft}
            half={project.half}
            backgroundColor={project.backgroundColor}
            name={project.name}
            link={project.link}
            index={index}
          />
        );
      })}
    </div>;

  transitionForProject(project) {
    let transitionStyles = {};
    transitionStyles[`enter`] = styles[`${project.styleName}Enter`];
    transitionStyles[`enterActive`] = styles[`${project.styleName}EnterActive`];
    transitionStyles[`leave`] = styles[`${project.styleName}Leave`];
    transitionStyles[`leaveActive`] = styles[`${project.styleName}LeaveActive`];
    transitionStyles[`appear`] = styles[`${project.styleName}Appear`];
    transitionStyles[`appearActive`] =
      styles[`${project.styleName}AppearActive`];
    return transitionStyles;
  }

  getDelayForProjectTransition(order) {
    return order * 1000;
  }
}

export default Projects;
