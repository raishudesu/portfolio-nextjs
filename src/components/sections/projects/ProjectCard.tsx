import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TProjects } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { headingGradient } from "../hero/Hero";

const ProjectCard = ({
  title,
  summary,
  image,
  stack,
  links,
  colSpan,
}: TProjects) => {
  return (
    <Card className={`${colSpan()} text-center`}>
      <CardHeader>
        <CardTitle className={`${headingGradient} p-1`}>{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="rounded-lg mb-3 overflow-hidden border">
          <Image
            src={image}
            alt="project"
            className=" hover:scale-125 transition ease-in-out duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {stack.map((stack, index) => (
            <Badge variant={"secondary"} key={index}>
              {stack}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Link
          href={links.github}
          className="text-[#16BC25]"
          aria-label={`${links.github}`}
          target="_blank"
        >
          <AiFillGithub size={30} />
        </Link>
        <Link
          href={links.live}
          className="text-[#16BC25]"
          aria-label={`${links.live}`}
          target="_blank"
        >
          <AiOutlineLink size={30} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
