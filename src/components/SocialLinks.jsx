import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social">
      <a href="https://github.com/SudipKhatri036" target="_blank">
        <div className="social-btn color-github">
          <p className=" social-font">Github</p>
          <div>
            <FaGithub />
          </div>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/sudip-khatri-a72a6a27b/"
        target="_blank"
      >
        <div className="social-btn color-linkedin">
          <p className="social-font ">Linkedin</p>
          <div>
            <FaLinkedin />
          </div>
        </div>
      </a>
      <a href="https://www.instagram.com/sudip_khattri1/" target="_blank">
        <div className="social-btn color-instagram">
          <p className="social-font">Instagram</p>
          <div>
            <FaInstagram />
          </div>
        </div>
      </a>
    </div>
  );
}

export default SocialLinks;
