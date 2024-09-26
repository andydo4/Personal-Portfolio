import { useState } from "react";
import empty3 from "../assets/design/empty3.png";
import skillscard from "../assets/design/skillscard.png";
import SkillsCard from "../components/SkillsCard";
import { languages } from "../constants";
import SkillDetails from "../components/SkillDetails";

const Skills = () => {
  const [bigSkillImg, setBigSkillImg] = useState(languages[0].logo);
  const selectedLanguage = languages.find((lang) => lang.logo === bigSkillImg);

  return (
    <section id="skills" className="overflow-hidden">
      <div
        className="min-h-screen w-screen bg-cover bg-center flex sm:flex-col justify-center items-center relative"
        style={{
          //height: '100vh',
          backgroundImage: `url(${empty3})`,
        }}
      >
        {/* <h1 className="text-8xl font-coolvetica relative z-10">
            hello
          </h1> */}
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-hero bg-cover bg-center">
          <div
            className="relative flex flex-row sm:flex-col items-center space-y-4 
            sm:space-x-10"
          >
            <div className="flex flex-col items-center">
              <img
                src={bigSkillImg}
                alt="skills card"
                className="object-contain relative z-20 w-3/4 max-w-[300px]"
              />
            </div>
          </div>
          <div className="absolute w-[400px] h-[400px] bg-black rounded-full blur-lg opacity-5 z-10"></div>
          <div className="absolute w-[350px] h-[350px] bg-black rounded-full blur-lg opacity-5 z-10"></div>
          <div className="absolute w-[300px] h-[300px] bg-black rounded-full blur-lg opacity-5 z-10"></div>
        </div>
        <img
          src={skillscard}
          alt="SkillsCard"
          className="absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0"
        />

        <div className="grid grid-cols-4 gap-4 absolute bottom-30 left-12 p-4">
          {languages.map((language, index) => (
            <SkillsCard
              key={index}
              imgURL={language}
              changeSkillImage={setBigSkillImg}
              bigSkillImg={bigSkillImg}
            />
          ))}
        </div>
        <div className="absolute right-16">
          {selectedLanguage && (
            <SkillDetails selectedLanguage={selectedLanguage} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
