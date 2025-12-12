import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const SnowParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log(" particles init");

    const initializeParticles = async (engine) => {
      await loadSnowPreset(engine);
      setInit(true);
    };

    import("@tsparticles/engine").then(({ tsParticles }) => {
      initializeParticles(tsParticles);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(" particles loaded", container);
  };

  const options = {
    preset: "snow",
    fullScreen: false,
    height: "100vh",
    width: "100vw",
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#ffe6e6", "#cce7ff"], // White, light pink, and light blue snowflakes
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        random: true,
        anim: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 2 },
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
        },
      },
      detect_retina: true,
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
    },
    retina_detect: true,
  };

  if (init) {
    return (
      <div className="fixed inset-0 pointer-events-none z-10">
        <Particles
          id="tsparticles-snow"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return null;
};

export default SnowParticles;
