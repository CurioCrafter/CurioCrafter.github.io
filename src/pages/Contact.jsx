import { profile } from "../data/portfolio";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Resume", value: "Andrew_Rainsberger_Game_Developer_Resume.pdf", href: profile.resume },
  { label: "GitHub", value: "github.com/CurioCrafter", href: profile.github },
  { label: "YouTube", value: "youtube.com/@CurioCrafter-r1w", href: profile.youtube },
  { label: "LinkedIn", value: "linkedin.com/in/andrew-rainsberger-2b9b721b1", href: profile.linkedin },
];

function Contact() {
  return (
    <main className="page-shell compact">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Available for junior game, tools, and creative technology roles.</h1>
        <p>
          Best fit: teams that value game prototyping, Python/Blender tooling, practical UI,
          and fast iteration from rough idea to working vertical slice.
        </p>
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
