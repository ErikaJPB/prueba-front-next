import React from "react";
import About from "@/components/About";
import { codingSkills, softSkills } from "@/lib/constants";

const AboutMePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Acerca de Mi</h1>
      </div>
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/4 mt-8 ml-2">
          <div className="ml-8 mt-9  flex flex-col justify-center ">
            <h1 className="font-bold text-2xl mt-9 mb-4">Soft Skills</h1>
            <ul className="list-disc pl-6 text-xl mt-4 gap-4">
              {softSkills.map((skill, index) => (
                <li key={index} className="mb-4">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <div className="md:mx-auto">
            <About />
          </div>
        </div>
        <div className="md:w-1/4 mt-4 md:mt-8 ml-2 md:ml-8">
          <div className="ml-8 mt-4 md:mt-9 flex flex-col justify-center ">
            <h1 className="font-bold text-2xl mt-4 md:mt-7 mb-4">
              Coding Skills
            </h1>
            <ul className="list-disc pl-6 text-xl mt-4 gap-4">
              {codingSkills.map((skill, index) => (
                <li key={index} className="mb-4">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
