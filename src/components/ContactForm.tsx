import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm('xbdzbeqz');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    setFormData({ name: '', email: '', subject: '', message: '' });
    if (onSuccess) onSuccess();
  };

  // Helper para el patrón "floating label" — la clase cambia cuando hay valor
  const hasValue = (k: keyof typeof formData) =>
    formData[k].length > 0 ? 'has-value' : '';

  return (
    <>
      <form
        className={`contact-form ${state.succeeded ? 'contact-form--hidden' : ''}`}
        onSubmit={onSubmit}
      >
        <div className="contact-form__header">
          <span className="contact-form__dots" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="contact-form__title">// nuevo_mensaje.tsx</span>
        </div>

        <div className={`form-group form-group--float ${hasValue('name')}`}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="name">Nombre</label>
          <ValidationError prefix="Nombre" field="name" errors={state.errors} />
        </div>

        <div className={`form-group form-group--float ${hasValue('email')}`}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="email">Email</label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={`form-group form-group--float ${hasValue('subject')}`}>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="subject">Asunto</label>
          <ValidationError prefix="Asunto" field="subject" errors={state.errors} />
        </div>

        <div className={`form-group form-group--float ${hasValue('message')}`}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label htmlFor="message">Mensaje</label>
          <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          className="contact-submit-btn"
          disabled={state.submitting}
        >
          {state.submitting ? 'Enviando...' : 'Enviar mensaje →'}
        </button>
      </form>

      {state.succeeded && (
        <div className="contact-success-overlay" role="status" aria-live="polite">
          <i className="bi bi-check-circle-fill contact-success-icon" aria-hidden="true" />
          <p className="contact-success-title">Correo enviado correctamente</p>
          <p className="contact-success-text">Gracias por contactar, te responderé pronto.</p>
        </div>
      )}
    </>
  );
};

export default ContactForm;
