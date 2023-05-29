import ProjectCard from "./ProjectCard/ProjectCard";

interface project {
  name: string;
  description: string;
  logoUrl: string;
  htmlUrl: string;
  repoUrl: string;
}

const page = () => {
  return (
    <main className="h-full w-full pt-20 pb-10">
      <section className="h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl pb-10 text-text">Projects</h1>
        <div className="h-full flex flex-wrap justify-center items-center gap-5">
          <ProjectCard
            name="Mobills Clone"
            description="Mobills is a website and app that take care of your finance"
            logoUrl="/mobills-md-logo.svg"
            htmlUrl="https://mobills-clone.vercel.app/"
            repoUrl="https://github.com/kaiobrunobm/mobills-clone"
          />
          <ProjectCard
            name="Mobills Clone"
            description="Mobills is a website and app that take care of your finance"
            logoUrl="/mobills-md-logo.svg"
            htmlUrl="https://mobills-clone.vercel.app/"
            repoUrl="https://github.com/kaiobrunobm/mobills-clone"
          />
          <ProjectCard
            name="Mobills Clone"
            description="Mobills is a website and app that take care of your finance"
            logoUrl="/mobills-md-logo.svg"
            htmlUrl="https://mobills-clone.vercel.app/"
            repoUrl="https://github.com/kaiobrunobm/mobills-clone"
          />
          <ProjectCard
            name="Mobills Clone"
            description="Mobills is a website and app that take care of your finance"
            logoUrl="/mobills-md-logo.svg"
            htmlUrl="https://mobills-clone.vercel.app/"
            repoUrl="https://github.com/kaiobrunobm/mobills-clone"
          />
          <ProjectCard
            name="Mobills Clone"
            description="Mobills is a website and app that take care of your finance"
            logoUrl="/mobills-md-logo.svg"
            htmlUrl="https://mobills-clone.vercel.app/"
            repoUrl="https://github.com/kaiobrunobm/mobills-clone"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
