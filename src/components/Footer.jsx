import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{profile.name}</strong>
        <p>Game prototypes, Blender tools, creative systems.</p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.youtube} target="_blank" rel="noreferrer">
          YouTube
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}

export default Footer;
