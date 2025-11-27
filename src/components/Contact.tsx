import React, { useState, FormEvent, ChangeEvent } from 'react';
import './Contact.css';
import { ContactFormData, ContactFormErrors } from '../types';

interface ContactProps {
  onSubmitSuccess?: () => void
}

const Contact: React.FC<ContactProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    { value: '', label: 'Välj tjänst' },
    { value: 'plattsattning', label: 'Plattsättning' },
    { value: 'tradgardsanlaggning', label: 'Trädgårdsanläggning' },
    { value: 'murar', label: 'Murar & Stödmurar' },
    { value: 'tradgardsskotsel', label: 'Trädgårdsskötsel' },
    { value: 'dranering', label: 'Dränering' },
    { value: 'belysning', label: 'Trädgårdsbelysning' },
    { value: 'annat', label: 'Annat' }
  ];

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Namn är obligatoriskt'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Namn måste vara minst 2 tecken'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-post är obligatoriskt'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ogiltig e-postadress'
    }

    const phoneRegex = /^[0-9+\s()-]{8,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon är obligatoriskt'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Ogiltigt telefonnummer'
    }

    if (!formData.service) {
      newErrors.service = 'Välj en tjänst'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Meddelande är obligatoriskt'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Meddelande måste vara minst 10 tecken'
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return
    };
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      if (onSubmitSuccess) {
        onSubmitSuccess()
      }

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  };

  const contactInfo = [
    {
      id: '1',
      icon: '📞',
      title: 'Telefon',
      value: '+46 70 123 45 67',
      link: 'tel:+46701234567'
    },
    {
      id: '2',
      icon: '✉️',
      title: 'E-post',
      value: 'info@malmotradgard.se',
      link: 'mailto:info@malmotradgard.se'
    },
    {
      id: '3',
      icon: '📍',
      title: 'Adress',
      value: 'Malmö, Skåne',
      link: null
    },
    {
      id: '4',
      icon: '🕐',
      title: 'Öppettider',
      value: 'Mån-Fre: 07:00-17:00',
      link: null
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">Kontakta Oss</span>
          <h2 className="contact-title">Få en Kostnadsfri Offert</h2>
          <p className="contact-description">
            Berätta om ditt projekt så återkommer vi med en skräddarsydd offert. 
            Vi erbjuder kostnadsfri rådgivning och platsbesök.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Namn <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Ditt fullständiga namn"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span className="form-error" id="name-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    E-post <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="din@email.se"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span className="form-error" id="email-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Telefon <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="070-123 45 67"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span className="form-error" id="phone-error" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Tjänst <span className="required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className={`form-select ${errors.service ? 'error' : ''}`}
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="form-error" id="service-error" role="alert">
                    {errors.service}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Meddelande <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Beskriv ditt projekt och vad du behöver hjälp med..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span className="form-error" id="message-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="form-success" role="alert">
                  <span className="success-icon">✓</span>
                  <p>Tack för ditt meddelande! Vi återkommer inom 24 timmar.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error-message" role="alert">
                  <span className="error-icon">✕</span>
                  <p>Något gick fel. Vänligen försök igen eller ring oss direkt.</p>
                </div>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" aria-hidden="true"></span>
                    Skickar...
                  </>
                ) : (
                  <>
                    <span className="submit-icon">📧</span>
                    Skicka Förfrågan
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Kontaktinformation</h3>
              <p className="contact-info-text">
                Vi finns här för att hjälpa dig med alla dina trädgårdsbehov. 
                Kontakta oss idag för en kostnadsfri konsultation.
              </p>

              <div className="contact-info-list">
                {contactInfo.map(info => (
                  <div key={info.id} className="contact-info-item">
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-label">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="contact-info-link">
                          {info.value}
                        </a>
                      ) : (
                        <p className="contact-info-value">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-cta">
                <h4 className="contact-cta-title">Akut trädgårdshjälp?</h4>
                <p className="contact-cta-text">
                  Ring oss direkt för snabb service och rådgivning.
                </p>
                <a href="tel:+46701234567" className="contact-cta-button">
                  <span className="cta-icon">📞</span>
                  Ring Nu: +46 70 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;