import { StaticImageData } from "next/image";
import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(5, { message: "Message should be at least 5 characters" })
    .max(250, { message: "Message should be less than 250 characters" }),
});

export type FormValues = {
  email: string;
  message: string;
};

export type TLinks = {
  github: string;
  live: string;
};

export type TProjects = {
  title: string;
  summary: string;
  image: StaticImageData;
  links: TLinks;
};
