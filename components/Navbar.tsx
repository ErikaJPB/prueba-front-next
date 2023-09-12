import React from "react";
import ThemeToggle from "./ThemeToggle";
import { navbarLinks } from "@/lib/constants";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-1 w-full h-full px-6 py-6">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-xl font-bold mx-6">Prueba Frontend Erika Pineda</p>
        </div>
        <div className="flex space-x-4">
          {" "}
          {navbarLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <div className="text-lg font-bold  hover:text-gray-500">
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
