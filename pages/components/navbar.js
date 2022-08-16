import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TbSend } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const NavBar = ({ setShowHamburger, showHamburger }) => {
  const [onHover, setOnHover] = useState([]);
  const navLinks = ["Home", "About", "Skills", "Services", "Project", "Contact"];
  const handleShowHamburger = () => {
    setShowHamburger(!showHamburger);
  };
  const handleLinkHover = (ele) => {
    const newLinkArray = navLinks.filter((link) => link === ele);
    setOnHover(newLinkArray);
  };
  return (
    <nav className="fixed right-0 left-0 top-0 z-20 h-fit bg-black px-5 py-4 text-white sm:py-5 ">
      <div className=" flex items-center justify-between lg:mx-auto lg:max-w-7xl lg:justify-center">
        <div className="flex flex-row items-center">
          <a className="text-3xl font-bold" href="#">
            Chigala
          </a>
          <Image src="/svg/bolt.svg" alt="bolt-icon" width={30} height={30} />
        </div>
        <ul className="hidden grow flex-row justify-center gap-x-9 text-lg font-thin lg:flex">
          {navLinks.map((link) => (
            <motion.li
              className="relative"
              onHoverStart={() => handleLinkHover(link)}
              key={link}
            >
              <Link
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {link}
              </Link>
              {onHover.includes(link) && (
                <motion.div
                  layout
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[2px] bg-white "
                ></motion.div>
              )}
            </motion.li>
          ))}
        </ul>
        <button className="hidden flex-row items-center gap-x-2 rounded-lg bg-white py-3 px-7 text-xl font-semibold text-black hover:bg-slate-500 hover:text-white lg:flex ">
          Book me!
          <span>
            <TbSend />
          </span>
        </button>
        <div onClick={handleShowHamburger}>
          <GiHamburgerMenu className="block scale-150 lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
