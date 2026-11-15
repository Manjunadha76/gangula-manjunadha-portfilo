import { useEffect, useRef, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Github,
  GraduationCap,
  HeartPulse,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import lungProject from "@/assets/federated-lung-research.jpg";
import foodProject from "@/assets/food-ordering-project.jpg";
import healthcareProject from "@/assets/healthcare-ai-project.jpg";
import profileImage from "@/assets/gangula-manjunadha-profile.png";

const email = "gangulamanjunadha@gmail.com";
const phone = "+91 9515083532";
const linkedin = "https://www.linkedin.com/in/manjunadha-gangula/";
const github = "https://github.com/Manjunadha76";
const resumeRequest = `mailto:${email}?subject=${encodeURIComponent("Request for Gangula Manjunadha's resume")}`;

const navigation = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  { title: "Programming languages", icon: Code2, skills: ["Java", "Python", "JavaScript"] },
  { title: "Frontend development", icon: Layers3, skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  {
    title: "Backend development",
    icon: Network,
    skills: ["Spring", "Spring Boot", "Hibernate", "JDBC", "FastAPI", "Node.js", "REST APIs"],
  },
  { title: "Databases", icon: Database, skills: ["MySQL", "Oracle SQL"] },
  {
    title: "Artificial intelligence",
    icon: Sparkles,
    skills: ["Generative AI", "NLP", "Large Language Models", "IBM watsonx.ai", "IBM Granite", "Federated Learning"],
  },
  { title: "Tools & platforms", icon: Atom, skills: ["Git", "GitHub", "VS Code", "Eclipse", "IBM Cloud"] },
  {
    title: "Computer science",
    icon: BriefcaseBusiness,
    skills: ["Object-Oriented Programming", "Data Structures", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

const projects = [
  {
    number: "01",
    category: "HEALTHCARE · PRIVACY-FIRST AI",
    title: "Lung cancer detection, without moving the data.",
    description:
      "Developing a healthcare AI system that explores early lung cancer detection through Federated Learning, keeping sensitive patient information protected.",
    points: ["Privacy-preserving machine learning", "Federated Learning architecture", "AI-informed healthcare prediction", "Web interface integration"],
    technologies: ["Python", "Machine Learning", "Federated Learning", "Healthcare AI"],
    image: lungProject,
    imageAlt: "Illustration of a protected, federated lung health research network",
    icon: HeartPulse,
  },
  {
    number: "02",
    category: "FULL STACK · JAVA",
    title: "A food delivery experience, built end to end.",
    description:
      "A full-stack food ordering application built to bring restaurant browsing, cart management and order processing together.",
    points: ["Restaurant browsing", "Shopping cart management", "REST API integration", "Relational database operations"],
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "JavaScript"],
    image: foodProject,
    imageAlt: "Food delivery application concept alongside a freshly served meal",
    icon: Code2,
  },
  {
    number: "03",
    category: "GENERATIVE AI · HEALTHCARE",
    title: "Bringing language models closer to healthcare.",
    description:
      "Exploring healthcare applications with Generative AI and Large Language Models, with model and backend integration on IBM Cloud.",
    points: ["LLM-powered information processing", "IBM Granite model exploration", "Backend application integration", "Cloud-based AI development"],
    technologies: ["IBM watsonx.ai", "IBM Granite", "NLP", "Generative AI", "IBM Cloud"],
    image: healthcareProject,
    imageAlt: "Healthcare AI workstation with a clinical neural network visualization",
    icon: Sparkles,
  },
];

const services = [
  { number: "01", title: "Full-stack web development", icon: Layers3, description: "Responsive, secure and scalable web applications—from the first screen to the data layer." },
  { number: "02", title: "Java backend development", icon: Code2, description: "Backend applications, business logic and REST APIs built with Java and Spring Boot." },
  { number: "03", title: "Frontend development", icon: Atom, description: "Accessible, considered interfaces made with React.js, HTML, CSS and JavaScript." },
  { number: "04", title: "AI application development", icon: Sparkles, description: "Intelligent applications shaped around Generative AI, LLMs, NLP and watsonx.ai." },
  { number: "05", title: "Healthcare AI solutions", icon: HeartPulse, description: "Healthcare technology focused on useful intelligence and privacy-preserving machine learning." },
  { number: "06", title: "Database development", icon: Database, description: "Relational data structures, SQL queries and dependable database operations." },
];

const experience = [
  {
    number: "01",
    role: "Generative AI Intern",
    organization: "SmartBridge · IBM Cloud",
    icon: Sparkles,
    details: [
      "Explored Generative AI, Large Language Models and prompt engineering with IBM watsonx.ai.",
      "Worked with IBM Granite foundation models and Natural Language Processing.",
      "Learned about AI model integration, cloud deployment and healthcare-oriented use cases.",
    ],
  },
  {
    number: "02",
    role: "Java Full Stack Developer Intern",
    organization: "Tap Academy",
    icon: Code2,
    details: [
      "Practiced Java, object-oriented programming and backend development with Spring Boot.",
      "Worked with Hibernate, JDBC, MySQL, CRUD operations and REST API integration.",
      "Built frontend interfaces and explored debugging and application architecture.",
    ],
  },
];

const certifications = [
  "Java Full Stack Developer · Tap Academy",
  "Generative AI Internship · SmartBridge (IBM Cloud)",
  "ChatGPT & Artificial Intelligence · ExcelR",
  "Build Your Own AI Model · NextWave",
  "Employability Skills Development Program",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gangula Manjunadha — Full Stack & AI Developer" },
      {
        name: "description",
        content: "Meet Gangula Manjunadha, a Full Stack & AI Developer building intelligent, secure and scalable digital experiences.",
      },
      { property: "og:title", content: "Gangula Manjunadha — Full Stack & AI Developer" },
      {
        property: "og:description",
        content: "Full Stack Development, Generative AI and privacy-conscious healthcare technology by Gangula Manjunadha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700;750;800&family=Playfair+Display:ital,wght@1,500;1,600&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const HERO_STAGE_HEIGHT = 840;
const HERO_STAGE_HEIGHT_MOBILE = 960;

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const heroRef = useRef<HTMLElement | null>(null);
  const heroInnerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heroInner = heroInnerRef.current;
    if (!hero || !heroInner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollRange = hero.offsetHeight - heroInner.offsetHeight;
        const heroTop = hero.getBoundingClientRect().top;
        const progress = scrollRange > 0 ? Math.min(1, Math.max(0, -heroTop / scrollRange)) : 0;
        const fit = Math.min(1, window.innerHeight / (window.innerWidth <= 700 ? HERO_STAGE_HEIGHT_MOBILE : HERO_STAGE_HEIGHT));
        hero.style.setProperty("--hero-progress", progress.toFixed(4));
        hero.style.setProperty("--hero-fit", fit.toFixed(4));
        const header = headerRef.current;
        if (header) {
          header.style.setProperty("--hero-progress", progress.toFixed(4));
          header.classList.toggle("nav-hidden", progress < 0.18);
        }
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const subject = String(fields.get("subject") ?? "").trim();
    const body = [
      `From: ${String(fields.get("name") ?? "")} (${String(fields.get("senderEmail") ?? "")})`,
      "",
      String(fields.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus("Your email app should open with your message ready. Please send it from there.");
    form.reset();
  };

  return (
    <main>
      <header className="site-header" ref={headerRef}>
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand-mark" href="#home" aria-label="Gangula Manjunadha, home"><span>G</span>M<span className="brand-dot">.</span></a>
          <div className="desktop-nav">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
          <Button asChild className="nav-resume"><a href={resumeRequest}>Request résumé <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button variant="outline" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
        {menuOpen && <div className="mobile-nav">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight aria-hidden="true" /></a>)}<a href={resumeRequest} onClick={() => setMenuOpen(false)}>Request résumé<ArrowUpRight aria-hidden="true" /></a></div>}
      </header>

      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-inner" ref={heroInnerRef}>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-stage">
          <div className="hero-topline"><span className="status-mark" /> AVAILABLE FOR MEANINGFUL WORK <span className="hero-topline-right">PORTFOLIO · 2026</span></div>
          <div className="hero-title-wrap">
            <div className="hero-greeting">Hello, I’m</div>
            <h1><span>GANGULA</span><span className="hero-name-last">MANJUNADHA<span className="hero-period">.</span></span></h1>
          </div>
          <div className="hero-layout">
            <div className="hero-side hero-side-left">
              <p className="side-index">01 — THE FOUNDATION</p>
              <p className="side-main">B.Tech.</p>
              <p className="side-caption">Computer Science<br />& Engineering</p>
              <div className="side-rule" />
              <p className="side-small">KORM College of Engineering<br />Class of 2026</p>
            </div>
            <div className="portrait-placeholder">
              <div className="portrait-orbit orbit-one" aria-hidden="true" />
              <div className="portrait-orbit orbit-two" aria-hidden="true" />
              <img className="profile-image" src={profileImage} alt="Gangula Manjunadha" />
            </div>
            <div className="hero-side hero-side-right">
              <p className="side-index">02 — THE DIRECTION</p>
              <p className="side-main">Full Stack<br />Developer</p>
              <p className="side-caption italic-accent">& AI enthusiast</p>
              <div className="side-rule" />
              <p className="side-small">Intelligent systems.<br />People-first technology.</p>
            </div>
          </div>
          <div className="hero-bottom">
            <p className="hero-description">Building intelligent, secure and scalable digital experiences through full stack development and artificial intelligence.</p>
            <div className="hero-actions">
              <Button asChild className="button-lime"><a href="#projects">Explore my work <ArrowDownRight aria-hidden="true" /></a></Button>
              <Button asChild variant="outline" className="button-outline-light"><a href="#contact">Let’s connect <ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
            <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
          </div>
          </div>
          <div className="hero-entry-cue" aria-hidden="true"><span>SCROLL TO REVEAL</span><ArrowDown /></div>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of focus"><div className="ticker-track"><span>FULL STACK DEVELOPMENT <b>✳</b> GENERATIVE AI <b>✳</b> HEALTHCARE TECHNOLOGY <b>✳</b> SECURE BY DESIGN <b>✳</b> FULL STACK DEVELOPMENT <b>✳</b> GENERATIVE AI <b>✳</b> HEALTHCARE TECHNOLOGY <b>✳</b> SECURE BY DESIGN <b>✳</b></span></div></div>

      <section className="section about-section" id="about">
        <div className="section-shell">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity, with<br /><em>a purpose.</em></>} number="01" />
          <div className="about-grid">
            <div className="about-lede"><p>I’m a Computer Science graduate drawn to the point where <span className="lime-text">thoughtful software</span> meets real-world impact.</p><p className="body-muted">From full-stack applications to Generative AI, I enjoy making complex ideas useful, secure and accessible. Today, I’m especially interested in healthcare technology and privacy-preserving machine learning.</p></div>
            <div className="education-panel"><div className="education-top"><GraduationCap aria-hidden="true" /><span>EDUCATION · 2026</span></div><h3>B.Tech. in Computer Science & Engineering</h3><p className="college-name">Kandula Obul Reddy Memorial College of Engineering</p><div className="education-foot"><span>JNTU Anantapur</span><span className="education-score">8.4 <small>/ 10 CGPA</small></span></div></div>
          </div>
          <div className="about-footnote"><span>WHAT I’M WORKING TOWARD</span><p>Secure systems. Useful AI. Technology that respects the people it serves.</p><HeartPulse aria-hidden="true" /></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-shell">
          <SectionHeading eyebrow="THE TOOLKIT" title={<>Built with<br /><em>intention.</em></>} number="02" />
          <p className="section-intro">A growing collection of languages, frameworks and ideas I use to turn problems into working software.</p>
          <div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }, index) => <article className="skill-group" key={title}><div className="skill-group-heading"><span className="skill-icon"><Icon aria-hidden="true" /></span><span className="skill-index">0{index + 1}</span></div><h3>{title}</h3><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-shell">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Ideas made<br /><em>tangible.</em></>} number="03" />
          <p className="section-intro">Three directions I’m exploring across healthcare, full-stack engineering and applied AI.</p>
          <div className="projects-list">{projects.map(({ number, category, title, description, points, technologies, image, imageAlt, icon: Icon }) => <article className={`project-row project-${number}`} key={number}>
            <div className="project-image-wrap"><img className="project-image" src={image} alt={imageAlt} loading="lazy" width={1280} height={800} /><span className="project-image-number">{number} / 03</span><span className="project-image-icon"><Icon aria-hidden="true" /></span></div>
            <div className="project-copy"><p className="eyebrow"><span className="status-mark" />{category}</p><h3>{title}</h3><p className="project-description">{description}</p><ul className="project-points">{points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul><div className="project-tags">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><p className="project-links-note">Project links available on request <ArrowRight aria-hidden="true" /></p></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-shell">
          <SectionHeading eyebrow="HOW I CAN HELP" title={<>Good work.<br /><em>Good impact.</em></>} number="04" />
          <div className="services-intro"><p>From a clear interface to an AI-powered idea, I’m interested in building things that work beautifully—and mean something.</p></div>
          <div className="services-grid">{services.map(({ number, title, icon: Icon, description }) => <article className="service-item" key={number}><div className="service-top"><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" aria-hidden="true" /></article>)}</div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-shell">
          <SectionHeading eyebrow="WHERE I’VE LEARNED" title={<>Practice<br /><em>in progress.</em></>} number="05" />
          <p className="section-intro">Hands-on learning at the intersection of full-stack engineering and applied AI.</p>
          <div className="experience-list">{experience.map(({ number, role, organization, icon: Icon, details }) => <article className="experience-item" key={number}><div className="experience-index"><span>{number}</span><span className="experience-line" /></div><div className="experience-copy"><p className="eyebrow">INTERNSHIP · DATES TO BE CONFIRMED</p><h3>{role}</h3><p className="experience-org"><Icon aria-hidden="true" />{organization}</p><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div><ChevronRight className="experience-chevron" aria-hidden="true" /></article>)}</div>
        </div>
      </section>

      <section className="section credentials-section" id="education">
        <div className="section-shell credentials-layout"><div><p className="eyebrow">ALWAYS LEARNING</p><h2>Knowledge<br />in <em>motion.</em></h2><p className="credentials-copy">A foundation in computer science, with certifications that reflect a curiosity for what’s next.</p></div><div className="certification-list">{certifications.map((certificate, index) => <div className="certificate-row" key={certificate}><span>0{index + 1}</span><p>{certificate}</p><ArrowUpRight aria-hidden="true" /></div>)}</div></div>
      </section>

      <section className="resume-band"><div className="resume-inner"><div><p className="eyebrow">A CLOSER LOOK</p><h2>Interested in<br />my <em>profile?</em></h2><p>Explore my technical background, experience, education and projects in detail.</p></div><Button asChild className="button-lime resume-button"><a href={resumeRequest}>Request my résumé <ArrowUpRight aria-hidden="true" /></a></Button></div><div className="resume-note"><span>Résumé PDF NOT YET PROVIDED</span><span>EMAIL TO REQUEST A COPY</span></div></section>

      <section className="section contact-section" id="contact">
        <div className="section-shell"><div className="contact-heading"><p className="eyebrow"><span className="status-mark" /> OPEN TO GREAT CONVERSATIONS</p><h2>LET’S BUILD<br />SOMETHING <em>AMAZING.</em></h2><p className="contact-lede">I’m always interested in connecting with developers, recruiters and teams working on innovative software and AI.</p></div>
          <div className="contact-grid"><div className="contact-details"><a href={`mailto:${email}`}><span><Mail aria-hidden="true" /> EMAIL</span><strong>{email}</strong><ArrowUpRight aria-hidden="true" /></a><a href={`tel:${phone.replaceAll(" ", "")}`}><span><MessageCircle aria-hidden="true" /> PHONE</span><strong>{phone}</strong><ArrowUpRight aria-hidden="true" /></a><a href={linkedin} target="_blank" rel="noreferrer"><span><Linkedin aria-hidden="true" /> LINKEDIN</span><strong>Connect with me</strong><ArrowUpRight aria-hidden="true" /></a><a href={github} target="_blank" rel="noreferrer"><span><Github aria-hidden="true" /> GITHUB</span><strong>See what I’m building</strong><ArrowUpRight aria-hidden="true" /></a></div>
            <form className="contact-form" onSubmit={handleContactSubmit}><div className="form-heading"><h3>Send a note.</h3><p>It will open in your email app, ready to send.</p></div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="How should I address you?" required /><label htmlFor="contact-email">Your email</label><input id="contact-email" name="senderEmail" type="email" autoComplete="email" placeholder="you@example.com" required /><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" placeholder="What’s on your mind?" required /><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={3} placeholder="Tell me a little about it…" required /><Button type="submit" className="button-lime form-submit">Prepare email <ArrowUpRight aria-hidden="true" /></Button><p className="form-status" aria-live="polite">{formStatus}</p></form>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="footer-main"><a className="brand-mark" href="#home" aria-label="Back to top"><span>G</span>M<span className="brand-dot">.</span></a><div><p className="footer-name">Gangula Manjunadha</p><p className="footer-title">Full Stack & AI Developer</p></div><div className="footer-links">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div className="footer-social"><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={`mailto:${email}`} aria-label="Email"><Mail /></a></div></div><div className="footer-bottom"><span>© 2026 GANGULA MANJUNADHA. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title, number }: { eyebrow: string; title: React.ReactNode; number: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><span className="section-number">{number} <span>/ 06</span></span></div>;
}