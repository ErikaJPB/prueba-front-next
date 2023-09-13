import React from "react";
import { navbarLinks } from "@/lib/constants";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-1 w-full h-full px-6 py-6">
      <div className="flex flex-col md:flex-row items-left justify-between w-full">
        <div className="text-left md:text-center mb-4 md:mb-0">
          <p className="text-4xl font-bold mx-6 md:-ml-0">&lt;ErikaJPB /&gt;</p>
        </div>
        <div className="flex flex-col md:flex-row text-center space-y-2 md:space-y-0  md:space-x-6">
          {navbarLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <div className="text-lg font-semibold hover:text-gray-500">
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
