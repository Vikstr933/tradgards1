import React from 'react';
import './Services.css';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services: Service[] = [
    {
      id: 'plattsattning',
      title: 'Plattsättning',
      description: 'Professionell plattsättning för terrasser, gångar och entréer. Vi arbetar med alla typer av plattor och natursten.',
      icon: '🏗️',
      features: [
        'Terrasser & uteplatser',
        'Gångvägar & entréer',
        'Natursten & betongplattor',
        'Dränering & underlag'
      ]
    },
    {
      id: 'tradgardsanlaggning',
      title: 'Trädgårdsanläggning',
      description: 'Kompletta trädgårdsanläggningar från planering till färdig trädgård. Vi skapar din drömträdgård.',
      icon: '🌳',
      features: [
        'Planering & design',
        'Plantering & gräsmattor',
        'Bevattningssystem',
        'Komplett anläggning'
      ]
    },
    {
      id: 'murar',
      title: 'Murar',
      description: 'Byggande av murar i natursten, tegel och betong. Både stödmurar och dekorativa murar.',
      icon: '🧱',
      features: [
        'Stödmurar',
        'Naturstensmurar',
        'Tegelmurar',
        'Dekorativa murar'
      ]
    },
    {
      id: 'tradgardsskotsel',
      title: 'Trädgårdsskötsel',
      description: 'Regelbunden skötsel och underhåll av din trädgård. Vi håller din trädgård i toppskick året runt.',
      icon: '✂️',
      features: [
        'Gräsklippning',
        'Beskärning & trimning',
        'Ogräsrensning',
        'Säsongsplantering'
      ]
    },
    {
      id: 'dranering',
      title: 'Dränering',
      description: 'Professionell dränering för att lösa problem med översvämning och fukt. Långsiktiga lösningar.',
      icon: '💧',
      features: [
        'Dräneringssystem',
        'Dagvattenhantering',
        'Fuktproblem',
        'Markavvattning'
      ]
    },
    {
      id: 'belysning',
      title: 'Belysning',
      description: 'Utebelysning som skapar stämning och trygghet. LED-belysning för energieffektiv lösning.',
      icon: '💡',
      features: [
        'Trädgårdsbelysning',
        'Väg- & entrébelysning',
        'LED-lösningar',
        'Stämningsbelysning'
      ]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId)
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-label">Våra Tjänster</span>
          <h2 className="services-title">
            Professionella Trädgårdstjänster
          </h2>
          <p className="services-description">
            Vi erbjuder ett komplett utbud av trädgårdstjänster för både privatpersoner och företag.
            Med över 13 års erfarenhet garanterar vi högsta kvalitet i varje projekt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <article 
              key={service.id} 
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick(service.id)
                }
              }}
            >
              {/* Service Icon */}
              <div className="service-icon">
                <span className="service-icon-emoji" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>

              {/* Service Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                {/* Service Features */}
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      <span className="feature-icon" aria-hidden="true">✓</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service CTA */}
              <div className="service-cta">
                <button 
                  className="service-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.id)
                  }}
                  aria-label={`Begär offert för ${service.title}`}
                >
                  Begär offert
                  <span className="button-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom-cta">
          <div className="bottom-cta-content">
            <h3 className="bottom-cta-title">Hittar du inte vad du söker?</h3>
            <p className="bottom-cta-text">
              Vi erbjuder även skräddarsydda lösningar för dina specifika behov.
              Kontakta oss för en kostnadsfri konsultation.
            </p>
            <button 
              className="bottom-cta-button"
              onClick={() => handleServiceClick('custom')}
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;