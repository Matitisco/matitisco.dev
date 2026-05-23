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
    eyebrow: 'UTNLABS / Fintech con IA',
    title: 'Transferime',
    description:
      'Agente de IA para WhatsApp orientado a recordatorios de pago, seguimiento de clientes y cobros automatizados para psicólogos.',
    impact: 'Seleccionado por UTNLABS y cubierto por televisión, radio y prensa digital.',
    tags: ['WhatsApp', 'n8n', 'APIs externas', 'Pagos'],
    links: [
      { label: 'Nota TN', href: links.tn, icon: Newspaper },
      { label: 'Entrevista', href: links.youtube, icon: Play },
    ],
  },
  {
    signal: '02',
    eyebrow: 'Proyecto público / TypeScript',
    title: 'iManager',
    description:
      'Sistema de gestión de equipos con demo pública y repositorio abierto, pensado para ordenar operaciones y flujos de trabajo.',
    impact: 'Producto deployado, código público y caso técnico concreto.',
    tags: ['TypeScript', 'Interfaz de producto', 'Operaciones'],
    links: [
      { label: 'Demo', href: links.imanager, icon: ArrowUpRight },
      { label: 'GitHub', href: links.github, icon: Code2 },
    ],
  },
  {
    signal: '03',
    eyebrow: 'Freelance / Negocios reales',
    title: 'Chatbots IA y automatizaciones',
    description:
      'Bots para tiendas de iPhone y agencia de viajes, desplegados en WhatsApp e Instagram para ventas, soporte y reservas.',
    impact: 'Integraciones con Google Sheets, PostgreSQL, ManyChat, n8n y APIs en tiempo real.',
    tags: ['ManyChat', 'PostgreSQL', 'Calificación de leads'],
    links: [{ label: 'Contactar', href: links.linkedin, icon: BriefcaseBusiness }],
  },
  {
    signal: '04',
    eyebrow: 'Caso privado / Sistemas retail',
    title: 'Joyero ERP',
    description:
      'Caso privado de software comercial para ordenar procesos internos, inventario y operación diaria en retail.',
    impact: 'Incluido como experiencia de producto sin exponer repos privados ni datos sensibles.',
    tags: ['ERP', 'Retail', 'Sistemas operativos'],
    links: [{ label: 'Pedir contexto', href: links.email, icon: Mail }],
  },
];

const experience = [
  {
    date: 'Abr 2025 - Nov 2025',
    title: 'Participante y desarrollador - Transferime en UTNLABS',
    body: 'Participante seleccionado en el Centro de Emprendedores de UTN. Construcción del chatbot, automatizaciones con n8n e integraciones externas para recordatorios de pago y seguimiento de clientes.',
  },
  {
    date: 'Oct 2025 - Abr 2026',
    title: 'Desarrollador de chatbots IA y automatizaciones - Freelance',
    body: 'Lanzamiento de chatbots para comercio y turismo: ventas, soporte, calificación de leads, consultas de vuelos, cotizaciones y flujos de reserva.',
  },
  {
    date: '2020 - 2027',
    title: 'Ingeniería en Sistemas - UTN FRBA',
    body: '4to año. Base fuerte en sistemas, programación, datos y pensamiento de producto aplicado a problemas reales de negocio.',
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
  'Automatización',
  'IA conversacional',
  'n8n',
  'ManyChat',
  'Codex',
  'Claude Code',
];

const pressLinks = [
  {
    title: 'Transferime en TN',
    meta: 'Cobertura digital sobre una IA para WhatsApp que simplifica pagos para psicólogos.',
    href: links.tn,
    icon: Newspaper,
  },
  {
    title: 'Entrevista en Telefe / UTN Labs',
    meta: 'Aparición en medios sobre el proyecto y la forma en que fue construido.',
    href: links.youtube,
    icon: Radio,
  },
  {
    title: 'Transferime en Instagram',
    meta: 'Canal público del producto con novedades y contexto.',
    href: links.instagram,
    icon: Sparkles,
  },
];

const metrics = [
  { value: '4to', label: 'año en UTN FRBA' },
  { value: 'B2-C1', label: 'inglés' },
  { value: 'IA', label: 'chatbots + APIs' },
];

const systemNodes = [
  { label: 'WhatsApp', className: 'node-a' },
  { label: 'n8n', className: 'node-b' },
  { label: 'APIs', className: 'node-c' },
  { label: 'PostgreSQL', className: 'node-d' },
  { label: 'Clientes', className: 'node-e' },
];

function App() {
  return (
    <main className="site-shell">
      <div className="grid-noise" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <nav className="topbar" aria-label="Navegación principal">
        <a className="brandmark" href="#top" aria-label="Volver al inicio">
          MT
        </a>
        <div className="nav-links">
          <a href="#work">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contacto</a>
        </div>
        <div className="nav-actions" aria-label="Acciones rápidas">
          <a href={links.cv} target="_blank" rel="noreferrer">
            CV
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy reveal">
          <p className="kicker">
            <MapPin size={16} aria-hidden="true" />
            Buenos Aires / Laboratorio de producto IA
          </p>
          <h1 id="hero-title">
            Matías José <span>Tiscornia</span>
          </h1>
          <p className="hero-lede">
            Estudiante de Ingeniería en Sistemas en UTN FRBA. Construyo sistemas
            conversacionales, automatizaciones con APIs y productos orientados a datos para
            negocios reales.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="button primary" href={links.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              Contactar por LinkedIn
            </a>
            <a className="button secondary" href={links.cv} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              CV público
            </a>
            <a className="icon-button" href={links.email} aria-label="Enviar email">
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="command-deck reveal delay-1" aria-label="Mapa de sistemas y automatizaciones">
          <div className="system-summary">
            <span className="mono-label">Mapa de sistemas</span>
            <strong>Agentes de IA para cobros, leads y operaciones.</strong>
            <p>Un flujo modular donde cada pieza mueve información, decisiones y seguimiento.</p>
          </div>
          <div className="system-map" aria-hidden="true">
            <svg className="flow-lines" viewBox="0 0 520 300" role="presentation" aria-hidden="true">
              <path d="M70 82 C160 38 235 46 300 96 S414 170 462 114" />
              <path d="M92 224 C178 166 246 164 315 205 S410 248 470 202" />
              <path d="M168 126 L250 154 L338 126" />
              <path d="M252 154 L252 238" />
            </svg>
            {systemNodes.map((node) => (
              <span className={`node ${node.className}`} key={node.label}>
                {node.label}
              </span>
            ))}
            <span className="map-status status-a">
              <CheckCircle2 size={14} aria-hidden="true" />
              cobros
            </span>
            <span className="map-status status-b">
              <Cpu size={14} aria-hidden="true" />
              tracking
            </span>
          </div>
          <div className="deck-footer">
            <span>
              <Workflow size={17} aria-hidden="true" />
              capa de automatización
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              negocios reales
            </span>
          </div>
        </div>

        <aside className="metric-row reveal delay-2" aria-label="Datos rápidos">
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
            Proyectos destacados
          </p>
          <h2 id="work-title">Productos y sistemas que salieron del prototipo.</h2>
          <p>
            Startup, sistemas internos y automatizaciones para negocios que necesitaban operar
            mejor, presentados como señales de un tablero de producto.
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
            Experiencia
          </p>
          <h2 id="experience-title">Donde ingeniería, producto y negocio se cruzan.</h2>
          <p>
            Me interesa la zona donde un sistema conversa con usuarios, toca datos reales y empuja
            una operación hacia adelante.
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

      <section id="stack" className="stack-section" aria-labelledby="stack-title">
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
            Educación e idiomas
          </p>
          <h2 id="proof-title">UTN FRBA, Ingeniería en Sistemas.</h2>
          <p>4to año / 2020 - 2027</p>
          <p>Español nativo / Inglés B2-C1</p>
        </div>

        <div className="press-panel">
          <p className="kicker">
            <BookOpen size={16} aria-hidden="true" />
            Prensa y links
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
            Contacto
          </p>
          <h2 id="contact-title">Construyamos algo que funcione de verdad.</h2>
          <p>
            Estoy abierto a oportunidades tech donde IA, automatización y pensamiento de producto
            se mezclen con problemas reales de negocio.
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
        <p className="signature">Hecho por Matías / React, TypeScript, Vite / 2026</p>
      </footer>
    </main>
  );
}

export default App;
