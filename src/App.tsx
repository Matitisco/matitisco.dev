import {
  ArrowUpRight,
  BookOpen,
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
  imanagerRailway: 'https://imanager-production.up.railway.app/',
  tn: 'https://tn.com.ar/tecno/aplicaciones/2025/07/26/estudiantes-crearon-transferime-una-ia-en-whatsapp-que-simplifica-los-pagos-a-psicologos/',
  youtube: 'https://www.youtube.com/watch?v=w9o0AZCsxFc',
  instagram: 'https://www.instagram.com/transferime__',
  cv: '/matias-tiscornia-cv.pdf',
};

const featuredWork = [
  {
    eyebrow: 'UTNLABS / Fintech AI',
    title: 'Transferime',
    description:
      'Chatbot de WhatsApp para recordatorios de pago, seguimiento de clientes y automatización de cobros para psicólogos.',
    impact: 'Seleccionado en UTNLABS y cubierto por TV, radio y medios digitales.',
    tags: ['WhatsApp', 'n8n', 'External APIs', 'Payments'],
    links: [
      { label: 'Nota TN', href: links.tn, icon: Newspaper },
      { label: 'Entrevista', href: links.youtube, icon: Play },
    ],
  },
  {
    eyebrow: 'Public project / TypeScript',
    title: 'iManager',
    description:
      'Sistema de gestión de equipos con demo pública y repositorio abierto; foco en operaciones, claridad y flujo de trabajo.',
    impact: 'Producto deployado, código público y usable como caso técnico.',
    tags: ['TypeScript', 'Product UI', 'Operations'],
    links: [
      { label: 'Demo', href: links.imanager, icon: ArrowUpRight },
      { label: 'GitHub', href: links.github, icon: Code2 },
    ],
  },
  {
    eyebrow: 'Freelance / Real businesses',
    title: 'AI chatbots & automations',
    description:
      'Bots para tiendas de iPhone y agencia de viajes, desplegados en WhatsApp e Instagram para ventas, soporte y reservas.',
    impact: 'Integraciones con Google Sheets, PostgreSQL, ManyChat, n8n y APIs en tiempo real.',
    tags: ['ManyChat', 'PostgreSQL', 'Lead qualification'],
    links: [{ label: 'Contactar', href: links.linkedin, icon: BriefcaseBusiness }],
  },
  {
    eyebrow: 'Private case / Retail systems',
    title: 'Joyero ERP',
    description:
      'Caso privado de software comercial para ordenar procesos internos, inventario y operación diaria en retail.',
    impact: 'Incluido como experiencia de producto sin exponer repos privados ni datos sensibles.',
    tags: ['ERP', 'Retail', 'Workflow systems'],
    links: [{ label: 'Pedir contexto', href: links.email, icon: Mail }],
  },
];

const experience = [
  {
    date: 'Apr 2025 - Nov 2025',
    title: 'Participant & Developer - Transferime in UTNLABS',
    body: 'Selected participant in UTN’s Entrepreneurship Center program. Construí el chatbot, automatizaciones con n8n e integraciones externas para payment reminders y client tracking.',
  },
  {
    date: 'Oct 2025 - Apr 2026',
    title: 'AI Chatbot & Automation Developer - Freelance',
    body: 'Lancé chatbots para comercios y turismo: ventas, soporte, calificación de leads, consultas de vuelos, cotizaciones y reservas.',
  },
  {
    date: '2020 - 2027',
    title: 'Systems Engineering - UTN FRBA',
    body: '4th year. Base fuerte en sistemas, programación, datos y pensamiento de producto aplicado a negocios reales.',
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
    meta: 'Nota digital sobre una IA para WhatsApp que simplifica pagos a psicólogos.',
    href: links.tn,
    icon: Newspaper,
  },
  {
    title: 'Entrevista en Telefe / UTN Labs',
    meta: 'Aparición del proyecto y el proceso de construcción en medios.',
    href: links.youtube,
    icon: Radio,
  },
  {
    title: 'Transferime en Instagram',
    meta: 'Producto, updates y canal público del proyecto.',
    href: links.instagram,
    icon: Sparkles,
  },
];

function App() {
  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <nav className="topbar" aria-label="Navegación principal">
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
            Buenos Aires, Argentina
          </p>
          <h1 id="hero-title">Matías José Tiscornia</h1>
          <p className="hero-lede">
            Systems Engineering student at UTN FRBA building AI chatbots,
            automations and API-powered products for real businesses.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="button primary" href={links.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              Contactar por LinkedIn
            </a>
            <a className="button secondary" href={links.cv} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              CV sanitizado
            </a>
            <a className="icon-button" href={links.email} aria-label="Enviar email">
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="Retrato y resumen profesional">
          <div className="portrait-frame">
            <img className="portrait-photo" src="/matias-avatar.jpg" alt="Retrato de Matías José Tiscornia" />
            <span className="visual-code">n8n - APIs - WhatsApp</span>
            <div className="team-strip">
              <img src="/transferime-team.webp" alt="Equipo de Transferime en UTNLABS" />
            </div>
            <div className="portrait-badge">
              <Cpu size={18} aria-hidden="true" />
              AI / Automation
            </div>
          </div>
          <div className="signal-panel">
            <div>
              <span className="mono-label">CURRENT SIGNAL</span>
              <strong>Conversational systems that move money, leads and operations.</strong>
            </div>
            <CheckCircle2 size={22} aria-hidden="true" />
          </div>
        </div>

        <aside className="hero-facts reveal delay-2" aria-label="Datos rápidos">
          <div>
            <span>04</span>
            <p>UTN FRBA year</p>
          </div>
          <div>
            <span>B2-C1</span>
            <p>English</p>
          </div>
          <div>
            <span>AI</span>
            <p>Chatbots + APIs</p>
          </div>
        </aside>
      </section>

      <section id="work" className="section-block" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="kicker">
            <BriefcaseBusiness size={16} aria-hidden="true" />
            Featured work
          </p>
          <h2 id="work-title">Productos reales, no demos sueltas.</h2>
          <p>
            Una mezcla de startup, sistemas internos y automatizaciones para negocios que necesitan
            operar mejor.
          </p>
        </div>

        <div className="work-grid">
          {featuredWork.map((item, index) => (
            <article className={`work-card work-card-${index + 1}`} key={item.title}>
              <p className="mono-label">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.impact}</strong>
              <div className="tag-row" aria-label={`Tecnologías de ${item.title}`}>
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
          <h2 id="experience-title">Donde se cruza ingeniería, producto y negocio.</h2>
          <p>
            Me interesa la zona donde un sistema conversa con usuarios, toca datos reales y termina
            empujando una operación.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title}>
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
          <h2 id="stack-title">Herramientas que uso para construir.</h2>
        </div>
        <div className="skill-cloud" aria-label="Habilidades técnicas">
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
          <p>4th year · 2020 - 2027</p>
          <p>Spanish native · English B2-C1</p>
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
            <Code2 size={16} aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title">¿Construimos algo que tenga pulso?</h2>
          <p>
            Estoy abierto a oportunidades tech donde IA, automatización y producto se mezclen con
            problemas reales.
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
        <p className="signature">Built by Matías · React, TypeScript, Vite · 2026</p>
      </footer>
    </main>
  );
}

export default App;
