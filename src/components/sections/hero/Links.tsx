import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
const Links = () => {
  return (
    <>
      <Link href="#contact" className="text-[#16BC25]">
        <AiFillGithub size={30} />
      </Link>
      <Link href="" className="text-[#16BC25]">
        <BiLogoUpwork size={30} />
      </Link>
    </>
  );
};

export default Links;