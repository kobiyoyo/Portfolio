import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const About = () => (

  <section className="aboutpage" id="about">
    <h2 className="aboutpage__title title">ABOUT ME</h2>
    <div className="aboutpage__container">
      <div className="aboutpage__wrapone">
        {' '}
        <img className="aboutpage__img" src={require('../images/one.svg')} alt="one" />
      </div>
      <div className="aboutpage__wraptwo">
        <OverPack style={{ height: 350 }} always={false} playScale={0.4}>

          <QueueAnim
            key="1"
            leaveReverse
            delay={400}
            ease={['easeOutQuart', 'easeInOutQuart']}
            className="aboutpage__list"
            animConfig={[
              { opacity: [1, 0], translateY: [0, 50] },
              { opacity: [1, 0], translateY: [0, -50] },
            ]}
          >

            <p key="1" className="aboutpage__two">
              I'm a
              <span className="aboutpage__one">Full-Stack Developer</span>
              , currently based in Abuja, Nigeria. I'm passionate about creating a scalable web experience for next generation users.
              {' '}
            </p>
            <div key="2">
              <b>Plans:</b>
              {' '}
              Looking for my next full-time software developer role. I'm also looking forward to learning new technologies and deepening my knowledge of my current skills.
            </div>
            <div key="3">
              <b>Skills:</b>
              {' '}
              JavaScript (ES5/ES6), Ruby, HTML, CSS, Ruby on Rails, TDD, jQuery, Bootstrap, PostgreSQL, SQLite3, Rspec, Capybara, Git, GitHub, Heroku, React, Webpack, SASS/SCSS
              {' '}
            </div>
            <div key="4">
              <b>Education:</b>
              {' '}
              B.Sc. Economics, B.Sc. Peace Studies & Conflict Resolution, Certificate in Full-Stack Development
            </div>


          </QueueAnim>

        </OverPack>

      </div>

    </div>
  </section>

);

export default About;
