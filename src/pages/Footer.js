import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h3 className="titles">Карта сайта</h3>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/contact">Свяжитесь с нами</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3 className="titles">Категории</h3>
          <ul>
            <li>
              <Link to="/categories/пейзажи">Пейзажи</Link>
            </li>
            <li>
              <Link to="/categories/архитектура">Архитектура</Link>
            </li>
            <li>
              <Link to="/categories/портреты">Портреты</Link>
            </li>
            <li>
              <Link to="/categories/Искусство">Искусство</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3 className="titles">Свяжитесь с нами</h3>
          <p>
            г. Москва, Россия
            <br /> ул. Тверская, дом 1
          </p>
          <p>
            Телефон: +7 999 123 4567
            <br /> Эл. почта: example@mail.ru
          </p>
        </div>
        <div className="col-md-3">
          <h3 className="titles mar-left">Подписывайтесь на нас</h3>
          <ul className="social-media">
            <li>
              <BsFacebook id="fac"/>             
            </li>
            <li>
              <a href="https://twitter.com">
               <BsTwitter id="twit"/>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <BsInstagram id="inst"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;