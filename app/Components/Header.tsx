"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const menuOptionsVariant: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="h-[7vh] w-full fixed top-0 bg-background/40 backdrop-blur-md flex justify-center items-center p-4 text-very-dark-primary z-20">
        <Link href="/">
          <motion.h1
            className="w-full font-bold text-2xl ml-10 text-text md:ml-0"
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
          >
            KaioBruno<span className="text-primary">Dev</span>
          </motion.h1>
        </Link>

        <motion.nav
          className="absolute top-1  left-3 text-text"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <Hamburger toggle={() => handleMenu()} toggled={isOpen} />
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.4,
                  delayChildren: 0.1,
                  staggerChildren: 0.01,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="flex flex-col gap-1 mt-3 bg-white rounded-md text-secondary p-6 text-lg"
          >
            <Link href="/AboutMe" onClick={() => handleMenu()}>
              <motion.li
                className="md:hover:bg-slate-200 duration-150 py-2 px-5 rounded-lg"
                variants={menuOptionsVariant}
              >
                About me
              </motion.li>
            </Link>
            <Link href="/Projects" onClick={() => handleMenu()}>
              <motion.li
                className="md:hover:bg-slate-200 duration-150 py-2 px-5 rounded-lg"
                variants={menuOptionsVariant}
              >
                Projects
              </motion.li>
            </Link>
          </motion.ul>
        </motion.nav>
      </header>
    </>
  );
};

export default Header;
