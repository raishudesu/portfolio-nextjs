import { Button } from "@/components/ui/button";
import Image from "next/image";
import about from "../../../assets/about-img.svg";
import TechStack from "../tech-stack/TechStack";
import { headingGradient } from "../hero/Hero";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-screen-xl flex flex-col items-center"
    >
      <div className="grid md:grid-cols-2 justify-items-center items-center gap-6 mt-6">
        <Card className="h-full">
          <CardContent className="mt-12">
            <Image
              src={about}
              alt="about-image"
              className="w-full"
              loading="lazy"
            />
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className={`${headingGradient}`}>About me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I&apos;m a passionate developer with a strong commitment in
              continuous learning. My expertise lies in web development, with a
              focus on providing smooth user experiences. I excel in
              collaborative team-based development and consistently strive for
              the best outcomes of my development processes. My primary
              framework is Next.js, and I am proficient in building robust
              applications within the React ecosystem. To support my development
              processes, I utilize essential tools and libraries, including
              Firebase, Git, GitHub, and Shadcn UI.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col">
            <TechStack />
            <Button className="mt-6 self-stretch md:self-center p-0">
              <a
                href={"/cv.pdf"}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4"
                title="download-cv"
              >
                Download CV
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
