import Image from "next/image";
import contact from "../../../assets/contact-img.svg";
import ContactForm from "./ContactForm";
import { headingGradient } from "../hero/Hero";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div id="contact" className="w-full max-w-screen-xl mt-12">
      <h2
        className={`w-full text-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 ${headingGradient}`}
      >
        Contact me
      </h2>
      <div className="grid md:grid-cols-2 gap-6 justify-items-center mt-8">
        <Card className="w-full">
          <CardContent className="mt-6">
            <Image
              src={contact}
              alt="contact-illustration"
              className="max-h-80"
              loading="lazy"
            />
          </CardContent>
        </Card>
        <Card className="w-full flex items-center">
          <CardContent className="w-full flex justify-center items-center">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
