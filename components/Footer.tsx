import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-4 mb-4 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">
            © {currentYear} Lorem ipsum dolor sit amet
          </p>
          <p className="text-md justify-center md:justify-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt pretium mauris, in tempus ipsum blandit eu.
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-500 flex items-center"
            >
              <link.icon className="inline-block align-middle mr-2" />{" "}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
