import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContactForm from '../components/ContactForm';
import { useReveal } from '../hooks/useReveal';

const INFO_BLOCKS = [
  { label: 'Ubicación', value: 'Málaga, España', href: null },
  { label: 'Email', value: 'rafa.medina.quelle@gmail.com', href: 'mailto:rafa.medina.quelle@gmail.com' },
  { label: 'Teléfono', value: '+34 622 871 101', href: 'tel:+34622871101' }
];

const SOCIALS = [
  { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/rafael-medina-quelle/', label: 'LinkedIn' },
  { icon: 'bi-github',   href: 'https://github.com/rafakata',                       label: 'GitHub'   },
  { icon: 'bi-twitter-x', href: 'https://x.com/quelledev',                          label: 'Twitter'  }
];

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [infoRef, infoVisible]     = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const [formRef, formVisible]     = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <>
      <Navbar />
      <main className="main-bg contact-page">
        <div className="container-contact">

          <section
            ref={headerRef}
            className={`contact-header reveal-up ${headerVisible ? 'is-visible' : ''}`}
          >
            <span className="contact-eyebrow">// Hablemos</span>
            <h1 className="contact-main-title">
              ¿Nos ponemos en <span className="highlight-lime">contacto?</span>
            </h1>
            <p className="contact-subtitle">
              Para cualquier consulta o idea, no dudes en escribir.
            </p>
          </section>

          <div className="contact-grid">
            {/* Info estilo "terminal card" */}
            <div
              ref={infoRef}
              className={`contact-info stagger ${infoVisible ? 'is-visible' : ''}`}
            >
              <div className={`contact-info__terminal reveal-up ${infoVisible ? 'is-visible' : ''}`}>
                <div className="contact-info__terminal-header">
                  <span className="contact-info__dots" aria-hidden="true">
                    <i /><i /><i />
                  </span>
                  <span className="contact-info__terminal-title">~/contacto</span>
                </div>
                <ul className="contact-info__list">
                  {INFO_BLOCKS.map((block) => (
                    <li key={block.label} className="contact-info__row">
                      <span className="contact-info__row-key">
                        $ {block.label.toLowerCase()}
                      </span>
                      <span className="contact-info__row-value">
                        {block.href ? (
                          <a href={block.href}>{block.value}</a>
                        ) : (
                          block.value
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`contact-info__socials-block reveal-up ${infoVisible ? 'is-visible' : ''}`}>
                <span className="contact-info__socials-label">Encuéntrame en</span>
                <div className="contact-socials">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <i className={`bi ${social.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className={`contact-form-shell reveal-up ${formVisible ? 'is-visible' : ''}`}
            >
              <ContactForm />
            </div>
          </div>

          <section className="contact-map-section" aria-label="Mapa de Málaga">
            <h2 className="contact-map-title">Dónde estoy</h2>
            <MapContainer
              center={[36.7213, -4.4214]}
              zoom={13}
              scrollWheelZoom={false}
              className="contact-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> & <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              <CircleMarker
                center={[36.7213, -4.4214]}
                radius={10}
                pathOptions={{ color: '#cbff31', fillColor: '#cbff31', fillOpacity: 0.9 }}
              />
            </MapContainer>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
