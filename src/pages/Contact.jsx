import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Resume", value: "Game developer resume (PDF)", href: profile.resume },
  { label: "GitHub", value: "github.com/CurioCrafter", href: profile.github },
  { label: "LinkedIn", value: "Andrew Rainsberger", href: profile.linkedin },
  { label: "YouTube", value: "CurioCrafter", href: profile.youtube },
];

function Contact() {
  return (
    <main className="page-shell compact">
      <section className="contact-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s talk about a junior game or tools role.</h1>
          <p>
            I am especially interested in junior gameplay, Python/Blender tools, technical art,
            and level-authoring roles where I can build on current VR production experience.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Start an email
            </a>
            <a className="button secondary" href={profile.resume}>
              Download resume
            </a>
          </div>
        </div>
        <div className="contact-context">
          <span>Location</span>
          <strong>{profile.location}</strong>
          <p>Open to remote work and relocation conversations for the right junior opportunity.</p>
          <span>Best starting point</span>
          <strong>Shipwreck Discovery</strong>
          <Link className="text-link" to="/projects/shipwreck-discovery">
            Open the lead case study
          </Link>
        </div>
      </section>

      <section className="contact-links-section">
        <div>
          <p className="eyebrow">Direct links</p>
          <h2>Work, source, and background.</h2>
        </div>
        <div className="contact-list">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
              <small>Open</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contact;
