import Image from "next/image";
import HeroImg from "../../../assets/hero-img.jpg";
import Links from "./Links";

const Hero = () => {
  return (
    <div className="w-full max-w-screen-xl grid md:grid-cols-2 items-center gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Barysh Nikov Bacaltos
        </h1>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Full-Stack Developer
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A developer with a proven track record of delivering high-quality
          digital experiences, passionate about collaboration and continuous
          learning, with a meticulous eye for detail.
        </p>

        <div className="flex items-center gap-2">
          <Links />
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image
          src={HeroImg}
          alt="hero-image"
          className="w-full max-w-[400px] shadow-md rounded-full animate-profile_animate"
        />
      </div>
    </div>
  );
};

export default Hero;
