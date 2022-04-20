import React from "react";
import "./AboutUs.css";
import aboutImg1 from "../../images/about-us-1.png";
import aboutImg2 from "../../images/about-us-2.png";

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
    <div className="about-us__block">
      <img src={aboutImg1} alt="Фото" className="about-us__img"></img>
      <div className="about-us__info">
        <h2 className="about-us__title">О нашей команде</h2>
        <p className="about-us__text">Наша компания предлагает услуги юриста по защите прав потребителя. 
          Мы поможем разрешить конфликтную ситуацию с продавцами или поставщиками услуг в максимально сжатые сроки в досудебном или судебном порядке.</p>
      </div>
    </div>
    <div className="about-us__block about-us__block_second">
      <div className="about-us__info">
        <h2 className="about-us__title">Чем мы занимаемся</h2>
        <p className="about-us__text">Наши юристы грамотно составляют иски к продавцам,подготавливают всю необходимую документацию,также отправляют жалобу в Роспотребнадзор. Мы возвращаем деньги за некачественные товары или услуги.</p>
      </div>
      <img src={aboutImg2} alt="Фото" className="about-us__img"></img>
    </div>
  </section>
  );
}

export default AboutUs;
