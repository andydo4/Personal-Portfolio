import logov1 from "../assets/design/logov1.png";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import shape2 from "../assets/design/shape2.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* <a href="/" className="text-3xl font-bold bg-gradient-to-r 
            from-hot-pink via-neon-purple to-neon-green bg-clip-text 
            text-transparent">
                andrew do
            </a> */}
        <a href="/">
          <img
            src={shape2}
            alt="logo"
            width={70}
            height={70}
            className="m-0 w-[70px] h-[70px]"
          />
        </a>
        <ul
          className="flex-1 flex justify-end items-center 
            gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-coolvetica leading-normal
                         text-3xl text-white-400 hover:text-hot-pink transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block" onClick={toggleDropdown}>
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="2.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div>
      </nav>
      {isOpen && (
        <ul
          className={`max-lg:block absolute right-0 mt-2 w-full text-center bg-neon-purple rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-2 text-lg font-coolvetica text-white hover:bg-pale-blue
                                transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
