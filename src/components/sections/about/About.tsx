import { Button } from "@/components/ui/button";
import Image from "next/image";
import about from "../../../assets/about-img.svg";
import TechStack from "../tech-stack/TechStack";
import { headingGradient } from "../hero/Hero";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-screen-xl flex flex-col items-center"
    >
      <h2
        className={`w-full text-center scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 ${headingGradient}`}
      >
        About me
      </h2>
      <div className="grid md:grid-cols-2 justify-items-center items-center gap-6 mt-6">
        <Image
          src={about}
          alt="about-image"
          className="w-full max-w-[500px]"
          loading="lazy"
        />
        <div className="flex flex-col">
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:text-start">
            I&apos;m a passionate developer with a strong commitment in
            continuous learning. My expertise lies in web development, with a
            focus on providing smooth user experiences. I excel in collaborative
            team-based development and consistently strive for the best outcomes
            of my development processes. My primary framework is Next.js, and I
            am proficient in building robust applications within the React
            ecosystem. To support my development processes, I utilize essential
            tools and libraries, including Firebase, Git, GitHub, and Shadcn UI.
          </p>
          <TechStack />
          <Button className="mt-6 self-stretch md:self-start p-0">
            <a
              href={"/cv.pdf"}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
