import React from 'react';
import './Hero.css';

interface HeroProps {
  onRequestQuote?: () => void;
  onCallUs?: () => void
}

const Hero: React.FC<HeroProps> = ({ onRequestQuote, onCallUs }) => {
  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote()
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  const handleCallUs = () => {
    if (onCallUs) {
      onCallUs()
    } else {
      window.location.href = 'tel:+46701234567'
    }
  };

  const features = [
    {
      id: '1',
      icon: '✓',
      text: '13+ års erfarenhet'
    },
    {
      id: '2',
      icon: '✓',
      text: '500+ nöjda kunder'
    },
    {
      id: '3',
      icon: '✓',
      text: 'Professionell service'
    },
    {
      id: '4',
      icon: '✓',
      text: 'Fri offert & rådgivning'
    }
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Professionell Trädgårdsanläggning i Malmö
            </h1>
            <p className="hero-subtitle">
              Vi skapar vackra och funktionella utemiljöer med över 13 års erfarenhet. 
              Från plattsättning och murar till komplett trädgårdsanläggning.
            </p>
            
            <div className="hero-cta">
              <button 
                className="hero-button hero-button-primary"
                onClick={handleRequestQuote}
                aria-label="Begär offert"
              >
                <span className="hero-button-icon">📋</span>
                Begär offert
              </button>
              <button 
                className="hero-button hero-button-secondary"
                onClick={handleCallUs}
                aria-label="Ring oss"
              >
                <span className="hero-button-icon">📞</span>
                Ring oss
              </button>
            </div>
          </div>

          <div className="hero-features">
            {features.map((feature) => (
              <div key={feature.id} className="hero-feature">
                <span className="hero-feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <span className="hero-feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="hero-scroll-arrow">↓</div>
        <span className="hero-scroll-text">Scrolla för mer</span>
      </div>
    </section>
  )
};

export default Hero;