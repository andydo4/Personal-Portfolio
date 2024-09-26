const SkillDetails = ({ selectedLanguage }) => {
  return (
    <div className="text-right font-coolvetica mt-4 max-w-2xl px-2">
      <h2 className="text-8xl text-hot-pink">{selectedLanguage.name}</h2>
      <h1 className="text-4xl text-pale-blue">{selectedLanguage.project}</h1>
      <p className="mt-2 text-3xl font-montserrat text-white-400">
        {selectedLanguage.description}
      </p>
    </div>
  );
};

export default SkillDetails;
