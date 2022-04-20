import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div className="form">
      <p className="form__text">Мы всегда готовы помочь вам</p>
    <form
        method="post"
        action="index.html"
        name="sign-up"
        className="form__container"
        noValidate
        autocomplete="off"
      >
        <label className="form__field" htmlFor="name">
          <input
            name="name"
            type="text"
            minLength="2"
            id="name"
            placeholder='Введите имя'
            className="form__input form__input-name"
            required
          ></input>
          <span></span>
        </label>
        <label className="form__field" htmlFor="phone">
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder='Введите телефон'
            minLength="2"
            className="form__input form__input-phone"
            required
          ></input>
          <span></span>
        </label>
        <label className="form__field" htmlFor="question">
          <textarea 
            name="question"
            type="text"
            id="question"
            placeholder='Введите Ваш вопрос'
            className="form__input form__input-question"
            required
          ></textarea >
          <span></span>
        </label>

        <span></span>
        <button
          type="submit"
          className="form__submit"
        >
        Отправить заявку
        </button>

        <div className="form__checkbox checkbox">
          <label className={`checkbox__label ${props.isCheckboxActive ? `checkbox__label_active` : ``}`} onClick={props.changeCheckboxState}>
            <input
              type="checkbox"
              className="checkbox__container"
            ></input>
          </label>
          <p className="checkbox__text">Нажимая на кнопку вы автоматически соглашаетесь с <a href="#" target="_blank" className="checkbox__text_link">политикой конфидициальности</a></p>
        </div>
      </form>
      </div>
  );
}

export default Form;
