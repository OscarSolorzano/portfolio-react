import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback, useEffect } from 'react';
import Typed from 'react-typed';
import '../styles/home.css';
import { useState } from 'react';

const Home = () => {
  // Particle Function
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // Paralax Scrolling

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <section className="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
            },
          },
          fullScreen: {
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                easing: 'ease-out-quad',
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: 'ease-out-quad',
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: 'ease-out-quad',
                  selectors: [],
                },
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: '#ffffff',
                    },
                    stop: {
                      value: '#000000',
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: '#000000',
                  },
                  length: 2000,
                },
              },
            },
          },
          particles: {
            color: {
              value: '#ff0000',
              animation: {
                h: {
                  enable: true,
                  speed: 20,
                },
              },
            },
            move: {
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
              speed: 6,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: 0.1,
                max: 3,
              },
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: 'vertical',
              speed: 25,
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: 'clockwise',
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: '#ffffff',
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: '#000',
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
        }}
      ></Particles>
      <div className="paralax-home">
        <img className="bg1" src="/assets/home-bg.png" />
        <img
          className="bg2"
          src="/assets/home-bg1.png"
          style={{ transform: `translateY(${offsetY * 0.29}px)` }}
        />
        <div
          className="presentation"
          style={{ transform: `translateY(${offsetY * -0.3}px)` }}
        >
          <h1>Hi, I am</h1>
          <Typed
            strings={[
              'Oscar Solorzano',
              'A Full Stack Developer',
              'Oscar Solorzano',
              'A Gamer',
              'Oscar Solorzano',
              'A Chemist',
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
