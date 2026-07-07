import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Resume", value: "Andrew_Rainsberger_Game_Developer_Resume.pdf", href: profile.resume },
  { label: "GitHub", value: "github.com/CurioCrafter", href: profile.github },
  { label: "YouTube", value: "youtube.com/@CurioCrafter-r1w", href: profile.youtube },
  { label: "LinkedIn", value: "linkedin.com/in/andrew-rainsberger-2b9b721b1", href: profile.linkedin },
];

const contactFocus = [
  {
    title: "Junior game and tools roles",
    fit: "Gameplay prototypes, browser demos, HUD/UI, Python/Blender tooling, technical art support.",
    proof: ["Tidefront Studio", "Ocean Drift", "Claude Citizen"],
  },
  {
    title: "Technical art and tooling",
    fit: "Blender add-ons, visual QA artifacts, asset workflows, Python scripting, and editor surfaces.",
    proof: ["Blender Workflow", "TerrainForge", "Asset Catalog"],
  },
  {
    title: "Creative technology work",
    fit: "Interactive WebGL, generative audio/visual systems, automation surfaces, and practical utilities.",
    proof: ["Destimmer", "CodexForWorkflow", "SongDeconstructor"],
  },
];

function Contact() {
  return (
    <main className="page-shell compact">
      <section className="contact-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Available for junior game, tools, and creative technology roles.</h1>
          <p>
            Best fit: teams that value game prototyping, Python/Blender tooling, practical UI,
            and fast iteration from rough idea to working vertical slice.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Email Andrew
            </a>
            <Link className="button secondary" to="/projects">
              Review proof
            </Link>
            <Link className="button ghost" to="/resume">
              Resume path
            </Link>
          </div>
        </div>
        <aside className="contact-availability" aria-label="Availability summary">
          <span>Best outreach</span>
          <strong>Junior roles, portfolio proof, Blender/game tools</strong>
          <p>Dixon, Missouri. Remote-friendly for software, game, tooling, and creative technology work.</p>
        </aside>
      </section>

      <section className="contact-focus-section" aria-label="Best contact topics">
        <div>
          <p className="eyebrow">Best fit</p>
          <h2>Contact paths that match the work.</h2>
        </div>
        <div className="contact-focus-grid">
          {contactFocus.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.fit}</p>
              <div className="proof-points">
                {item.proof.map((proof) => (
                  <span key={proof}>{proof}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-heading" aria-label="Direct links">
        <p className="eyebrow">Direct links</p>
        <h2>Open the proof, then send the specific role or project angle.</h2>
      </section>

      <section className="contact-list">
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}

export default Contact;
