import React from 'react';
import mePhoto from '../images/me.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={mePhoto}  alt="Фото" className="about-photo" />
        <div className="about-text">
          <h2>Обо мне</h2>
          <p>Привет! Я Алишер, frontend разработчик с опытом в создании современных веб-приложений. Я специализируюсь на React, Redux и современных веб-технологиях.</p>
          <p>Моя цель — создавать качественные и удобные для пользователя интерфейсы. Я стремлюсь постоянно развиваться и изучать новые технологии.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
