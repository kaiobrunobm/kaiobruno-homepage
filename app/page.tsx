"use client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="h-[94vh] w-full">
      <motion.section className="h-full p-3 flex flex-col items-center justify-center">
        <motion.p
          className="max-w-md text-center text-xl font-bold text-text md:text-2xl md:max-w-lg lg:3xl lg:max-w-2xl"
          initial={{ opacity: 0, x: -200 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            restSpeed: 0.3,
          }}
        >
          <motion.span className="text-3xl mb-3 text-primary md:text-5xl lg:text-7xl">
            Hi I&apos;m Kaio Bruno
            <br />
          </motion.span>
          A junior web developer passionate with technology, art and the world!
        </motion.p>
      </motion.section>
    </main>
  );
};

export default Home;
