import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/constants";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" mt-4 mb-4  py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <p className="text-lg font-semibold">
            © {currentYear} Lorem ipsum dolor sit amet
          </p>
          <p className="text-md justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt pretium mauris, in tempus ipsum blandit eu.
          </p>
        </div>

        <div className="flex space-x-4">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg   hover:text-gray-500"
            >
              <link.icon className="inline-block align-middle" /> {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
