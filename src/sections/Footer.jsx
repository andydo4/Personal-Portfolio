import shape2 from "../assets/design/shape2.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer id="contact" className="max-container">
      <div
        className="flex justify-between items-start gap-20 
      flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={shape2}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white-400 rounded-full hover:bg-hot-pink transition-shadow duration-300"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 justify-between lg:gap-10 
        gap-20 flex-wrap"
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className="font-coolvetica text-3xl leading-normal 
              font-medium mb-6 text-white"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-coolvetica text-xl leading-normal 
                  text-white-400 hover:text-hot-pink"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between text-white-400 mt-24 max-sm:flex-col 
      max-sm:items-center"
      >
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <p>Andrew Do 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
