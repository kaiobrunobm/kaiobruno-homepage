import Image from "next/image";

const Home = () => {
  return (
    <main className="h-[95vh] w-full">
      <section className=" flex flex-col items-center pt-20 px-6">
        <Image
          src="/my-photo.png"
          alt="Kaio Bruno photo"
          width={380}
          height={380}
          className="rounded-full outline-dashed outline-4 outline-offset-4 outline-primary "
        />
        <div className="max-w-3xl border-t-8 border-dashed border-primary mt-16">
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
