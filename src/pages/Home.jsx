import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__img-cont">
        <img src="./heroimg.jpg" alt="Developer coding" />
      </div>

      <div className="hero__content-cont">
        <div>
          <h1 className="hero__greet">
            Hey , This is <br />
            <span className="hero__hl">
              <span className="colored">Sudip</span> Khatri 👋
            </span>
          </h1>
          <h3 className="hero__post">A Frontend Developer</h3>
        </div>
        <div className="hero__line"></div>

        <p className="hero__about">
          I’m Passionate about coding an started with HTML, CSS and JavaScript.
          Now i’m expanding my skills to ecompass full stack development.
        </p>

        <button className="btn" onClick={() => navigate("/projects")}>
          Projects <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Home;
