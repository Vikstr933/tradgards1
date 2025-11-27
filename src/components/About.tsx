import React from 'react';
import './About.css';
import { Statistic } from '../types';

interface AboutProps {
  onContactClick?: () => void
}

const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const statistics: Statistic[] = [
    {
      id: '1',
      value: '500+',
      label: 'Nöjda kunder',
      icon: '👥'
    },
    {
      id: '2',
      value: '13+',
      label: 'Års erfarenhet',
      icon: '⭐'
    },
    {
      id: '3',
      value: '1000+',
      label: 'Genomförda projekt',
      icon: '🏆'
    },
    {
      id: '4',
      value: '100%',
      label: 'Kvalitetsgaranti',
      icon: '✓'
    }
  ];

  const reasons = [
    {
      id: '1',
      icon: '🎯',
      title: 'Professionell Expertis',
      description: 'Med över 13 års erfarenhet i branschen har vi den kunskap och kompetens som krävs för att leverera högkvalitativa trädgårdslösningar.'
    },
    {
      id: '2',
      icon: '💎',
      title: 'Kvalitet i Fokus',
      description: 'Vi använder endast förstklassiga material och moderna metoder för att säkerställa hållbara och vackra resultat som håller över tid.'
    },
    {
      id: '3',
      icon: '🤝',
      title: 'Personlig Service',
      description: 'Varje projekt är unikt. Vi lyssnar på dina önskemål och skapar skräddarsydda lösningar som passar just dina behov och din budget.'
    },
    {
      id: '4',
      icon: '⚡',
      title: 'Snabb & Pålitlig',
      description: 'Vi värdesätter din tid. Projekten genomförs effektivt och professionellt med tydlig kommunikation från start till mål.'
    },
    {
      id: '5',
      icon: '🌱',
      title: 'Miljömedveten',
      description: 'Vi arbetar med hållbara metoder och miljövänliga material för att skapa trädgårdar som är vackra både för dig och för miljön.'
    },
    {
      id: '6',
      icon: '💰',
      title: 'Konkurrensmässiga Priser',
      description: 'Professionell kvalitet behöver inte kosta skjortan. Vi erbjuder transparenta priser och fri offert utan förpliktelser.'
    }
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <span className="about-label">Om Oss</span>
          <h2 className="about-title">Malmö Trädgårdsanläggning</h2>
          <p className="about-subtitle">
            Din pålitliga partner för professionell trädgårdsanläggning i Malmö och Skåne
          </p>
        </div>

        {/* Company Info */}
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-content-title">Expertis och Passion för Trädgårdar</h3>
            <p className="about-description">
              Sedan starten har vi hjälpt hundratals kunder i Malmö och Skåne att förverkliga sina trädgårdsdrömmar. 
              Med över 13 års erfarenhet och 500+ nöjda kunder är vi stolta över att vara en av regionens mest 
              pålitliga aktörer inom trädgårdsanläggning.
            </p>
            <p className="about-description">
              Vi erbjuder kompletta lösningar från planering och design till färdig anläggning. Oavsett om det 
              gäller plattsättning, murar, plantering eller trädgårdsskötsel, så utför vi varje projekt med samma 
              höga kvalitet och engagemang.
            </p>
            <p className="about-description">
              Vårt team består av erfarna yrkesmän som brinner för sitt arbete. Vi kombinerar traditionellt 
              hantverkskunnande med moderna tekniker för att skapa trädgårdar som är både vackra och funktionella.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="about-stats">
            {statistics.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-us">
          <div className="why-header">
            <h3 className="why-title">Varför Välja Oss?</h3>
            <p className="why-subtitle">
              Sex goda skäl att lita på Malmö Trädgårdsanläggning för ditt nästa projekt
            </p>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason) => (
              <div key={reason.id} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h4 className="reason-title">{reason.title}</h4>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <div className="about-cta-content">
            <h3 className="about-cta-title">Redo att Förverkliga Din Trädgårdsdröm?</h3>
            <p className="about-cta-text">
              Kontakta oss idag för en kostnadsfri konsultation och offert. Vi hjälper dig från idé till färdig trädgård.
            </p>
            <button 
              className="about-cta-button"
              onClick={handleContactClick}
              aria-label="Kontakta oss för offert"
            >
              Begär Kostnadsfri Offert
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;