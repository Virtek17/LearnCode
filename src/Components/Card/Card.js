import PropTypes from "prop-types";
import style from "./Card.module.css";
import kaban from "../../assets/Kabans/kaban-2.png";
import { Div, Group } from "@vkontakte/vkui";
import { useAppearance } from "@vkontakte/vk-bridge-react";
import { useState } from "react";

export const Card = ({ question, answer, card, currentQuestion, flipped }) => {
  const cardArray = card.cards;
  const apperance = useAppearance(); // получить текущую тему

  return (
    <Div className={style.root}>
      <Div
        className={`${style.card} ${
          apperance == "light" ? style.card__light : style.card__dark
        }`}
      >
        <Div className={`${style.content} ${flipped ? style.flipped : ""}`}>
          <Div className={style.front}>
            <div className={style.cardHeader}>
              <h1 className={style.cardTitle}>Вопрос</h1>
              <div className={style.cardNumber}>
                {currentQuestion + 1}/{cardArray.length}
              </div>
            </div>
            <h1 className={style.question}>{question}</h1>
            {/* <p>{answer}</p> */}
            <img className={style.img} src={kaban} />
          </Div>
          <Div className={style.back}>{answer}</Div>
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
