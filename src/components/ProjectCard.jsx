import { languages } from "../constants";
import pytorch from "../assets/languages/pytorch.png";
import flaskwhite from "../assets/languages/flask-white.png";

const ProjectCard = ({ title, source, tools }) => {
  return (
    <div
      className="p-1 bg-gradient-to-b from-hot-pink via-neon-purple to-pale-blue 
    rounded-[30px]"
    >
      <div
        className="flex flex-col w-[450px] h-[325px] bg-[#0e0e0e] 
      rounded-[30px] border-[3px] border-transparent shadow-[0px_4px_4px_#00000040] 
      p-6 justify-between"
      >
        {/* Title */}
        <div className="text-white font-coolvetica text-4xl mb-4">{title}</div>

        {/* Tools section */}
        <div className="flex space-x-2 mb-6">
          {tools.map((tool, index) => {
            if (tool.name === "PyTorch") {
              return (
                <img key={index} src={pytorch} alt="pytorch" className="h-8" />
              );
            }
            if (tool.name === "Flask") {
              return (
                <img
                  key={index}
                  src={flaskwhite}
                  alt="pytorch"
                  className="h-8"
                />
              );
            }

            const language = languages.find((lang) => lang.name === tool.name);
            return language ? (
              <img
                key={index}
                src={language.logo}
                alt={tool.name}
                className="h-8"
              />
            ) : (
              <div
                key={index}
                className="w-8 h-8 bg-gray-700 flex items-center justify-center text-white"
              >
                ?
              </div>
            );
          })}
        </div>

        {/* View Code Button */}
        <div className="flex justify-start mt-auto">
          <a
            href={source.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-auto text-center text-black bg-neon-green py-2 px-4 rounded-full font-coolvetica hover:bg-hot-pink transition-colors duration-300"
          >
            {source.label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
