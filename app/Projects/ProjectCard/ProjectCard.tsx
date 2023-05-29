"use client";
import Image from "next/image";
import { ArrowSquareIn, GithubLogo } from "@phosphor-icons/react";

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
  logoUrl: string;
}) => {
  return (
    <div className="flex flex-wrap w-[300px] bg-light-primary rounded-md text-very-dark-primary">
      <div className="bg-primary flex-[1_1_200px] h-[200px] flex items-center justify-center">
        <Image src={logoUrl} alt={`${name} logo`} height={100} width={100} />
      </div>
      <div className="flex-[2_1_300px] p-6">
        <div className="flex items-center justify-end gap-2 mb-3">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <GithubLogo size={24} weight="fill" />
          </a>
          <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
            <ArrowSquareIn size={24} />
          </a>
        </div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
