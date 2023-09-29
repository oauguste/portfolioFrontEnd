import Login from "./Login";
import { useAuth } from "../UserAuth";
import Profile from "./Profile";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Projects from "./Projects";
import { useEffect } from "react";
const NavBar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const setActive = (id) => {
      navLinks.forEach((link) => {
        const indicator = link.querySelector(
          ".nav-indicator"
        );
        const text = link.querySelector(".nav-text");

        if (link.getAttribute("href") === `#${id}`) {
          indicator.classList.add("w-16", "bg-slate-200");
          text.classList.add("text-slate-200");
        } else {
          indicator.classList.remove(
            "w-16",
            "bg-slate-200"
          );
          text.classList.remove("text-slate-200");
        }
      });
    };

    const handleScroll = () => {
      let closestSection = null;

      sections.forEach((section) => {
        const top =
          section.offsetTop - window.innerHeight * 0.3; // 30% from the top
        const bottom =
          section.offsetTop + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY <= bottom
        ) {
          closestSection = section;
        }
      });

      if (closestSection) {
        setActive(closestSection.id);
      }
    };

    // Initially set "about" as the default active section
    setActive("about");

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-400 sm:text-5xl">
            Osnac Auguste
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-400 sm:text-xl">
            Web Developer
          </h2>
          <p className="max-w-xs mt-4 leading-normal">
            I build accessible, inclusive products and
            digital web experiences for the web.
          </p>
          <nav className="hidden lg:block">
            <ul className="mt-16 w-max">
              <li>
                <a
                  className="flex items-center py-3 group nav-link"
                  href="#about"
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    ABOUT
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center py-3 group nav-link"
                  href="#experience"
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center py-3 group nav-link"
                  href="#projects"
                >
                  <span className="w-8 h-px mr-4 transition-all nav-indicator bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold tracking-widest uppercase nav-text text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex items-center mt-8 ml-1">
          <li className="mr-5 text-xs navs">
            <a
              className="block hover:text-slate-200"
              href="https://github.com/oauguste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-github"
                aria-hidden="true"
              ></i>
              <span></span>
            </a>
          </li>
          <li className="mr-5 text-xs navs">
            <a
              className="block hover:text-slate-200"
              href="https://www.linkedin.com/in/osnac-auguste-34495b209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-linkedin"
                aria-hidden="true"
              ></i>
              <span></span>
            </a>
          </li>
        </ul>
      </header>
      <main
        id="content"
        className="pt-24 lg:w-1/2 lg:py-24"
      >
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <AboutSection />
        </section>
        <section
          id="experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <ExperienceSection />
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default NavBar;
