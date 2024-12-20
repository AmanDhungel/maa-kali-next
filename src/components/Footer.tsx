import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon, Github, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center m-auto  items-center  gap-10 p-10 mt-10 border rounded-xl md:w-[50rem] m-auto mb-4">
      <div id="links" className="flex gap-4 md:gap-9 text-lg">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div id="socials" className="flex text-base gap-5 md:gap-14 md:text-lg">
        <InstagramLogoIcon className="w-8 h-8 " />
        <TwitterLogoIcon className="w-8 h-8" />
        <FacebookIcon className="w-8 h-8" />
        <Github className="w-8 h-8" />
        <Youtube className="w-8 h-8" />
      </div>
      <div id="footer-text" className="flex items-center gap-5 text-lg">
        <p>
          &copy; {date} Maa Kali Hardware X National Home Decor, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
