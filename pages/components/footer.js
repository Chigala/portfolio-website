import React from "react";
import Image from "next/image";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="flex flex-row items-center justify-between bg-gray-900 px-10 py-6 text-white lg:justify-between lg:px-16">
      <div className="flex flex-row items-center">
        <a className="text-xl font-bold lg:text-3xl" href="#">
          Chigala
        </a>
        <Image src="/svg/bolt.svg" alt="bolt-icon" width={30} height={30} />
      </div>
      <p className=" text-tiny lg:text-xs ">
        &copy; {getCurrentYear()} Chigala. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
