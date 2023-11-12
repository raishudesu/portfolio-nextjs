"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const customInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);
  return (
    <Particles
      options={{
        fps_limit: 30,
        particles: {
          color: {
            value: "#16BC25",
          },
          links: {
            color: "#16BC25",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
      init={customInit}
      className="-z-50"
    />
  );
};

export default ParticlesBackground;
