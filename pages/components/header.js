import React from "react";
import { TbSend } from "react-icons/tb";
import Image from "next/image";
import FollowLinks from "./follow-links";
import { Link } from "react-scroll";

const Header = () => {
  const headerDetails =
    "I'm a full stack web-developer from Nigeria, I'm very passionate and dedicated to my work";
  return (
    <div
      id="home"
      className="flex h-fit flex-row items-center justify-between py-24 lg:h-screen lg:py-0 "
    >
      <div className=" flex w-full flex-col justify-center gap-y-5 text-white lg:w-1/2  ">
        <div className="space-y-8">
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Chigala Kingsley <span> &#128075;</span>
          </p>
          <div className="flex items-center gap-4">
            <hr className="h-1 w-24 bg-black sm:w-36" />
            <p className="text-2xl ">Full-stack developer</p>
          </div>
        </div>
        <div>
          <p className="w-full text-lg sm:text-xl">{headerDetails}</p>
        </div>
        <div>
          <button className="flex flex-row items-center gap-x-2 rounded-lg bg-white py-3 px-7 text-base font-semibold text-black hover:bg-slate-500 hover:text-white">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-lg"
            >
              Say Hello
            </Link>{" "}
            <span className="text-xl">
              <TbSend />
            </span>{" "}
          </button>
          <FollowLinks />
        </div>
      </div>

      <div className="hidden w-1/3 lg:block">
        <Image
          alt="header-image"
          src="/images/header-image.svg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Header;
