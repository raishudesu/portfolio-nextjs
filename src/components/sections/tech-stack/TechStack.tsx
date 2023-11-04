import Stack from "./Stack";

const TechStack = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Tech stack
      </h3>
      <div className="flex flex-wrap items-center gap-2 mt-6 text-[#16BC25]">
        <Stack />
      </div>
    </div>
  );
};

export default TechStack;
