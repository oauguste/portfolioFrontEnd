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
          {/* Project 0 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="">Anime Blog</span>
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
                      Javascript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Tailwind Css
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      SqlLite
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      NodeJs
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Express
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://res.cloudinary.com/dkfe00sfi/image/upload/v1695929077/Screenshot_2023-09-28_at_3.23.24_PM_rvabt1.png"
                }
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <a
              href="https://github.com/YOUR_USERNAME/WHERES_WALDO_REPO_LINK"
              className="inline-block px-4 py-2 mt-5 text-sm font-medium transition duration-150 ease-in-out border rounded-full text-slate-200 border-slate-200/10 hover:text-teal-300 hover:border-teal-300 focus:outline-none focus:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Github
            </a>
          </li>
          {/* Project 1 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
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
                      Javascript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Css
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
                src={
                  "https://res.cloudinary.com/dkfe00sfi/image/upload/v1695155350/beach-4bd67423_j1qme2.png"
                }
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <a
              href="https://github.com/YOUR_USERNAME/WHERES_WALDO_REPO_LINK"
              className="inline-block px-4 py-2 mt-5 text-sm font-medium transition duration-150 ease-in-out border rounded-full text-slate-200 border-slate-200/10 hover:text-teal-300 hover:border-teal-300 focus:outline-none focus:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Github
            </a>
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
                      Javacript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Pug
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Css
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
                src={
                  "https://res.cloudinary.com/dkfe00sfi/image/upload/v1695212547/Screenshot_2023-09-20_at_8.17.45_AM_jfvyql.png"
                }
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <a
              href="https://github.com/YOUR_USERNAME/WHERES_WALDO_REPO_LINK"
              className="inline-block px-4 py-2 mt-5 text-sm font-medium transition duration-150 ease-in-out border rounded-full text-slate-200 border-slate-200/10 hover:text-teal-300 hover:border-teal-300 focus:outline-none focus:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Github
            </a>
          </li>
          {/* Project 3 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://inventoryapplication-production-4b1c.up.railway.app/catalog"
                    }
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
                      Javacript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Pug
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Css
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
                src={
                  "https://res.cloudinary.com/dkfe00sfi/image/upload/v1695905266/Screenshot_2023-09-28_at_8.46.54_AM_r8ypom.png"
                }
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <a
              href="https://github.com/YOUR_USERNAME/WHERES_WALDO_REPO_LINK"
              className="inline-block px-4 py-2 mt-5 text-sm font-medium transition duration-150 ease-in-out border rounded-full text-slate-200 border-slate-200/10 hover:text-teal-300 hover:border-teal-300 focus:outline-none focus:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Github
            </a>
          </li>

          {/* Project 4 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="">
                      My Portfolio Site
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  The portfolio site is a showcase of
                  various projects, each thoughtfully laid
                  out in a grid structure. It seamlessly
                  integrates a responsive design, where each
                  project tile responds to user interactions
                  with subtle yet engaging transition
                  effects.
                </p>
                <ul className="flex flex-wrap mt-2">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Javascript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Tailwind Css
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://res.cloudinary.com/dkfe00sfi/image/upload/v1695212793/Screenshot_2023-09-20_at_8.24.00_AM_u82j4i.png"
                }
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <a
              href="https://github.com/YOUR_USERNAME/WHERES_WALDO_REPO_LINK"
              className="inline-block px-4 py-2 mt-5 text-sm font-medium transition duration-150 ease-in-out border rounded-full text-slate-200 border-slate-200/10 hover:text-teal-300 hover:border-teal-300 focus:outline-none focus:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Github
            </a>
          </li>
          {/* Project 5 */}
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href=""
                    className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="">
                      Find the Weather{" "}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  ClearSky, a dynamic weather forecasting
                  platform, was crafted leveraging the
                  potent capabilities of React.js and the
                  WeatherAPI. Users can effortlessly search
                  for weather conditions of a specific
                  locale.
                </p>
                <ul className="flex flex-wrap mt-2">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Javascript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Css
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                      Weather API
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src={
                  "https://res.cloudinary.com/dkfe00sfi/image/upload/v1695156847/Screenshot_2023-09-19_at_4.53.17_PM_gr5xdt.png"
                }
                alt=""
                className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
            <a
              href="https://github.com/YOUR_USERNAME/WHERES_WALDO_REPO_LINK"
              className="inline-block px-4 py-2 mt-5 text-sm font-medium transition duration-150 ease-in-out border rounded-full text-slate-200 border-slate-200/10 hover:text-teal-300 hover:border-teal-300 focus:outline-none focus:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Github
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Projects;
