"use client";
import Image from "next/image";
import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  description,
  htmlUrl,
  repoUrl,
  logoUrl,
}: {
  name: string;
  description: string;
  htmlUrl: string;
  repoUrl: string;
  logoUrl?: string;
}) => {
  return (
    <div className="flex flex-wrap w-72 lg:w-96  bg-secondary rounded-md text-text">
      <div className="bg-primary flex-auto h-52 flex items-center justify-center">
        {logoUrl ? (
          <Image src={logoUrl} alt={`${name} logo`} height={100} width={100} />
        ) : (
          <h1 className="font-bold text-3xl">No Logo</h1>
        )}
      </div>
      <div className="flex-auto p-6">
        <div className="flex items-center justify-end gap-2 mb-3">
          <motion.a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
            whileHover={{
              y: -3,
              transition: { duration: 0.2 },
            }}
          >
            <GithubLogo size={24} weight="fill" />
          </motion.a>
          <motion.a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
            whileHover={{
              y: -3,
              x: 3,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              y: 0,
              x: 0,
              transition: { duration: 0.2 },
            }}
          >
            <ArrowSquareIn size={24} />
          </motion.a>
        </div>
        <h2 className="font-bold text-xl md:text-2xl">{name}</h2>
        <p
          className="text-sm lg:text-base
        "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
