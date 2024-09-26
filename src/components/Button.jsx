const Button = ({ label, email }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="relative flex justify-center items-center gap-2 px-10 py-5 border-2 border-black font-coolvetica text-3xl 
      leading-none text-black bg-neon-green overflow-hidden transition-all duration-300 group rounded-full"
    >
      <span className="relative z-10">{label}</span>
      <div
        className="absolute inset-0 bg-gradient-to-r from-hot-pink via-neon-purple to-neon-green w-full h-full transform -translate-x-full 
        transition-transform duration-500 group-hover:translate-x-0"
      ></div>
    </a>
  );
};

export default Button;
