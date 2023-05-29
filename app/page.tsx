import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <main className="h-screen">
      <section className="h-full p-3 flex flex-col items-center justify-center">
        <p className="max-w-md text-center text-xl font-bold">
          <div className="text-3xl mb-3">Hi I&apos;m Kaio Bruno</div> A junior
          web developer passionate with technology, art and the world!
        </p>
      </section>
    </main>
  );
};

export default Home;
