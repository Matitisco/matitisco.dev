import {
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Newspaper,
  Play,
  Radio,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

const links = {
  linkedin: 'https://linkedin.com/in/matias-tiscornia-6a48001b4',
  email: 'mailto:matiscornia0@gmail.com',
  github: 'https://github.com/Matitisco/iManager',
  imanager: 'https://i-manager-ai-studio.vercel.app',
  tn: 'https://tn.com.ar/tecno/aplicaciones/2025/07/26/estudiantes-crearon-transferime-una-ia-en-whatsapp-que-simplifica-los-pagos-a-psicologos/',
  youtube: 'https://www.youtube.com/watch?v=w9o0AZCsxFc',
  instagram: 'https://www.instagram.com/transferime__',
  cv: '/matias-tiscornia-cv.pdf',
};

const featuredWork = [
  {
    signal: '01',
    eyebrow: 'UTNLABS / Fintech AI',
    title: 'Transferime',
    description:
      'WhatsApp AI agent for payment reminders, client tracking and automated collections for psychologists.',
    impact: 'Selected by UTNLABS and covered by TV, radio and digital press.',
    tags: ['WhatsApp', 'n8n', 'External APIs', 'Payments'],
    links: [
      { label: 'Nota TN', href: links.tn, icon: Newspaper },
      { label: 'Entrevista', href: links.youtube, icon: Play },
    ],
  },
  {
    signal: '02',
    eyebrow: 'Public project / TypeScript',
    title: 'iManager',
    description:
      'Team management system with public demo and open repository, focused on operations and workflow clarity.',
    impact: 'Deployed product, public code and a concrete technical case.',
    tags: ['TypeScript', 'Product UI', 'Operations'],
    links: [
      { label: 'Demo', href: links.imanager, icon: ArrowUpRight },
      { label: 'GitHub', href: links.github, icon: Code2 },
    ],
  },
  {
    signal: '03',
    eyebrow: 'Freelance / Real businesses',
    title: 'AI chatbots & automations',
    description:
      'Bots for iPhone stores and a travel agency, deployed on WhatsApp and Instagram for sales, support and bookings.',
    impact: 'Integrated Google Sheets, PostgreSQL, ManyChat, n8n and real-time APIs.',
    tags: ['ManyChat', 'PostgreSQL', 'Lead qualification'],
    links: [{ label: 'Contactar', href: links.linkedin, icon: BriefcaseBusiness }],
  },
  {
    signal: '04',
    eyebrow: 'Private case / Retail systems',
    title: 'Joyero ERP',
    description:
      'Private retail software case for internal processes, inventory and daily commercial operations.',
    impact: 'Shown as product experience without exposing private repositories or sensitive data.',
    tags: ['ERP', 'Retail', 'Workflow systems'],
    links: [{ label: 'Pedir contexto', href: links.email, icon: Mail }],
  },
];

const experience = [
  {
    date: 'Apr 2025 - Nov 2025',
    title: 'Participant & Developer - Transferime in UTNLABS',
    body: "Selected participant in UTN's Entrepreneurship Center program. Built the chatbot, n8n automations and external API integrations for payment reminders and client tracking.",
  },
  {
    date: 'Oct 2025 - Apr 2026',
    title: 'AI Chatbot & Automation Developer - Freelance',
    body: 'Launched chatbots for commerce and travel: sales, support, lead qualification, flight inquiries, quotes and reservation workflows.',
  },
  {
    date: '2020 - 2027',
    title: 'Systems Engineering - UTN FRBA',
    body: '4th year. Strong base in systems, programming, data and product thinking applied to real business problems.',
  },
];

const stack = [
  'Python',
  'Java',
  'C',
  'SQL',
  'PostgreSQL',
  'REST APIs',
  'Git',
  'Linux',
  'Automation',
  'Conversational AI',
  'n8n',
  'ManyChat',
  'Codex',
  'Claude Code',
];

const pressLinks = [
  {
    title: 'Transferime en TN',
    meta: 'Digital coverage about an AI for WhatsApp that simplifies payments for psychologists.',
    href: links.tn,
    icon: Newspaper,
  },
  {
    title: 'Entrevista en Telefe / UTN Labs',
    meta: 'Media appearance about the project and the way it was built.',
    href: links.youtube,
    icon: Radio,
  },
  {
    title: 'Transferime en Instagram',
    meta: 'Public product channel with updates and context.',
    href: links.instagram,
    icon: Sparkles,
  },
];

const metrics = [
  { value: '04', label: 'UTN FRBA year' },
  { value: 'B2-C1', label: 'English' },
  { value: 'AI', label: 'Chatbots + APIs' },
];

function App() {
  return (
    <main className="site-shell">
      <div className="grid-noise" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <nav className="topbar" aria-label="Navegacion principal">
        <a className="brandmark" href="#top" aria-label="Volver al inicio">
          MT
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="kicker">
            <MapPin size={16} aria-hidden="true" />
            Buenos Aires / AI product lab
          </p>
          <h1 id="hero-title">
            Matias Jose <span>Tiscornia</span>
          </h1>
          <p className="hero-lede">
            Systems Engineering student at UTN FRBA building conversational systems, API
            automations and data-driven products for real businesses.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="button primary" href={links.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              Contactar por LinkedIn
            </a>
            <a className="button secondary" href={links.cv} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              CV publico
            </a>
            <a className="icon-button" href={links.email} aria-label="Enviar email">
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="command-deck reveal delay-1" aria-label="Retrato y resumen profesional">
          <div className="deck-header">
            <span>Live signal</span>
            <span>Portfolio v2</span>
          </div>
          <div className="profile-console">
            <img className="portrait-photo" src="/matias-avatar.jpg" alt="Retrato de Matias Jose Tiscornia" />
            <div className="console-copy">
              <span className="mono-label">Current vector</span>
              <strong>AI agents for money, leads and operations.</strong>
            </div>
          </div>
          <div className="system-map" aria-hidden="true">
            <span className="node node-a">WhatsApp</span>
            <span className="node node-b">n8n</span>
            <span className="node node-c">APIs</span>
            <span className="node node-d">Postgres</span>
          </div>
          <div className="team-strip">
            <img src="/transferime-team.webp" alt="Equipo de Transferime en UTNLABS" />
          </div>
          <div className="deck-footer">
            <span>
              <Cpu size={17} aria-hidden="true" />
              Automation layer
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Real clients
            </span>
          </div>
        </div>

        <aside className="metric-row reveal delay-2" aria-label="Datos rapidos">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.value}</span>
              <p>{metric.label}</p>
            </div>
          ))}
        </aside>
      </section>

      <section id="work" className="section-block" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="kicker">
            <BriefcaseBusiness size={16} aria-hidden="true" />
            Featured work
          </p>
          <h2 id="work-title">A product board for things that actually shipped.</h2>
          <p>
            Startup work, internal systems and automation projects arranged like signals in an
            operating dashboard.
          </p>
        </div>

        <div className="work-grid">
          {featuredWork.map((item) => (
            <article className="work-card" key={item.title}>
              <div className="card-index">{item.signal}</div>
              <p className="mono-label">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.impact}</strong>
              <div className="tag-row" aria-label={`Tecnologias de ${item.title}`}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="card-actions">
                {item.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      <Icon size={16} aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="split-section" aria-labelledby="experience-title">
        <div className="section-heading sticky-heading">
          <p className="kicker">
            <Workflow size={16} aria-hidden="true" />
            Experience
          </p>
          <h2 id="experience-title">Where engineering meets product pressure.</h2>
          <p>
            I like the zone where a system talks to users, touches real data and pushes an operation
            forward.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-pulse">{String(index + 1).padStart(2, '0')}</span>
              <time>{item.date}</time>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div className="stack-intro">
          <p className="kicker">
            <TerminalSquare size={16} aria-hidden="true" />
            Stack
          </p>
          <h2 id="stack-title">Tools I use to make the machine useful.</h2>
        </div>
        <div className="skill-cloud" aria-label="Habilidades tecnicas">
          {stack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="education-panel">
          <p className="kicker">
            <GraduationCap size={16} aria-hidden="true" />
            Education & languages
          </p>
          <h2 id="proof-title">UTN FRBA, Systems Engineering.</h2>
          <p>4th year / 2020 - 2027</p>
          <p>Spanish native / English B2-C1</p>
        </div>

        <div className="press-panel">
          <p className="kicker">
            <BookOpen size={16} aria-hidden="true" />
            Press & links
          </p>
          {pressLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a className="press-link" href={item.href} target="_blank" rel="noreferrer" key={item.href}>
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.meta}</small>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>

      <footer id="contact" className="contact-section" aria-labelledby="contact-title">
        <div>
          <p className="kicker">
            <Bot size={16} aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title">Build something with a working heartbeat.</h2>
          <p>
            Open to tech opportunities where AI, automation and product thinking meet real business
            problems.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={links.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a className="button secondary" href={links.email}>
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a className="button secondary" href={links.cv} target="_blank" rel="noreferrer">
            <Download size={18} aria-hidden="true" />
            CV
          </a>
        </div>
        <p className="signature">Built by Matias / React, TypeScript, Vite / 2026</p>
      </footer>
    </main>
  );
}

export default App;
