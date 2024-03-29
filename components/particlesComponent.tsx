import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesComponent = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, []);

  return (
    <Particles 
      init={init}
      options={{
        background: {
            color: {
                value: "#342718",
            },
            opacity: 0,
        },
        fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "repulse"
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    lineLinked: {
      blink: false,
      color: "#000",
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0,
      width: 0
    },
    rotate: {
      value: 90,
      random: false,
      direction: "clockwise",
      animation: {
        enable: false,
        speed: 5,
        sync: false
      }
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      },
      bounce: false,
      direction: "bottom",
      enable: true,
      outMode: "out",
      random: true,
      speed: 25,
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 700
      },
      limit: 0,
      value: 200
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.5,
        speed: 1,
        sync: false
      },
      random: true,
      value: 1
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: [],
      polygon: {
        nb_sides: 5
      },
      stroke: {
        color: "#efefefee",
        width: .3
      },
      type: "line"
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false
      },
      random: false,
      value: 5
    }
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5
    },
    move: {
      radius: 10
    },
    scale: 1,
    type: "none",
    url: ""
  }
    }}
    />
  )
};

export default ParticlesComponent;