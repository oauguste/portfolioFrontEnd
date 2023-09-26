const Projects = () => {
  return (
    <>
      <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-slate-900/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {/* Project 1 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    href=""
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="">Where’s Waldo</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Interactive photo-tagging application
                  inspired by the classic Where’s Waldo?
                  game. Users are presented with a detailed
                  photograph, and their task is to locate
                  and tag various characters hidden within
                  the image. Upon selection, the backend
                  verifies if the tagged location matches
                  the actual position of the chosen
                  character. This comprehensive project
                  encompassed both front-end interactivity
                  and backend verification, resulting in a
                  seamless and engaging user experience.
                </p>
                <ul className="flex flex-wrap mt-2">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Firebase
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src=""
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
          {/* Project 2 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    href=""
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="">Member’s Club</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  I created the Member’s Club, a digital
                  space where members share anonymous
                  stories. Only inside can members see who
                  wrote what, while outsiders see just the
                  stories. I focused on strong user security
                  with password encryption and added special
                  access for members using a secret code.
                  There’s also an admin role for select
                  users to manage content. This was a deep
                  dive into user authentication, database
                  management, and user permissions, all
                  wrapped up in a user-friendly application.
                </p>
                <ul className="flex flex-wrap mt-2">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Node.js
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Express
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Pug
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      MongoDb
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src=""
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
          {/* Project 3 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    href=""
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="">Bike Stack</span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  I developed BikeStack, a comprehensive
                  inventory management application tailored
                  for a fictitious bicycle store. The
                  platform intuitively categorizes various
                  bicycle types and accessories, enabling
                  users to easily navigate and explore
                  specific items. Offering a seamless CRUD
                  (Create, Read, Update, Delete) experience,
                  users can effortlessly manage both
                  categories and individual bicycle
                  listings.
                </p>
                <ul className="flex flex-wrap mt-2">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Node.js
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Express
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Pug
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      MongoDb
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src=""
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Projects;
