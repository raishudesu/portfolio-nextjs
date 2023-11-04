import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Sidebar from "./Sidebar";
import NavMenu from "./NavMenu";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header
      id="top"
      className="px-6 backdrop-blur-xl w-full flex justify-center shadow-md dark:shadow-slate-900"
    >
      <div className="w-full max-w-screen-xl flex justify-between items-center h-16">
        <Link
          href={"/"}
          className="flex gap-1 items-center scroll-m-20 text-2xl font-bold tracking-tight transition-colors first:mt-0"
        >
          <Image src={logo} alt="console-icon" className="max-w-[25px]" />
          <p>
            <span className="text-[#16BC25]">bnb</span>.dev
          </p>
        </Link>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;