import React from 'react';
import './Footer.css';

interface FooterProps {
  onNavigate?: (section: string) => void
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (section: string) => {
    if (onNavigate) {
      onNavigate(section)
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  const quickLinks = [
    { id: 'hero', label: 'Hem' },
    { id: 'services', label: 'Tjänster' },
    { id: 'about', label: 'Om oss' },
    { id: 'contact', label: 'Kontakt' }
  ];

  const services = [
    { id: 'plattsattning', label: 'Plattsättning' },
    { id: 'tradgardsanlaggning', label: 'Trädgårdsanläggning' },
    { id: 'murar', label: 'Murar & Stödmurar' },
    { id: 'tradgardsskotsel', label: 'Trädgårdsskötsel' },
    { id: 'dranering', label: 'Dränering' },
    { id: 'belysning', label: 'Trädgårdsbelysning' }
  ];

  const socialLinks = [
    {
      id: 'facebook',
      icon: '📘',
      label: 'Facebook',
      url: 'https://facebook.com',
      ariaLabel: 'Besök oss på Facebook'
    },
    {
      id: 'instagram',
      icon: '📷',
      label: 'Instagram',
      url: 'https://instagram.com',
      ariaLabel: 'Följ oss på Instagram'
    },
    {
      id: 'linkedin',
      icon: '💼',
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      ariaLabel: 'Anslut med oss på LinkedIn'
    }
  ];

  const contactInfo = [
    {
      id: 'phone',
      icon: '📞',
      label: 'Telefon',
      value: '+46 70 123 45 67',
      link: 'tel:+46701234567'
    },
    {
      id: 'email',
      icon: '✉️',
      label: 'E-post',
      value: 'info@malmotradgard.se',
      link: 'mailto:info@malmotradgard.se'
    },
    {
      id: 'address',
      icon: '📍',
      label: 'Adress',
      value: 'Malmö, Skåne',
      link: null
    }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-grid">
            {/* Company Info Column */}
            <div className="footer-column footer-company">
              <div className="footer-logo">
                <span className="footer-logo-icon">🌳</span>
                <span className="footer-logo-text">Malmö Trädgårdsanläggning</span>
              </div>
              <p className="footer-description">
                Med över 13 års erfarenhet skapar vi vackra och funktionella trädgårdar i Malmö och Skåne. 
                Professionell service från planering till färdig anläggning.
              </p>
              <div className="footer-certifications">
                <div className="certification-badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">Certifierad</span>
                </div>
                <div className="certification-badge">
                  <span className="badge-icon">🏆</span>
                  <span className="badge-text">Kvalitetsgaranti</span>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Snabblänkar</h3>
              <ul className="footer-links" role="list">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className="footer-link"
                      aria-label={`Navigera till ${link.label}`}
                    >
                      <span className="link-arrow">→</span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Våra Tjänster</h3>
              <ul className="footer-links" role="list">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => handleNavigation('services')}
                      className="footer-link"
                      aria-label={`Läs mer om ${service.label}`}
                    >
                      <span className="link-arrow">→</span>
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Kontakta Oss</h3>
              <ul className="footer-contact" role="list">
                {contactInfo.map((info) => (
                  <li key={info.id} className="contact-item">
                    <span className="contact-icon" aria-hidden="true">{info.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="contact-value contact-link"
                          aria-label={`${info.label}: ${info.value}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Opening Hours */}
              <div className="footer-hours">
                <h4 className="hours-heading">Öppettider</h4>
                <p className="hours-text">Mån-Fre: 07:00 - 17:00</p>
                <p className="hours-text">Lör: 08:00 - 14:00</p>
                <p className="hours-text">Sön: Stängt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Middle Section - Social Media */}
        <div className="footer-middle">
          <div className="footer-social">
            <h3 className="social-heading">Följ Oss</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                >
                  <span className="social-icon" aria-hidden="true">{social.icon}</span>
                  <span className="social-label">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section - Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Malmö Trädgårdsanläggning. Alla rättigheter förbehållna.
            </p>
            <div className="footer-legal">
              <button className="legal-link" aria-label="Läs vår integritetspolicy">
                Integritetspolicy
              </button>
              <span className="legal-separator" aria-hidden="true">•</span>
              <button className="legal-link" aria-label="Läs våra användarvillkor">
                Användarvillkor
              </button>
              <span className="legal-separator" aria-hidden="true">•</span>
              <button className="legal-link" aria-label="Läs om cookies">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration" aria-hidden="true">
        <div className="decoration-leaf decoration-leaf-1">🍃</div>
        <div className="decoration-leaf decoration-leaf-2">🍃</div>
        <div className="decoration-leaf decoration-leaf-3">🍃</div>
      </div>
    </footer>
  )
};

export default Footer;