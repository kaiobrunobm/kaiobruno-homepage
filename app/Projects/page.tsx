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
    <main className="h-full py-10">
      <section className="h-full flex justify-center items-center">
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
