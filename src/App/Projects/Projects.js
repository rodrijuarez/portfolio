import React from 'react';
import styles from './Projects.css';
import {
  inlineCenter,
  center
} from '../../assets/css/utilities.css';

class Projects extends React.Component {
  projects = [
    {
      name: 'Open records',
      backgroundColor: '#FF9800'
    },
    {
      name: 'Plot.ly',
      backgroundColor: '#447BDC',
      half: true
    },
    {
      name: 'Formfill',
      backgroundColor: '#188DF2',
      half: true,
      marginLeft: true
    },
    {
      name: 'Daysleft.to',
      backgroundColor: '#F0524F'
    }
  ];

  static propTypes = {};
  render = () =>
    <div className={[styles.contentSection, styles.disableSelect].join(' ')}>
      <div className={styles.row}>
        <h2>PROJECTS</h2>
        {this.projects.map(project => {
          return this.getProjectElement(project);
        })}
      </div>
    </div>;

  getProjectElement(project) {
    return (
      <div
        className={[
          styles.project,
          project.half ? inlineCenter : center,
          project.half ? styles.half : '',
          project.marginLeft ? styles.marginLeft : '',
          styles.disableSelect
        ].join(' ')}
        style={{ backgroundColor: project.backgroundColor }}
      >
        <h1>
          {project.name}
        </h1>
      </div>
    );
  }
}

export default Projects;
