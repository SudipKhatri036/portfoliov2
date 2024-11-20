import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch("/data/skills.json");

        if (!resp.ok) {
          throw new Error("Error Getting Skills");
        }

        const data = await resp.json();
        console.log("🚀 ~ getSkills ~ data:", data);

        setSkills(data);
      } catch (error) {
        console.log("🚀 ~ getSkills ~ error:", error);

        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getSkills();
  }, []);

  return (
    <section className="skills container">
      {isLoading && <Loader />}
      {error && <p>Something Went Wrong! {error}</p>}
      {skills?.map((skill) => {
        return (
          <div className="skill-wrapper" key={skill.id}>
            <div className="skill">
              <img src={skill.img} alt={`${skill.title} png`} />
            </div>
            <h3>{skill.title}</h3>
          </div>
        );
      })}
    </section>
  );
}

export default Skills;
