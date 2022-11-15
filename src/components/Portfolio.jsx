import React from 'react';
import projects from '../data/project.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles/portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id='portfolio'>
      <div className="bkg-detail">
        <h2>My projects</h2>
        <span>{'</>'}</span>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="container">
              <div className="card">
                <div className="imgBx">
                  <img src={`${project.img}`} />
                </div>
                <div className="contentBx">
                  <h3>{`${project.title}`}</h3>
                  <div className="size">
                    {/* <h3>Tech:</h3> */}
                    {project.tech.map((tech) => (
                      <img
                        className="tech-mini"
                        key={project.title + tech}
                        src={`${tech}`}
                      />
                    ))}
                  </div>
                  <div className="color">
                    <p>{project.description}</p>
                  </div>
                  {project.links.map((link) => (
                    <a href={link.url} target="_blank" key={link.url}>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
