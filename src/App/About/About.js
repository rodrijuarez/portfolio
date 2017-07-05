import React from 'react';
import styles from './About.css';

class About extends React.Component {
  static propTypes = {};
  render = () =>
    <div className={styles.contentSection}>
      <div className={styles.row}>
        <h2>RODRIGO JUAREZ</h2>
        <p className={styles.justify}>
          I was born and raised in{' '}
          <span className={styles.bold}>Buenos Aires, Argentina</span>. In a
          very short period of time I learned the basics and got involved in the
          tech industry pretty quickly.   At the beginning of my career I spent
          most of my time working for software factories, where I’ve met a lot
          of great people and learned a lot from them. I was also fortunate
          enough to work on <span className={styles.bold}>Bons</span>, a digital
          agency with a great focus on UX and UI, a place where I’ve also
          discovered the startup world.   At some point I realised that I wanted
          to experience that world at first hand, and that’s where I joined{' '}
          <span className={styles.bold}>Airfy</span>, the company that I work
           for currently.
        </p>
      </div>
      <div className={styles.row}>
        <h3>Career</h3>
        <p className={styles.justify}>
          Nowadays I’m focusing on my career as a{' '}
          <span className={styles.bold}>front end developer</span>, anyways, I
          must also tell you that in the past I’ve also worked as a{' '}
          <span className={styles.bold}>full stack developer</span>, so I can
          fulfill any role.
        </p>
      </div>
      <div className={styles.row}>
        <h3>Technologies</h3>
        <p className={styles.justify}>
          In the latest years I’ve been focused on building applications around
          <span className={styles.bold}> Angular</span> and{' '}
          <span className={styles.bold}>Javascript</span>, but one of my main
          goals is to get more involved in{' '}
          <span className={styles.bold}>React</span> and its community, where
          I’ve only developed some small projects (i.e{' '}
          <span className={styles.bold}>this site!</span>).
        </p>
      </div>
      <div className={styles.row}>
        <h3>Design</h3>
        <p className={styles.justify}>
          Lately I’ve been also getting more involved in learning{' '}
          <span className={styles.bold}>design</span>; reading books, tutorials,
          practicing, involving with the communities and learning from them.
        </p>
      </div>
      <div className={styles.row}>
        <h3>Travel and relocation</h3>
        <p className={styles.justify}>
          I’m also planning to move to{' '}
          <span className={styles.bold}>Europe</span>, the countries that I’m
          mostly interested in are <span className={styles.bold}>France</span>{' '}
          (currently learning french) and{' '}
          <span className={styles.bold}>Germany</span>. So if you got any offer
          involving relocation to those countries, I’m all ears!
        </p>
      </div>
    </div>;
}

export default About;
