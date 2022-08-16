import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

const HamburgerMenu = ({ setShowHamburger, showHamburger }) => {
  const variant = {
    initial: {
      opacity: 0,
      width: "0px",
    },
    animate: {
      opacity: 1,
      width: "70%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Project",
    "Contact",
  ];

  return (
    <motion.div
      key="hamburger-menu"
      variants={variant}
      initial="initial"
      animate="animate"
      className="fixed right-0 top-0 z-20 h-screen bg-gray-500  p-4 text-white"
    >
      <div
        className="flex justify-end "
        onClick={() => setShowHamburger(!showHamburger)}
      >
        <div className="rounded-lg bg-white px-4 py-2 text-red-500 ">
          <GrClose />
        </div>
      </div>
      <div className="mt-5 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link}
            to={link.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="border-b pb-3 text-xl "
            onClick={() => {
              setShowHamburger(!showHamburger);
            }}
          >
            {link}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
