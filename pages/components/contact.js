import React from "react";
import Image from "next/image";
import { TbSend } from "react-icons/tb";
import FollowLinks from "./follow-links";

const Contact = () => {
  const icons = [
    {
      name: "instagram",
      path: "/svg/instagram.svg",
    },
    {
      name: "github",
      path: "/svg/github.svg",
    },
    {
      name: "Twitter",
      path: "/svg/twitter.svg",
    },
  ];
  return (
    <div id="contact" className="space-y-16 pb-9 flex flex-col justify-center h-screen text-white lg:pb-24">
      <div className="flex flex-col lg:flex-row  lg:items-center lg:justify-between  ">
          <div className="relative w-full lg:w-64 h-64 mb-4 lg:mb-0 ">
            <Image
              src="/svg/contact-svg.svg"
              alt="contact"
              layout="fill"
              objectFit="contain"
            />
          </div>
        <div className="w-full space-y-4 pb-4 lg:w-1/2 lg:space-y-12 lg:pb-0">
          <p className=" text-3xl font-bold md:text-4xl lg:text-6xl">Lets work together</p>
          <p className="leading-8 md:leading-2 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse rerum
            deleniti nobis laborum saepe in impedit totam expedita non, corrupti
            reprehenderit fugit quae at, doloremque quo dolorum error minima
            perferendis sit dolore asperiores eius quibusdam. Quam suscipit
            quidem laborum est.
          </p>
        </div>

        <button className="flex h-fit w-fit flex-row items-center gap-x-2 rounded-lg bg-white py-3 px-7 text-xl font-semibold text-black hover:bg-slate-500 hover:text-white ">
          Say Hello!
          <span>
            <TbSend />
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex w-3/4 flex-col justify-between gap-y-4 lg:flex-row  lg:justify-around ">
          <div className="space-y-3">
            <p className="text-gray-300">Call : </p>
            <p className="text-3xl">64343843483748</p>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300">Email : </p>
            <p className="text-3xl">Chigala11@gmail.com</p>
          </div>
        </div>
        <FollowLinks/>
      </div>
    </div>
  );
};

export default Contact;
