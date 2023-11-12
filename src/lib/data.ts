import reverie from "../assets/reverie.png";
import quillify from "../assets/quillify.png";

export const projects = [
  {
    title: "Reverie",
    summary:
      "A web-based diary application that's accessible from both desktop and mobile browsers.",
    image: reverie,
    links: {
      github: "https://github.com/raishudesu/Reverie",
      live: "https://reverie-notes.web.app",
    },
  },
  {
    title: "Quillify",
    summary:
      "Digital source for tech insights, tutorials, and community discussions.",
    image: quillify,
    links: {
      github: "https://github.com/raishudesu/quillify-client",
      live: "https://quillify.vercel.app",
    },
  },
];

export const particlesConfig = {
  fps_limit: 30,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        particles_nb: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#c5c6c7",
    },
    links: {
      color: "#c5c6c7",
      distance: 150,
      enable: true,
      opacity: 0.2,
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
};
