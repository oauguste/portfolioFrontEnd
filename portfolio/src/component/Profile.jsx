import { useState } from "react";

const Profile = () => {
  const [techData, setTechData] = useState({
    name: "",
    websiteURL: "",
  });
  const [projectTechData, setProjectTechData] = useState({
    projectId: "",
    techId: "",
  });

  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    img: "",
    url: "",
    gitHub: "",
  });

  const [jobData, setJobData] = useState({
    name: "",
    position: "",
    description: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleChange = (e) => {
    const stateType = e.target.getAttribute("data-state");

    switch (stateType) {
      case "technology":
        setTechData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        console.log(techData);
        break;
      case "project":
        setProjectData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        break;
      case "job":
        setJobData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        break;
      case "project-tech":
        setProjectTechData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        break;
      default:
        console.log("Unknown state type");
    }
  };
  const handleFetch = async (url, data, setData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status}`
        );
      }

      const responseData = await response.json();
      console.log("Server response:", responseData);

      setData({
        ...Object.keys(data).reduce((obj, key) => {
          obj[key] = "";
          return obj;
        }, {}),
      });
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formType =
      e.currentTarget.getAttribute("data-form");

    switch (formType) {
      case "technology":
        if (
          Object.values(techData).every(
            (value) => value === "" || value === null
          )
        ) {
          console.error(
            "All properties in techData are either empty strings or null."
          );
          return;
        }
        await handleFetch(
          "http://localhost:3000/tech/submit",
          techData,
          setTechData
        );
        break;

      case "project":
        if (
          Object.values(projectData).every(
            (value) => value === "" || value === null
          )
        ) {
          console.error(
            "All properties in projectData are either empty strings or null."
          );
          return;
        }
        await handleFetch(
          "http://localhost:3000/project/submit",
          projectData,
          setProjectData
        );
        break;

      case "job":
        if (
          Object.values(jobData).every(
            (value) => value === "" || value === null
          )
        ) {
          console.error(
            "All properties in jobData are either empty strings or null."
          );
          return;
        }
        await handleFetch(
          "http://localhost:3000/job/submit",
          jobData,
          setJobData
        );
        break;

      case "project-tech": {
        if (!projectTechData) {
          console.error(
            "There's no projectTechData to send"
          );
          return;
        }

        // Convert projectId and techId to numbers
        const parsedProjectTechData = {
          ...projectTechData,
          projectId: parseInt(
            projectTechData.projectId,
            10
          ),
          techId: parseInt(projectTechData.techId, 10),
        };

        // Check if parsed values are valid numbers
        if (
          isNaN(parsedProjectTechData.projectId) ||
          isNaN(parsedProjectTechData.techId)
        ) {
          console.error("Invalid projectTechData values");
          return;
        }

        await handleFetch(
          "http://localhost:3000/projectTech/submit",
          parsedProjectTechData, // Use the parsed data here
          setProjectTechData
        );
        break;
      }
    }
  };

  return (
    <div className="flex flex-col flex-wrap gap-4 p-4 lg:ml-6">
      <header className="mb-4">
        <h1 className="text-lg md:text-xl">
          Welcome, Osnac
        </h1>
      </header>

      <form
        data-form="technology"
        className="flex flex-col w-full gap-3 p-3 border rounded md:max-w-md"
        onSubmit={handleClick}
      >
        <h2 className="text-center bg-gray-700 rounded">
          Enter Technology
        </h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="name"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Name:
          </label>
          <input
            data-state="technology"
            value={techData.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="tech name"
            className="w-full rounded"
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="websiteURL"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Website:
          </label>
          <input
            data-state="technology"
            value={techData.websiteURL}
            onChange={handleChange}
            type="text"
            name="websiteURL"
            id="websiteURL"
            placeholder="tech url"
            className="w-full rounded"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="p-1 border rounded "
          >
            Submit
          </button>
        </div>
      </form>

      <form
        onSubmit={handleClick}
        data-form="project"
        className="flex flex-col w-full gap-3 p-3 border rounded md:max-w-md"
      >
        <h2 className="text-center bg-gray-700 rounded">
          Enter Project Details
        </h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="name"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Name:
          </label>
          <input
            value={projectData.name}
            onChange={handleChange}
            data-state="project"
            type="text"
            name="name"
            id="name"
            placeholder="project name"
            className="w-full rounded"
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="description"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Desc:
          </label>
          <input
            value={projectData.description}
            onChange={handleChange}
            data-state="project"
            type="text"
            name="description"
            id="description"
            placeholder="description"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="img"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Img:
          </label>
          <input
            value={projectData.img}
            onChange={handleChange}
            data-state="project"
            type="text"
            name="img"
            id="img"
            placeholder="img url"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="url"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Url:
          </label>
          <input
            value={projectData.url}
            onChange={handleChange}
            data-state="project"
            type="text"
            name="url"
            id="url"
            placeholder="project url"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="gitHub"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Github:
          </label>
          <input
            value={projectData.gitHub}
            onChange={handleChange}
            data-state="project"
            type="text"
            name="gitHub"
            id="gitHub"
            placeholder="GitHub url"
            className="w-full rounded"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="p-1 border rounded "
          >
            Submit
          </button>
        </div>
      </form>
      {/* Job */}
      <form
        onSubmit={handleClick}
        data-form="job"
        className="flex flex-col w-full gap-3 p-3 border rounded md:max-w-md"
      >
        <h2 className="text-center bg-gray-700 rounded">
          Enter Work Detail
        </h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="name"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Name:
          </label>
          <input
            value={jobData.name}
            onChange={handleChange}
            data-state="job"
            type="text"
            name="name"
            id="name"
            placeholder="job name"
            className="w-full rounded"
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="position"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Position:
          </label>
          <input
            value={jobData.position}
            onChange={handleChange}
            data-state="job"
            type="text"
            name="position"
            id="position"
            placeholder="job position"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="description"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Desc:
          </label>
          <input
            value={jobData.description}
            onChange={handleChange}
            data-state="job"
            type="text"
            name="description"
            id="description"
            placeholder="job position"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="dateStart"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Start date:
          </label>
          <input
            value={jobData.dateStart}
            onChange={handleChange}
            data-state="job"
            type="date"
            name="dateStart"
            id="dateStart"
            placeholder="job position"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="dateEnd"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            End date:
          </label>
          <input
            value={jobData.dateEnd}
            onChange={handleChange}
            data-state="job"
            type="date"
            name="dateEnd"
            id="dateEnd"
            placeholder="job position"
            className="w-full rounded"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="p-1 border rounded "
          >
            Submit
          </button>
        </div>
      </form>
      {/* Project Tech */}
      <form
        onSubmit={handleClick}
        data-form="project-tech"
        className="flex flex-col w-full gap-3 p-3 border rounded md:max-w-md"
      >
        <h2 className="text-center bg-gray-700 rounded">
          Enter Project-Tech Relationship
        </h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="projectId"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Project #:
          </label>
          <input
            value={projectTechData.projectId}
            onChange={handleChange}
            data-state="project-tech"
            type="number"
            name="projectId"
            id="projectId"
            placeholder="project Id"
            className="w-full rounded"
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="techId"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Tech #:
          </label>
          <input
            value={projectTechData.techId}
            onChange={handleChange}
            data-state="project-tech"
            type="number"
            name="techId"
            id="techId"
            placeholder="tech url"
            className="w-full rounded"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="p-1 border rounded "
          >
            Submit
          </button>
        </div>
      </form>
      {/* <form className="flex flex-col w-full gap-3 p-3 border rounded md:max-w-md">
        <h2 className="text-center bg-gray-700 rounded">
          Enter Emails
        </h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="emailName"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            Full name:
          </label>
          <input
            type="text"
            name="name"
            id="emailName"
            placeholder="name"
            className="w-full rounded"
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="email"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@.com"
            className="w-full rounded"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <label
            htmlFor="message"
            className="mb-1 md:mb-0 md:w-1/4"
          >
            message:
          </label>
          <input
            type="textarea"
            name="message"
            id="message"
            placeholder="message"
            className="w-full rounded"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="p-1 border rounded "
          >
            Submit
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Profile;
