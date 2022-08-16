import React from "react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: {
        ease: "easeOut",
      },
    },
  };
  const skillArray = ["Skills", "Experience", "Education"];
  const devSkills = [
    {
      name: "Html",
      imgPath: "/svg/html.svg",
    },
    {
      name: "CSS",
      imgPath: "/svg/css.svg",
    },
    {
      name: "JavaScript",
      imgPath: "/svg/js.svg",
    },
    {
      name: "React",
      imgPath: "/svg/react.svg",
    },
    {
      name: "Node-js",
      imgPath: "/svg/nodejs.svg",
    },
    {
      name: "Express",
      imgPath: "/svg/express.svg",
    },
    {
      name: "MongoDB",
      imgPath: "/svg/mongodb.svg",
    },
    {
      name: "Postgresql",
      imgPath: "/svg/postgresql.svg",
    },
    {
      name: "Typescript",
      imgPath: "/svg/typescript.svg",
    },
    {
      name: "NextJS",
      imgPath: "/svg/nextjs.svg",
    },
    {
      name: "Dart",
      imgPath: "/svg/dart.svg",
    },
    {
      name: "Flutter",
      imgPath: "/svg/flutter.svg",
    },
    {
      name: "Firebase",
      imgPath: "/svg/firebase.svg",
    },
  ];
  const [isClicked, setIsClicked] = useState(["Skills"]);

  const handleClick = (elem) => {
    const newSkillArray = skillArray.filter((skill) => skill === elem);
    setIsClicked(newSkillArray);
  };
  const getSkillModal = () => {
    switch (isClicked[0]) {
      case "Experience":
        return (
          <motion.div
            key="experience"
            variants={variant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full grid-cols-2 justify-items-start  text-white lg:justify-items-center "
          >
            <div className="space-y-4 ">
              <p className="  text-purple-500">2021 - 2022</p>
              <p>Yalz App</p>
              <hr className="w-12  bg-white" />
              <p>Full-stack developer</p>
            </div>
            <div className="space-y-4 ">
              <p className="  text-purple-500">2022 - present</p>
              <p>Freelancing</p>
              <hr className="w-12  bg-white" />
              <p>Full-stack developer</p>
            </div>
          </motion.div>
        );
      case "Education":
        return (
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            exit="exit"
            key="education"
            className="h-full w-full text-white lg:mx-auto lg:w-fit"
          >
            <div className="space-y-4 ">
              <p className="  text-purple-500">2017 - present</p>
              <p>Medicine and surgery</p>
              <hr className="w-12  bg-white" />
              <p>University of PortHarcourt, Nigeria</p>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="skill"
            variants={variant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full grid-cols-4 justify-items-start gap-x-2 gap-y-6 text-white  md:grid-cols-6 lg:grid-cols-4 lg:justify-items-center"
          >
            {devSkills.map((skill) => (
              <div key={skill.name}>
                <div className=" my-auto mx-auto h-12 w-12 rounded-full bg-white p-2">
                  <Image
                    alt={skill.name}
                    src={skill.imgPath}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                  />
                </div>
                <p className="text-center text-xs">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        );
    }
  };
  const expertDetails =
    "I have 2years experience building fast web applications, that are SEO friendly and fully responsive on all mobile device to give my clients the best experience";
  return (
    <div
      id="skills"
      className="flex flex-col items-start gap-y-8 pb-24 text-white  lg:flex-row "
    >
      <div className="h-fit w-full space-y-5 lg:w-1/2 lg:px-5">
        <div >
          <p className=" text-2xl font-bold md:text-3xl lg:text-4xl">
            My Expert Areas{" "}
          </p>
          <hr className="h-[2px] w-12 bg-white " />
        </div>
        <p className="text-lg">{expertDetails}</p>
      </div>
      <div className=" w-full lg:w-1/2">
        <div className="flex flex-row gap-x-6 lg:justify-center lg:gap-x-12 ">
          {skillArray.map((elem, index) => (
            <div className="relative  cursor-pointer" key={index}>
              <p
                onClick={() => {
                  handleClick(elem);
                }}
                className="flex items-center gap-x-1 text-xs  sm:text-base"
              >
                {elem}
                <span>
                  <BsArrowUpRight />
                </span>
              </p>
              {isClicked.includes(elem) && (
                <motion.div
                  layout
                  layoutId="skill"
                  className="absolute -bottom-2 -top-2 -right-2 -left-2 rounded-lg border bg-transparent"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-9 lg:pt-16">
          <AnimatePresence exitBeforeEnter>{getSkillModal()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;
