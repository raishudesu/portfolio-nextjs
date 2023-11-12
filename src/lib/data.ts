import reverie from "../assets/reverie.png";
import quillify from "../assets/quillify.png";
import studev from "../assets/studev.png";

export const projects = [
  {
    title: "Stu/dev Forums (Ongoing)",
    summary:
      "Enhancing learning development by collaborating with other aspiring students and professionals.",
    image: studev,
    stack: ["NextJS", "Typescript", "MongoDB", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/studev-forums",
      live: "https://studev-forums.vercel.app",
    },
  },
  {
    title: "Reverie",
    summary:
      "A web-based diary application that's accessible from both desktop and mobile browsers.",
    image: reverie,
    stack: ["React", "Typescript", "Firebase", "ShadcnUI"],
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
    stack: ["React", "ExpressJS", "MongoDB", "MaterialTailwind"],
    links: {
      github: "https://github.com/raishudesu/quillify-client",
      live: "https://quillify.vercel.app",
    },
  },
];
