import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I gotta say, my skills with JavaScript, HTML/CSS, Node.js, Express.js, APIs, and React are pretty impressive. I can build some super cool stuff with these technologies. I know how to make dynamic and interactive web applications that look great and work even better. I can design visually appealing web pages with HTML/CSS, and use Node.js and Express.js to create scalable server-side applications. My API skills are on point, which lets me integrate third-party services into my projects with ease. And don't even get me started on React—it's my go-to for building high-performance user interfaces that are both intuitive and responsive.

          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
