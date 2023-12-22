import reverie from "../assets/reverie.png";
import quillify from "../assets/quillify.png";
import estudev from "../assets/estudev.png";

export const projects = [
  {
    title: "eStudev (Ongoing)",
    summary:
      "Discover a collaborative network of student developers to elevate your development skills and tech career aspirations.",
    image: estudev,
    stack: ["NextJS", "Typescript", "PostgreSQL", "ShadcnUI", "Prisma"],
    links: {
      github: "https://github.com/raishudesu/eStudev",
      live: "https://estudev.vercel.app",
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
