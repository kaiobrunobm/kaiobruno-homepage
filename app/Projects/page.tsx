import Projects from "./Projects/Projects";
import { projects as projectsObject } from "./projects";

const page = () => {
  return (
    <main className="h-full w-full pt-20 pb-10">
      <section className="h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl pb-10 text-text md:text-6xl">
          Projects
        </h1>
        <Projects />
      </section>
    </main>
  );
};

export default page;
