import PropTypes from "prop-types";
import style from "./Card.module.scss";
import kaban from "../../assets/Kabans/kaban-2.svg";
import { Div, Group } from "@vkontakte/vkui";
import { useAppearance } from "@vkontakte/vk-bridge-react";
import { useState } from "react";
import { Icon20ErrorCircle } from "@vkontakte/icons";

export const Card = ({
  question,
  answer,
  card,
  currentQuestion,
  flipped,
  onClick,
}) => {
  const cardArray = card.cards;
  const appearance = useAppearance(); // получить текущую тему

  return (
    <div className={style.root} onClick={() => onClick()}>
      <div
        className={`
          ${style.card} 
          ${flipped ? style.flipped : ""} `}
      >
        <div
          className={`
          ${style.front} 
          ${appearance === "light" ? style.card__light : style.card__dark}`}
        >
          <div className={style.card__front_header}>
            <div className={style.card__title}>Вопрос</div>
            <div className={style.card__number}>
              {currentQuestion + 1}/{cardArray.length}
            </div>
          </div>
          <div className={style.question}>{question}</div>
          <div className={style.img__row}>
            <img className={style.img} src={kaban} />
          </div>
        </div>

        <div
          className={`
          ${style.back}  
          ${appearance === "light" ? style.card__light : style.card__dark}`}
        >
          <div className={style.card__front_header}>
            <div className={style.card__title}>Ответ</div>
          </div>
          <div className={style.question}>{answer}</div>

          <div className={style.card__back_bottom}>
            <Icon20ErrorCircle />
            Чекнуть теорию
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  card: PropTypes.object,
  currentQuestion: PropTypes.number,
};
