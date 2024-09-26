const SkillsCard = ({ imgURL, changeSkillImage, bigSkillImg }) => {
  const handleClick = () => {
    if (bigSkillImg !== imgURL.logo) {
      changeSkillImage(imgURL.logo);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
      ${
        bigSkillImg === imgURL.logo
          ? "border-hot-pink border-4"
          : "border-transparent border-4"
      } 
      cursor-pointer p-2 bg-white-400 shadow-md w-20 h-20 sm:w-24 sm:h-24 `}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center bg-card 
        bg-center bg-cover h-full w-full rounded-md"
      >
        <img
          src={imgURL.logo}
          alt={imgURL.name}
          className="object-contain w-14 h-14"
        />
      </div>
    </div>
  );
};

export default SkillsCard;
