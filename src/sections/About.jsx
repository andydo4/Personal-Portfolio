import empty2 from "../assets/design/empty2.png";
import { Button } from "../components";
import { Media } from "../components";

const About = () => {
  return (
    <section id="about" className="overflow-hidden">
      <div
        className="w-screen bg-cover bg-center flex justify-center items-center relative"
        style={{
          height: "60vh",
          backgroundImage: `url(${empty2})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full max-w-5xl flex flex-col md:flex-row 
         justify-between items-start md:items-center mx-auto p-6 text-white-400 font-coolvetica"
        >
          {/* Text section */}
          <div className="max-w-4xl text-lg md:text-2xl pr-8 ">
            <p>
              I'm a Computer Science student at the{" "}
              <span className="text-neon-purple">
                University of Central Florida
              </span>{" "}
              with a graduation date of May 2027. I'm passionate about UX/UI
              design and front-end development. Currently, I am honing my full
              stack development skills in
              <span className="text-hot-pink"> React</span>,{" "}
              <span className="text-pale-blue">Tailwind CSS</span>, and{" "}
              <span className="text-neon-green"> JavaScript</span>.
            </p>
            <br />
            <p>
              In my free time, I enjoy watching sports like Formula 1 and
              college football (Go Knights!) and I'm a huge Spider-Man fan!
            </p>
          </div>

          {/* Contact Button */}
          <div className="mt-4 md:mt-0 md:ml-12 lg:ml-20 flex flex-col items-center gap-20">
            <Button label="Contact" email="andrewhuudo@gmail.com" />
            <Media />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
