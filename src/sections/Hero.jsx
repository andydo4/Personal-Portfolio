import empty1 from "../assets/design/empty1.png";
import logov1 from "../assets/design/logov1.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = "hii, im andrew do_";
  const [displayText, setDisplayText] = useState("");
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const blinkingInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 700);

    return () => {
      clearInterval(typingInterval);
      clearInterval(blinkingInterval);
    };
  }, []);

  const textParts = displayText.split("");

  const styledText = textParts.map((char, index) => {
    if (index < 3) {
      return (
        <span key={index} className="text-hot-pink">
          {char}
        </span>
      );
    } else if (index === textParts.length - 1) {
      return (
        <span
          key={index}
          className={`inline-block ${
            isBlinking ? "opacity-100" : "opacity-0"
          } text-neon-green`}
        >
          {char}
        </span>
      );
    } else {
      return (
        <span key={index} className="text-white">
          {char}
        </span>
      );
    }
  });

  return (
    <section id="home" className="overflow-hidden">
      <div
        className="h-screen w-screen bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${empty1})` }}
      >
        <h1 className="text-8xl font-coolvetica relative z-10">{styledText}</h1>
        <img
          src={logov1}
          alt="Logo"
          className="absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0"
        />
      </div>
    </section>
  );
};

export default Hero;
