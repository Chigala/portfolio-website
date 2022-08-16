import React from "react";
import { CgFileDocument } from "react-icons/cg";
import Image from "next/image";

const About = () => {
  const aboutMe =
    "With 10 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.";
  return (
    <div
      id="about"
      className=" flex h-fit items-start justify-between pb-24  text-white "
    >
      <div className="hidden w-1/3 lg:block ">
        <Image
          alt="header-image"
          src="/images/resume.svg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="w-full space-y-6 lg:w-1/2 lg:space-y-12">
        <div>
          <p className="text-3xl font-bold">About Me </p>
          <hr className="h-[2px] w-12 bg-white " />
        </div>
        <p className="text-lg lg:text-xl">{aboutMe}</p>
        <button className="flex flex-row items-center gap-x-2 rounded-lg bg-white py-3 px-7 text-base font-semibold text-black hover:bg-slate-500 hover:text-white ">
          <a
            href="/resume.pdf"
            download
            className="text-lg sm:text-2xl md:text-xl "
          >
            Download Resume
          </a>
          <span>
            <CgFileDocument />
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
