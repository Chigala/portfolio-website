import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  const [currentHoverElement, setCurrentHoverElement] = useState([]);
  const formatIndexToNumber = (index) => {
    return index < 10 ? `0${index + 1}` : index + 1;
  };
  const servicesData = [
    {
      name: "Web Development",
      writeUp:
        "I build websites that are responsive, performant, and user-friendly. I use modern technologies like React, NextJS, and NodeJS to build websites that are fast, secure, and easy to use.",
    },
    {
      name: "Mobile Development",
      writeUp:
        "I build mobile apps that are responsive, performant, and user-friendly. I use modern technologies like React, NextJS, and NodeJS to build websites that are fast, secure, and easy to use.",
    },
    {
      name: "Software Development",
      writeUp:
        "I build software that is performant, and user-friendly. I use modern technologies like React, NextJS, and NodeJS to build websites that are fast, secure, and easy to use.",
    },
    {
      name: "UI/UX Design",
      writeUp:
        "I design user-friendly interfaces and experiences that are performant and user-friendly. I use modern technologies like React, NextJS, and NodeJS to build websites that are fast, secure, and easy to use.",
    },
  ];
  const getHoverElement = (value) => {
    const [{ name }] = servicesData.filter((service) => service.name === value);
    setCurrentHoverElement(name);
  };
  const removeHoverElement = () => {
    setCurrentHoverElement([]);
  };
  return (
    <div
      id="services"
      className="flex flex-col justify-start pb-24 text-white lg:h-fit"
    >
      <div>
        <p className="pb-4 text-2xl lg:text-4xl font-bold sm:pb-7 ">Services I Provide </p>
      </div>
      {servicesData.map((service, index) => {
        return (
          <motion.div
            onHoverEnd={() => {
              removeHoverElement(service.name);
            }}
            onHoverStart={() => {
              getHoverElement(service.name);
            }}
            key={index}
            className={`grid py-3 px-4 lg:py-6 ${
              index == 0 && "border-y"
            } relative w-full gap-y-4 border-b  lg:mx-auto lg:grid-cols-11 `}
          >
            <div className="col-span-4 flex flex-row items-center gap-2 ">
              <p className="text-base text-purple-500 sm:text-xl">
                {formatIndexToNumber(index)}
              </p>
              <p className="text-xl sm:text-2xl">{service.name}</p>
            </div>
            <div className="col-span-6 text-xs sm:text-base ">
              <p className="text-lg sm:text-xl">{service.writeUp}</p>
            </div>
            <div className="hidden justify-end lg:flex">
              <BsArrowUpRight />
            </div>
            {currentHoverElement.includes(service.name) && (
              <motion.div
                layout
                layoutId="data"
                className="absolute inset-0 grid  bg-purple-900 px-4 py-3 lg:mx-auto lg:grid-cols-11 lg:py-6"
              >
                <div className="col-span-4 flex flex-row items-center gap-2 text-base ">
                  <p className="text-base text-purple-400 sm:text-xl ">
                    {formatIndexToNumber(index)}
                  </p>
                  <p className="text-xl sm:text-2xl">{service.name}</p>
                </div>
                <div className="col-span-6 text-xs sm:text-base ">
                  <p className="text-lg sm:text-xl">{service.writeUp}</p>
                </div>
                <div className="hidden lg:flex justify-end">
                  <BsArrowUpRight />
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;
