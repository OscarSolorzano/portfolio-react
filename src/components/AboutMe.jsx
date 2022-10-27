import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-img"></div>
      <div className="about-description">
        <h2>About me</h2>
        <p>
          Hello world. My name is Oscar Solorzano and I am a Full Stack
          Developer, I am Ecuadorian, currently 23 years old and on the path to
          further develope my programming abilities, I am very passionate about
          finding simple solutions to complicated problems through code. I love
          video games, cinema, anime, music, cooking and nature.
        </p>
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </div>
            <span>Linked in</span>
          </div>

          <div className="button">
            <div className="icon">
              <i className="fa-brands fa-github fa-2xl"></i>
            </div>
            <span>Github</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
