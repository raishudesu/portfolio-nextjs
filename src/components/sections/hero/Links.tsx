import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
const Links = () => {
  return (
    <>
      <Link href="https://github.com/raishudesu" className="text-[#16BC25]">
        <AiFillGithub size={30} />
      </Link>
      <Link
        href="https://www.upwork.com/freelancers/~01f820ee60c225abf9"
        className="text-[#16BC25]"
      >
        <BiLogoUpwork size={30} />
      </Link>
    </>
  );
};

export default Links;
