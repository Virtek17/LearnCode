import PropTypes from "prop-types";
import style from "./Card.module.scss";
import kaban from "../../assets/Kabans/kaban-2.png";
import { Div, Group } from "@vkontakte/vkui";
import { useAppearance } from "@vkontakte/vk-bridge-react";
import { useState } from "react";

export const Card = ({ question, answer, card, currentQuestion, flipped }) => {
  const cardArray = card.cards;
  const appearance = useAppearance(); // получить текущую тему

  return (
    <Div className={style.root}>
      <Div
        className={`
          ${style.card} 
          ${flipped ? style.flipped : ""} `}
      >
        <Div
          className={`
          ${style.front} 
          ${appearance === "light" ? style.card__light : style.card__dark}`}
        >
          <div className={style.card__front_header}>
            <h1 className={style.card__title}>Вопрос</h1>
            <div className={style.card__number}>
              {currentQuestion + 1}/{cardArray.length}
            </div>
          </div>
          <h2 className={style.question}>{question}</h2>
          <img className={style.img} src={kaban} />
        </Div>

        <Div
          className={`
          ${style.back}  
          ${appearance === "light" ? style.card__light : style.card__dark}`}
        >
          <div className={style.card__front_header}>
            <h1 className={style.card__title}>Ответ</h1>
            <div className={style.card__number}>
              {currentQuestion + 1}/{cardArray.length}
            </div>
          </div>
          <h2 className={style.question}>{answer}</h2>
        </Div>
      </Div>
    </Div>
  );
};

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  card: PropTypes.object,
  currentQuestion: PropTypes.number,
};
