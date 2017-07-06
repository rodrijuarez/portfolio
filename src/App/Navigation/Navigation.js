import React from 'react';
import styles from './Navigation.css';
import NavigationItem from './NavigationItem';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

class Navigation extends React.Component {
  static propTypes = {
    openMenuChanged: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = { isMenuOpen: false, mounted: false };
  }

  getHomeNavigationItem() {
    if (!this.state.mounted) return;
    return (
      <div>
        <NavigationItem text="Home" link="/" />
      </div>
    );
  }

  getAboutNavigationItem() {
    if (!this.state.mounted) return;
    return (
      <div>
        <NavigationItem text="About" link="/about" />
      </div>
    );
  }

  getProjectsNavigationItem() {
    if (!this.state.mounted) return;
    return (
      <div>
        <NavigationItem text="Projects" link="/projects" />
      </div>
    );
  }

  getContactNavigationItem() {
    if (!this.state.mounted) return;
    return (
      <div>
        <NavigationItem text="Contact" link="/contact" />
      </div>
    );
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  openMenuChanged(state) {
    this.setState({ isMenuOpen: state.isOpen });
    this.props.openMenuChanged(state);
  }

  render = () =>
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName={{
            enter: styles.homeNavigationItemEnter,
            enterActive: styles.homeNavigationItemEnterActive,
            leave: styles.homeNavigationItemLeave,
            leaveActive: styles.homeNavigationItemLeaveActive,
            appear: styles.homeNavigationItemAppear,
            appearActive: styles.homeNavigationItemAppearActive
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          component="div"
        >
          {this.getHomeNavigationItem()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionName={{
            enter: styles.aboutNavigationItemEnter,
            enterActive: styles.aboutNavigationItemEnterActive,
            leave: styles.aboutNavigationItemLeave,
            leaveActive: styles.aboutNavigationItemLeaveActive,
            appear: styles.aboutNavigationItemAppear,
            appearActive: styles.aboutNavigationItemAppearActive
          }}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
          component="div"
        >
          {this.getAboutNavigationItem()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionName={{
            enter: styles.projectsNagivationItemEnter,
            enterActive: styles.projectsNagivationItemEnterActive,
            leave: styles.projectsNagivationItemLeave,
            leaveActive: styles.projectsNagivationItemLeaveActive,
            appear: styles.projectsNagivationItemAppear,
            appearActive: styles.projectsNagivationItemAppearActive
          }}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={500}
          component="div"
        >
          {this.getProjectsNavigationItem()}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionName={{
            enter: styles.contactNavigationItemEnter,
            enterActive: styles.contactNavigationItemEnterActive,
            leave: styles.contactNavigationItemLeave,
            leaveActive: styles.contactNavigationItemLeaveActive,
            appear: styles.contactNavigationItemAppear,
            appearActive: styles.contactNavigationItemAppearActive
          }}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={500}
          component="div"
        >
          {this.getContactNavigationItem()}
        </CSSTransitionGroup>
      </ul>
      <Menu
        className={styles.hamburguerMenu}
        onStateChange={this.openMenuChanged.bind(this)}
        width={'230px'}
        isOpen={this.state.isMenuOpen}
      >
        <NavigationItem onClick={this.closeMenu} text="Home" link="/" />
        <NavigationItem onClick={this.closeMenu} text="About" link="/about" />
        <NavigationItem
          onClick={this.closeMenu}
          text="Projects"
          link="/projects"
        />
        <NavigationItem
          onClick={this.closeMenu}
          text="Contact"
          link="/contact"
        />
      </Menu>
    </div>;
}

export default Navigation;
