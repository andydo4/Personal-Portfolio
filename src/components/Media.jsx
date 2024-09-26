import { socialMedia } from "../constants";

const Media = () => {
  return (
    <div className="flex space-x-4">
      {socialMedia.map((media, index) => (
        <a
          key={index}
          href={
            media.alt === "linkedin logo"
              ? "https://www.linkedin.com/in/andrew-do-8a268a268/"
              : media.alt === "github logo"
              ? "https://github.com/andydo4"
              : "https://www.behance.net/andy-do"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white-400 
          flex justify-center items-center shadow-md hover:bg-hot-pink 
          transition-shadow duration-300"
        >
          <img src={media.src} alt={media.alt} className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
};

export default Media;
