import React from 'react';
import '../styles/mySkills.css';

const MySkills = () => {
  return (
    <section className="my-skills">
      <div className="experience">
        <h2>My experience</h2>
        <div>
          <ul className="timeline">
            {/* <!-- Item 1 --> */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="hexa"></span>
                  <span className="flag">
                    No Country
                    <span className="logo-no-country"></span>
                  </span>
                  <span className="time-wrapper">
                    <span className="time">Nov 2022 - Present</span>
                  </span>
                </div>
                <div className="desc">
                  Completed their 7th emulation working on the proyect TinDev as
                  a Full-Stack Dev.
                </div>
              </div>
            </li>

            {/* <!-- Item 2 --> */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="hexa"></span>
                  <span className="flag">
                    Academlo.
                    <span className="logo-academlo"></span>
                  </span>
                  <span className="time-wrapper">
                    <span className="time">Mar - Oct 2022</span>
                  </span>
                </div>
                <div className="desc">
                  Graduated the Full-Stack Web Development program
                </div>
              </div>
            </li>

            {/* <!-- Item 3 --> */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="hexa"></span>
                  <span className="flag">
                    YachayTech
                    <img
                      className="logo-yachay"
                      src="/assets/logo-yachay.png"
                    />
                  </span>
                  <span className="time-wrapper">
                    <span className="time">2017-2022</span>
                  </span>
                </div>
                <div className="desc">Bachelor of Science major in Chemistry</div>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="technologies" id='my-skills'>
        <h2>My Skills</h2>
        <div className="technologies-container">
          <div className='technology-container react'>
            <img className="technology-logo" src="/assets/React.png" />
            <h3>React</h3>
          </div>
          <div className='technology-container node'>
            <img className="technology-logo" src="/assets/Nodejs.png" />
            <h3>NodeJs</h3>
          </div>
          <div className='technology-container'>
            <img className="technology-logo express" src="/assets/Express.png" />
            <h3>Express</h3>
          </div>
          <div className='technology-container sequalize'>
            <img className="technology-logo" src="/assets/Sequalize.png" />
            <h3>Sequalize</h3>
          </div>
          <div className='technology-container postgres'>
            <img className="technology-logo" src="/assets/Postgres.png" />
            <h3>PostgreSQL</h3>
          </div>
          <div className='technology-container javascript'>
            <img className="technology-logo" src="/assets/JavaScript.png" />
            <h3>JavaScript</h3>
          </div>
          <div className='technology-container typescript'>
            <img className="technology-logo" src="/assets/TypeScript.png" />
            <h3>TypeScript</h3>
          </div>
          <div className='technology-container html'>
            <img className="technology-logo" src="/assets/HTML5.png" />
            <h3>HTML</h3>
          </div>
          <div className='technology-container css'>
            <img className="technology-logo" src="/assets/CSS3.png" />
            <h3>CSS</h3>
          </div>
          <div className='technology-container git'>
            <img className="technology-logo" src="/assets/Git.png" />
            <h3>Git</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MySkills;
