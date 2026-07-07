import { NavLink } from "react-router-dom";
import { profile } from "../data/portfolio";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Work" },
  { to: "/games", label: "Games" },
  { to: "/software", label: "Tools" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand-mark" to="/" aria-label="Andrew Rainsberger home">
        <span className="brand-initials">AR</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.title}</small>
        </span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
