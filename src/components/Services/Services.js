import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
    <h2 className="services__title">Чем мы можем помочь</h2>
    <div className="services__grid">
      <div className="services__block services__block_1">
        <div className="services__overlay"></div>
        <div className="services__info">
          <h3 className="services__name">консультация юриста по спорной ситуации </h3>
          <p className="services__description">Это бесплатная услуга, которая поможет Вам сориентироваться и принять решение о дальнейших действиях.</p>
        </div>
      </div>
      <div className="services__block services__block_2">
      <div className="services__overlay"></div>
        <div className="services__info">
          <h3 className="services__name">Независимая экспертиза</h3>
          <p className="services__description">При необходимости мы готовы ее организовать и провести (как показывает практика, затраты на эту услугу окупаются и возвращаются заказчику).</p>
        </div>
      </div>
      <div className="services__block services__block_3">
      <div className="services__overlay"></div>
        <div className="services__info">
          <h3 className="services__name">Подача исковых заявлений в суд</h3>
          <p className="services__description">А также защита и представление Ваших интересов в суде от профессиональных юриство</p>
        </div>
      </div>
      <div className="services__block services__block_4">
      <div className="services__overlay"></div>
        <div className="services__info">
          <h3 className="services__name">Обжалование решений суда в вашу пользу</h3>
          <p className="services__description">При необходимости наши юристы повлияют на судебный процесс и обжалуют решение суда.</p>
        </div>
      </div>
      <div className="services__block services__block_5">
      <div className="services__overlay"></div>
        <div className="services__info">
          <h3 className="services__name">урегулирование вопросов с представителями услуг</h3>
          <p className="services__description">Большинство наших клиентов получают нужный результат – возвращают деньги, потраченные на товар/услугу, а также получают компенсацию морального вреда и расходов, понесенных в процессе отстаивании своих прав</p>
        </div>
      </div>
      <div className="services__block services__block_6">
      <div className="services__overlay"></div>
        <div className="services__info">
          <h3 className="services__name">помощь в составлении заявления</h3>
          <p className="services__description">Наши юристы помогут Вам составить грамотное заявление для обращения в суд по вашему вопросу.</p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Services;
