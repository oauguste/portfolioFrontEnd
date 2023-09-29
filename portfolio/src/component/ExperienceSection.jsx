const ExperienceSection = () => {
  return (
    <>
      <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-slate-900/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide uppercase text-slate-500 sm:col-span-2">
                2014 — 2023
              </header>
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      href={
                        "https://be-an-rt.org/what-is-respiratory-therapy/"
                      }
                      className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span className="mb-2">
                        Respiratory Therapist
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  In my role as a Respiratory Therapist at
                  these various institutions, I mastered the
                  art of precision and rapid problem-solving
                  under pressure. This unique background has
                  cultivated a meticulous attention to
                  detail and adaptability, qualities I
                  seamlessly transition into web
                  development. As you seek someone who
                  brings both technical proficiency and a
                  fresh perspective, I believe my blend of
                  experiences positions me as an invaluable
                  asset.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default ExperienceSection;
