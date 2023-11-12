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

const ProjectCard = ({ title, summary, image, stack, links }: TProjects) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image
          src={image}
          alt="project"
          className="rounded-lg mb-3"
          loading="lazy"
        />
        <div className="flex flex-wrap gap-2">
          {stack.map((stack, index) => (
            <Badge variant={"secondary"} key={index}>
              {stack}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Link href={links.github} className="text-[#16BC25]">
          <AiFillGithub size={30} />
        </Link>
        <Link href={links.live} className="text-[#16BC25]">
          <AiOutlineLink size={30} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
