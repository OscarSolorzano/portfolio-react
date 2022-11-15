import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="title-img">
        <div className="title-sm">
          <h2>About me</h2>
        </div>
        <div className="about-img"></div>
      </div>
      <div className="about-description">
        <div className="title-lg">
          <h2>About me</h2>
        </div>
        <p>
          Hello world. My name is Oscar Solorzano and I am a Full Stack
          Developer, I am Ecuadorian, currently 23 years old and on the path to
          further develope my programming abilities, I am very passionate about
          finding simple solutions to complicated problems through code. I love
          video games, cinema, anime, music, cooking and nature.
        </p>
        <div className="wrapper">
          <a className="button" href='https://www.linkedin.com/in/oscar-solorzano/' target="_blank">
            <div className="icon">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </div>
            <span>Linked in</span>
          </a>

          <a className="button no-small" href='https://github.com/OscarSolorzano' target="_blank">
            <div className="icon">
              <i className="fa-brands fa-github fa-2xl"></i>
            </div>
            <span>Github</span>
          </a>

          <a className="button" href='/files/OscarSolorzanoResumeEn.pdf' download>
            <div className="icon">
              <i className="fa-solid fa-file"></i>
            </div>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
