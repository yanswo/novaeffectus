import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadPathShape } from "tsparticles-shape-path";

const ParticleAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadPathShape(engine);
  }, []);

  const particleOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    fullScreen: { enable: false },
    detectRetina: true,

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 60,
          duration: 0.4,
        },
      },
    },

    particles: [
      {
        number: { value: 400 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: { min: 0.1, max: 0.4 } },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: true,
          outModes: "destroy",
          path: {
            enable: true,
            delay: { value: 0 },
            generator: "svg",
            options: {
              svg: {
                path: "M 300 0 Q 100 150, 300 300 T 300 600",
                width: 600,
                height: 600,
              },
            },
          },
        },
      },
      {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shadow: { enable: true, color: "#ffffff", blur: 10 },
        shape: { type: "circle" },
        opacity: { value: { min: 0.5, max: 1 } },
        size: { value: { min: 2, max: 4 } },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: true,
          outModes: "destroy",
          path: {
            enable: true,
            delay: { value: 0 },
            generator: "svg",
            options: {
              svg: {
                path: "M 300 0 Q 100 150, 300 300 T 300 600",
                width: 600,
                height: 600,
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
    </div>
  );
};

export default ParticleAnimation;
