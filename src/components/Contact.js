import React, { useContext } from 'react';
import AppContext from '../AppContext';



const Contact = () => {
  const { form, setForm, status, setStatus } = useContext(AppContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Отправка...');

    try {
      const response = await fetch('https://formspree.io/f/mwkgzjqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.statusText}`);
      }

      setStatus('Сообщение отправлено успешно!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
      setStatus(`Ошибка при отправке сообщения: ${error.message}`);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Контакты</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Отправить</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Contact;
