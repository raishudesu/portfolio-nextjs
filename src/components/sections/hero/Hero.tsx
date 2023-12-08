import Image from "next/image";
import HeroImg from "../../../assets/hero-img.jpg";
import Links from "./Links";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Particles } from "@/components/Particles";

export const headingGradient =
  "text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:to-gray-400";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl grid md:grid-cols-2 items-center gap-6 text-center md:text-start">
      <Particles className="absolute inset-0 -z-10" />
      <Card className="text-center h-full">
        <CardHeader>
          <CardTitle className={`${headingGradient} text-3xl font-bold`}>
            Barysh Nikov Bacaltos
          </CardTitle>
          <CardDescription>Full-Stack Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A developer with a proven track record of delivering high-quality
            digital experiences, passionate about collaboration and continuous
            learning, with a meticulous eye for detail.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center items-center gap-2">
          <Links />
        </CardFooter>
      </Card>
      <Card>
        <CardContent className="mt-5 flex justify-center items-center">
          <Image
            src={HeroImg}
            alt="hero-image"
            className="w-full max-w-[225px] shadow-md rounded-full"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
