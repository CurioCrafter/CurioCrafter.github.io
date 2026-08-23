import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <span className="footer-mark">AR</span>
        <div>
          <strong>{profile.name}</strong>
          <p>VR game systems, Blender Python tools, and real-time asset workflows.</p>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/projects">Selected work</Link>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
      <p className="footer-note">Dixon, Missouri / Open to remote and relocation conversations</p>
    </footer>
  );
}

export default Footer;
