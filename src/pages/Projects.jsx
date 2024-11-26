import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch("/data/projects.json");

        if (!resp.ok) {
          throw new Error("Error Getting Skills");
        }

        const data = await resp.json();

        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getSkills();
  }, []);

  const maxPage = Math.ceil(projects.length / 6);

  function handlePageNum(indx) {
    setCurrentPage(indx);
  }

  function handleNxt() {
    if (currentPage !== maxPage) setCurrentPage((pageNum) => pageNum + 1);
  }

  function handlePrev() {
    if (currentPage !== 1) setCurrentPage((pageNum) => pageNum - 1);
  }

  return (
    <section className="container projects">
      <div className="projects-wrapper">
        {isLoading && <Loader />}
        {error && <p className="error">Something Went Wrong! {error}</p>}
        {projects
          ?.slice(6 * (currentPage - 1), currentPage > 1 ? 6 * currentPage : 6)
          .map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
      </div>
      {maxPage > 1 && (
        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          handlePageNum={handlePageNum}
          handleNxt={handleNxt}
          handlePrev={handlePrev}
        />
      )}
    </section>
  );
}

export default Projects;
