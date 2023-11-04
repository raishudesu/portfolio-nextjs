import Image from "next/image";
import contact from "../../../assets/contact-img.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full max-w-screen-xl">
      <h2 className="w-full text-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Contact me
      </h2>
      <div className="grid md:grid-cols-2 justify-items-center mt-8">
        <Image
          src={contact}
          alt="contact-illustration"
          className="max-w-[325px]"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;