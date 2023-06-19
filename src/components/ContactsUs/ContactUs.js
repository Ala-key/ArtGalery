import React from 'react';
import './ContactUs.css';


const ContactUs = () => {

  return (
    <div className="contacts-container container">
    <h2 className="contacts-heading">Свяжитесь с нами</h2>
    <div className="contact-details">
      <p>
        <strong className="contact-label">Адрес:</strong> г. Москва, Россия, ул. Тверская, дом 1
      </p>
      <p>
        <strong className="contact-label">Телефон:</strong> +7 999 123 4567
      </p>
      <p>
        <strong className="contact-label">Эл. почта:</strong> art-beauty@mail.ru
      </p>
      <p>
        <strong className="contact-label">Режим работы:</strong> понедельник-пятница, с 9:00 до 18:00
      </p>
    </div>
  </div>
  );
};

export default ContactUs;