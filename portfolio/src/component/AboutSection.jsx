const AboutSection = () => {
  return (
    <>
      <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-slate-900/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-400 first-letter:mr-3 first-letter:float-left">
          Web development for me isn’t just about writing
          code; it’s about crafting solutions that work
          flawlessly on both the front and back ends. I
          pride myself on delivering results that balance
          aesthetics with functionality, ensuring that users
          get an experience they can trust.
        </p>
        <p className="indent-14">
          Drawing from my background in healthcare, I’ve
          honed my problem-solving skills to a fine edge.
          Where it’s no longer about diagnosing a patient;
          it’s about diagnosing a digital challenge and
          prescribing the right solution. If you’re looking
          for someone with a blend of technical expertise
          and a track record of tackling tough challenges
          head-on, you’ve found your developer. Let’s build
          something remarkable together.
        </p>
      </div>
    </>
  );
};

export default AboutSection;
