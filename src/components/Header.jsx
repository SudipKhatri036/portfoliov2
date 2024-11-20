import { FaHome } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";
import { BsClipboardCheckFill, BsTools } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

import { NavLink, useNavigate } from "react-router-dom";

function Header({ setIsDarkMode, isDarkMode }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-wrapper container">
        <div className="logo" onClick={() => navigate("/")}>
          Sudip <span className="logo__special">Khatri</span>
        </div>

        <nav className="nav">
          <ul className="nav__lists">
            <li>
              <NavLink to="/home" className="nav__links">
                <FaHome title="Home" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/skills" className="nav__links">
                <BsTools title="Skills" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className="nav__links">
                <BsClipboardCheckFill title="Projects" />
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="nav__links">
                <FaSquarePhone title="Contact" />
              </NavLink>
            </li>
            <li>
              <a
                href="/Sudip-Khatri-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__links"
              >
                <AiFillFilePdf title="CV" />
              </a>
            </li>

            <li>
              <button
                className="nav__links"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <AiFillSun /> : <AiFillMoon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
