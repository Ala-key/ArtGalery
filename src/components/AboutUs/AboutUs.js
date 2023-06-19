import React from 'react';
import './AboutUs.css';
import img from "../../assets/avtosalon.jpg"
import img2 from "../../assets/avtosalon2.jpg"
import img3 from "../../assets/avtosalon3.jpg"

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-text">
          <h3 className='title'>Добро пожаловать в картинную галерею!</h3>
          <p>

            Добро пожаловать в нашу картинную галерею, ваше премиум-назначение для всех ваших потребностей в изображениях. В нашей галерее вы сможете насладиться красивыми и впечатляющими картинами, которые привнесут вдохновение и радость. Мы страстно увлечены искусством фотографии и стремимся обеспечить вам высокое качество сервиса и незабываемые визуальные впечатления.
          </p>
          <p>
            С годами опыта в сфере искусства и фотографии, наши талантливые специалисты преданы предоставлению первоклассных услуг по обслуживанию и экспозиции в нашей картинной галерее. Мы специализируемся на кураторстве и показе красивых и вдохновляющих картин, представляющих различные жанры, стили и техники. Наша команда обладает экспертизой и страстью к искусству, и мы гордимся предлагать незабываемые визуальные впечатления для наших посетителей.
          </p>
          <p>
            Мы понимаем, что искусство и фотографии являются для вас важными источниками вдохновения, и мы стремимся обеспечить максимальную удовлетворенность наших посетителей. Наш дружелюбный и компетентный персонал всегда готов ответить на ваши вопросы, предоставить экспертные советы и помочь вам принимать информированные решения относительно экспозиции и приобретения произведений искусства. Мы ценим ваше участие и стремимся создать комфортную и вдохновляющую атмосферу в нашей картинной галерее.
          </p>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img src={img} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;