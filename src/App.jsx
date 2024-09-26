import { Nav } from "./components";
import { Hero, About, Skills, Projects, Footer } from "./sections";

export default function App() {
  return (
    <main className="relative bg-primary text-white-400">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
      <section className="">
        <Skills />
      </section>
      <section className="">
        <Projects />
      </section>
      <section className="padding-x padding-t pb-8 bg-primary">
        <Footer />
      </section>
    </main>
  );
}
