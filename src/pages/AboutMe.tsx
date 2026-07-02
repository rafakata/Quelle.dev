import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PersonalCard from '../components/PersonalCard';
import { useReveal } from '../hooks/useReveal';
import { assetUrl } from '../utils/assetUrl';

const STATS = [
  { value: '7+',  label: 'Proyectos públicos' },
  { value: '20+',  label: 'Tecnologías' },
  { value: '2',   label: 'Años en código' },
  { value: '∞',   label: 'Curiosidad' }
];

const TIMELINE = [
  {
    year: 'Actualidad',
    title: 'Auxiliar Gasolinera Carrefour Alameda',
    subtitle: 'Atención al cliente · gestión ágil',
    description:
      'Trabajo actual que utilizo para compaginar y financiar mi formación tecnológica. Me encargo de las tareas de cobro, atención al cliente y gestión ágil en pista, desarrollando habilidades clave en trato directo con el público y resolución rápida de incidencias.'
  },
  {
    year: 'Abr 2026 - Jun 2026',
    title: 'Desarrollador Full Stack (Prácticas) · Cloud y Olé',
    subtitle: 'React · Flutter · Django · PostgreSQL',
    description:
      'Revisión, optimización SEO y rediseño en React. Internacionalización (i18n). Desarrollo de un panel administrador completo con Flutter (Dart) en el frontend y conexión a backend usando Python, Django y PostgreSQL. Manejo de despliegues con Docker y GitLab.'
  },
  {
    year: '2026',
    title: 'Marketing Digital · Generación Digital',
    subtitle: 'KPIs · estrategia · transformación',
    description:
      'Una web es una herramienta de negocio. Entender contenidos, métricas y digitalización me permite construir productos que aportan valor real, no solo bonitos.'
  },  
  {
    year: 'Ene 2025 - Feb 2025',
    title: 'Desarrollador Web (Prácticas) · Codearts',
    subtitle: 'Docker · Nginx · GitHub',
    description:
      'Desarrollo y configuración de entornos de trabajo empleando contenedores Docker y Nginx. Gestión del control de versiones y trabajo colaborativo mediante GitHub.'
  },
  {
    year: '2024-2026',
    title: 'DAW · Desarrollo Web Fullstack',
    subtitle: 'React · Node · PHP · SQL',
    description:
      'Convertí la capacidad analítica en construcción. No solo escribo código: documento procesos, diseño arquitecturas escalables y pienso en su evolución.'
  },
  {
    year: '2019-2024',
    title: 'Grado en Historia',
    subtitle: 'Formación humanista · análisis',
    description:
      'Investigar fuentes masivas, encontrar patrones en el caos y entender el comportamiento humano. La base analítica que hoy aplico a UX y debugging.'
  },
    {
    year: '2018',
    title: 'Vendedor & Encargado · Arte y Estilo',
    subtitle: 'Trato con cliente · gestión',
    description:
      'Años de venta directa y gestión de inventarios. Aprendí la habilidad más importante en IT: escuchar al cliente y traducir su necesidad en una solución real.'
  },
   {
    year: '2017',
    title: 'Entrenador F7 · Olímpica Victoriana',
    subtitle: 'Liderazgo · planificación',
    description:
      'Coordinar equipos y familias me dio la mecánica del liderazgo positivo. Un equipo de fútbol y uno de desarrollo comparten núcleo: estrategia bajo presión y un objetivo común.'
  }
];

const AboutMe: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [heroRef, heroVisible]      = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [statsRef, statsVisible]    = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [storyRef, storyVisible]    = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [timelineRef, timelineVisible] = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <>
      <Navbar />
      <main className="main-bg about-me-page">
        <div className="container-about">

          <section
            ref={heroRef}
            className={`about-hero reveal-up ${heroVisible ? 'is-visible' : ''}`}
          >
            <span className="about-eyebrow">// Sobre mí</span>
            <h1 className="about-main-title">
              Detrás del <span className="highlight-lime">código</span>
            </h1>
            <p className="about-subtitle">
              Un poco más sobre quién soy y cómo entiendo la tecnología.
            </p>
          </section>

          {/* KPIs animados */}
          <section
            ref={statsRef}
            className={`about-stats stagger ${statsVisible ? 'is-visible' : ''}`}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`about-stat reveal-up ${statsVisible ? 'is-visible' : ''}`}
              >
                <span className="about-stat__value">{stat.value}</span>
                <span className="about-stat__label">{stat.label}</span>
              </div>
            ))}
          </section>

          <div className="about-grid">
            <div className="about-personal">
              <PersonalCard
                photo={assetUrl('projects/fotoperfil.png')}
                name="Rafael Medina Quelle"
                origin="Málaga, España"
                birth="11 de Enero de 2001"
              />
            </div>

            <div
              ref={storyRef}
              className={`about-story stagger ${storyVisible ? 'is-visible' : ''}`}
            >
              {/* Quote pull-out destacado */}
              <blockquote
                className={`about-quote reveal-up ${storyVisible ? 'is-visible' : ''}`}
              >
                <span className="about-quote__mark" aria-hidden="true">“</span>
                <p>
                  La tecnología no debería ser fría. Mi formación humanista me
                  permite hablar con clientes de pymes malagueñas sin
                  tecnicismos, traduciendo su necesidad de negocio en software
                  con visión comercial.
                </p>
                <footer>— Rafael, sobre por qué nació <strong>quelle.dev</strong></footer>
              </blockquote>

              <article
                className={`story-block reveal-up ${storyVisible ? 'is-visible' : ''}`}
              >
                <h3>Experiencia Profesional</h3>
                <p>
                  Experiencia reciente combinando desarrollo, soporte operativo y trabajo real con negocio.
                  He trabajado en frontend y backend, pero también en entornos donde la agilidad, la atención al detalle
                  y la resolución de incidencias marcan la diferencia.
                </p>
                <div className="experience-list">
                  <div className="experience-card">
                    <span className="experience-card__period">Abr 2026 - Jun 2026</span>
                    <h4>Desarrollador Full Stack (Prácticas) · Cloud y Olé</h4>
                    <p>
                      Revisión, optimización SEO y rediseño en React. Internacionalización (i18n).
                      Desarrollo de un panel administrador completo con Flutter (Dart) en el frontend y conexión
                      a backend usando Python, Django y PostgreSQL. Manejo de despliegues con Docker y GitLab.
                    </p>
                  </div>
                  <div className="experience-card">
                    <span className="experience-card__period">Ene 2025 - Feb 2025</span>
                    <h4>Desarrollador Web (Prácticas) · Codearts</h4>
                    <p>
                      Desarrollo y configuración de entornos de trabajo empleando contenedores Docker y Nginx.
                      Gestión del control de versiones y trabajo colaborativo mediante GitHub.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className={`story-block reveal-up ${storyVisible ? 'is-visible' : ''}`}
              >
                <h3>Desarrollo de Aplicaciones Web (DAW)</h3>
                <p>
                  Aquí mi capacidad de análisis se convirtió en construcción.
                  No me limito al ecosistema de <strong>JavaScript y TypeScript</strong>
                  con React y Node.js; mi formación abarca desde el backend
                  con <strong>PHP</strong> hasta la gestión avanzada de
                  <strong> SQL (MySQL, SQLite)</strong>. He trasteado con
                  integraciones en <strong>Firebase</strong> y estructurado
                  arquitecturas escalables bajo el patrón DAO. No solo escribo
                  líneas de código; documento procesos y diseño soluciones
                  pensando en su evolución técnica.
                </p>
              </article>

              <article
                className={`story-block reveal-up ${storyVisible ? 'is-visible' : ''}`}
              >
                <h3>Marketing y Transformación Digital</h3>
                <p>
                  Para complementar mi perfil técnico, me he especializado con
                  el curso de <strong>Marketing Digital y E-Commerce</strong> y
                  el programa de <strong>Generación Digital: Agentes del
                  Cambio</strong>. Una web no es un ente aislado, sino una
                  herramienta de negocio que requiere estrategia de contenidos,
                  análisis de KPIs y digitalización real de los procesos.
                </p>
              </article>

              <article
                className={`story-block reveal-up ${storyVisible ? 'is-visible' : ''}`}
              >
                <h3>Grado en Historia</h3>
                <p>
                  Muchos se preguntan qué hace un, casi, historiador en el
                  mundo del desarrollo Fullstack. La respuesta es sencilla:
                  <strong> análisis</strong>. La carrera me enseñó a investigar
                  fuentes masivas, encontrar patrones en el caos y, sobre todo,
                  a entender el comportamiento humano. En el entorno tech esto
                  se traduce en capacidad analítica para bugs complejos y
                  sensibilidad para UX/UI.
                </p>
              </article>

              {/* Timeline visual de mi recorrido */}
              <h2 className="section-divider-title">Mi recorrido</h2>
              <div
                ref={timelineRef}
                className={`timeline stagger ${timelineVisible ? 'is-visible' : ''}`}
              >
                {TIMELINE.map((item, idx) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className={`timeline__item reveal-up ${timelineVisible ? 'is-visible' : ''}`}
                  >
                    <span className="timeline__dot" aria-hidden="true" />
                    <span className="timeline__year">{item.year}</span>
                    <div className="timeline__content">
                      <h4 className="timeline__title">
                        <span className="timeline__title-num">{String(idx + 1).padStart(2, '0')} ·</span>
                        {item.title}
                      </h4>
                      <span className="timeline__subtitle">{item.subtitle}</span>
                      <p className="timeline__desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <article className={`story-block reveal-up ${storyVisible ? 'is-visible' : ''}`}>
                <h3>En mi tiempo libre</h3>
                <p className="desenfadado-text">
                  Si no me ves "trasteando" con alguna librería nueva o
                  investigando el porqué de alguna cosa por pura curiosidad,
                  probablemente me encuentres viendo al <strong>Málaga CF</strong>
                  {' '}(sí, sufriendo, pero ahí estamos), en el gimnasio, jugando
                  a videojuegos o leyendo algún cómic. Me pierdo por un buen
                  libro, una serie que enganche o una película de las que te
                  dejan pensando. Soy una persona muy sociable, de los que
                  piensan que con buen humor se trabaja mejor.
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
