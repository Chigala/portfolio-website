import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";

const ProjectSlide = () => {
  const projectSlides = [
    {
      title: "Project 1",
      imgPath: "/images/picture1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com",
      githubLInk: "https://www.google.com",
    },
    {
      title: "Project 2",
      imgPath: "/images/picture2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com",
      githubLInk: "https://www.google.com",
    },
    {
      title: "Project 3",
      imgPath: "/images/picture3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com",
      githubLInk: "https://www.google.com",
    },
    {
      title: "Project 4",
      imgPath: "/images/picture4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com",
      githubLInk: "https://www.google.com",
    },
    {
      title: "Project 5",
      imgPath: "/images/picture5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com",
      githubLInk: "https://www.google.com",
    },
    {
      title: "Project 6",
      imgPath: "/images/picture6.jpg",
      description:
        "chigala ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com",
      githubLInk: "https://www.google.com",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goright, setGoright] = useState(false);
  useEffect(() => {
    //automate the slider
    const interval = setInterval(() => {
      if (currentSlide !== projectSlides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, )

  const increaseCurrentSlide = () => {
    if (currentSlide < projectSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setGoright(true);
    } else {
      setGoright(false);
      setCurrentSlide(0);
    }
  };
  const decreaseCurrentSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setGoright(false);
    } else {
      setCurrentSlide(projectSlides.length - 1);
      setGoright(true);
    }
  };

  return (
    <div id="project" className="fit pb-24  text-white">
      <p className=" pb-12 text-2xl font-bold sm:text-4xl">
        Look At My Projects
      </p>
      <div className=" relative  pr-6 sm:mx-auto  ">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentSlide}
            exit={{
              x: goright ? -300 : 300,
              opacity: 0,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="aspect-w-16 aspect-h-12 relative lg:aspect-h-4"
          >
            <Image
              alt={projectSlides[currentSlide].title}
              src={projectSlides[currentSlide].imgPath}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 10 }}
          transition={{
            repeat: Infinity,
            duration: 0.7,
            type: "spring",
          }}
          className="absolute top-1/2 right-10 -translate-y-1/2 scale-125 cursor-pointer text-base sm:text-6xl "
        >
          <MdArrowForwardIos onClick={increaseCurrentSlide} />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -10 }}
          transition={{
            repeat: Infinity,
            duration: 0.7,
            type: "spring",
          }}
          className="absolute top-1/2 left-10 -translate-y-1/2 scale-125 cursor-pointer text-base sm:text-6xl "
        >
          <MdArrowBackIos onClick={decreaseCurrentSlide} />
        </motion.div>
        <div className="absolute bottom-2 right-1/2 flex translate-x-1/2 gap-2 lg:bottom-10">
          {projectSlides.map((project, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 cursor-pointer rounded-full lg:h-5 lg:w-5  ${
                  index === currentSlide ? "bg-gray-100" : "bg-gray-500"
                }   `}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="space-y-5 pt-4 ">
        <button className="flex h-fit w-36 flex-row items-center gap-x-2 rounded-lg bg-white py-3 px-7 text-xl font-semibold text-black hover:bg-slate-500 hover:text-white ">
          Github
          <span>
            <AiFillGithub />
          </span>
        </button>
        <button className="flex h-fit w-36 flex-row items-center gap-x-2 rounded-lg bg-white py-3 px-7 text-xl font-semibold text-black hover:bg-slate-500 hover:text-white ">
          Live
          <span>
            <IoIosGitNetwork />
          </span>
        </button>
      </div>
      <div className="relative mt-9">
        <div className="absolute h-fit w-fit scale-150 text-xl ">
          <TbFileDescription />
        </div>
        <p className="inline px-7 text-lg lg:text-xl">
          {projectSlides[currentSlide].description}
        </p>
      </div>
    </div>
  );
};

export default ProjectSlide;
