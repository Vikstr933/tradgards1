import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['hero', 'services', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      });

      if (currentSection) {
        setActiveSection(currentSection)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  };

  const handleRequestQuote = () => {
    scrollToSection('contact')
  };

  const handleCallUs = () => {
    window.location.href = 'tel:+46701234567'
  };

  const handleServiceClick = (serviceId: string) => {
    scrollToSection('contact')
  };

  const handleContactClick = () => {
    scrollToSection('contact')
  };

  const handleNavigation = (section: string) => {
    scrollToSection(section)
  };

  const handleSubmitSuccess = () => {
    console.log('Form submitted successfully')
  };

  return (
    <div className="app">
      <nav className={`navigation ${isScrolled ? 'navigation-scrolled' : ''}`}>
        <div className="navigation-container">
          <div className="navigation-logo">
            <span className="logo-icon">🌳</span>
            <span className="logo-text">Malmö Trädgårdsanläggning</span>
          </div>

          <ul className="navigation-menu">
            <li>
              <button
                className={`nav-link ${activeSection === 'hero' ? 'nav-link-active' : ''}`}
                onClick={() => scrollToSection('hero')}
                aria-label="Navigera till startsidan"
              >
                Hem
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === 'services' ? 'nav-link-active' : ''}`}
                onClick={() => scrollToSection('services')}
                aria-label="Navigera till tjänster"
              >
                Tjänster
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === 'about' ? 'nav-link-active' : ''}`}
                onClick={() => scrollToSection('about')}
                aria-label="Navigera till om oss"
              >
                Om oss
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
                onClick={() => scrollToSection('contact')}
                aria-label="Navigera till kontakt"
              >
                Kontakt
              </button>
            </li>
          </ul>

          <div className="navigation-cta">
            <a
              href="tel:+46701234567"
              className="nav-phone"
              aria-label="Ring oss på 070-123 45 67"
            >
              <span className="nav-phone-icon">📞</span>
              <span className="nav-phone-text">070-123 45 67</span>
            </a>
            <button
              className="nav-button"
              onClick={handleRequestQuote}
              aria-label="Begär offert"
            >
              Begär offert
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section id="hero">
          <Hero
            onRequestQuote={handleRequestQuote}
            onCallUs={handleCallUs}
          />
        </section>

        <section id="services">
          <Services onServiceClick={handleServiceClick} />
        </section>

        <section id="about">
          <About onContactClick={handleContactClick} />
        </section>

        <section id="contact">
          <Contact onSubmitSuccess={handleSubmitSuccess} />
        </section>
      </main>

      <Footer onNavigate={handleNavigation} />

      <button
        className={`scroll-to-top ${isScrolled ? 'scroll-to-top-visible' : ''}`}
        onClick={() => scrollToSection('hero')}
        aria-label="Scrolla till toppen"
      >
        <span className="scroll-to-top-icon">↑</span>
      </button>
    </div>
  )
}

export default App;