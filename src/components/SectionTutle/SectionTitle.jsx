const SectionTitle = ({ heading, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto py-10">
      <h2 className=" text-5xl font-bold uppercase tracking-widest">
        {heading}
      </h2>
      <p className="mt-4 text-lg">{description}</p>
    </div>
  );
};

export default SectionTitle;
