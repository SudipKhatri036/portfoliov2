import { FaHome } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillSun } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";
import { BsClipboardCheckFill } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Sudip <span className="logo__special">Khatri</span>
      </div>

      <nav className="nav">
        <ul className="nav__lists">
          <li>
            <a href="#" className="nav__links">
              <FaHome />
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              <BsClipboardCheckFill />
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              <FaSquarePhone />
            </a>
          </li>
          <li>
            <a href="#" className="nav__links">
              <AiFillFilePdf />
            </a>
          </li>

          <li>
            <a href="#" className="nav__links">
              <AiFillSun />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
