import { headingGradient } from "../hero/Hero";
import Stack from "./Stack";

const TechStack = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col">
      <h3
        className={`scroll-m-20 text-2xl font-bold tracking-tight mt-6 text-center md:text-start ${headingGradient}`}
      >
        Tech stack
      </h3>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-6 text-[#16BC25]">
        <Stack />
      </div>
    </div>
  );
};

export default TechStack;
