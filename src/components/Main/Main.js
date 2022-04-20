import React from "react";
import "./Main.css";
import Form from '../Form/Form';

function Main(props) {
  return (
    <div className="main">
      <div className="main__info">
        <h1 className="main__title">Продали услугу или товар ненадлежащего качества?</h1>
        <p className="main__subtitle">Наша команда юристов  поможет Вам вернуть деньги и отстоять Ваш интерес в спорах с продавцами,подрядчиками.</p>
        <button className="main__btn">Заказать консультацию</button>
      </div>
      <Form
      changeCheckboxState={props.changeCheckboxState}
      isCheckboxActive={props.isCheckboxActive}></Form>
    </div>
  );
}

export default Main;
