import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";

const navItems = [
  { to: "/projects", label: "Work" },
  { to: "/games", label: "Games" },
  { to: "/software", label: "Blender + Tools" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <NavLink className="brand-mark" to="/" aria-label="Andrew Rainsberger home">
        <span className="brand-initials">AR</span>
        <span className="brand-copy">
          <strong>{profile.name}</strong>
          <small>Game developer / VR + Blender tools</small>
        </span>
      </NavLink>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={isOpen ? "nav-links is-open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink className="nav-contact" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
