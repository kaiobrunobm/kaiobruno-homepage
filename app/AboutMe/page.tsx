import Image from "next/image";

const Home = () => {
  return (
    <main className="h-full">
      <section className="h-full flex flex-col items-center pt-20">
        <div>
          <Image
            src=""
            alt="Kaio Bruno photo"
            width={250}
            height={250}
            className="bg-white rounded-full outline-dashed outline-4 outline-offset-4 outline-primary relative"
          />
        </div>

        <div className="max-w-3xl mx-6 border-t-8 border-dashed border-primary mt-16">
          <p className="text-center text-dark-primary pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            culpa reiciendis aperiam porro voluptatibus sit reprehenderit,
            laborum amet mollitia?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo neque deserunt, omnis quia tempora vero
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
