import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/project"
        );

        if (!response.ok) {
          throw new Error(
            `Unable to fetch projects ${response.status}`
          );
        }
        const data = await response.json();
        if (isMounted) {
          setProjects(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(projects);
  return (
    <>
      <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-slate-900/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        {projects.map((project) => {
          return (
            <ol className="group/list" key={project.id}>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        href={project.url}
                        className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="">
                          {project.name} {"  "}
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap mt-2">
                      {project.techStack.map((tech) => (
                        <li
                          className="mr-1.5 mt-2"
                          key={tech.tech.id}
                        >
                          <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10 ">
                            {tech.tech.name.toUpperCase()}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={project.img}
                    alt=""
                    className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  />
                </div>
              </li>
            </ol>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
