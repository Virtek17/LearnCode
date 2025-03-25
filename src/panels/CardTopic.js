import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Button, Panel, PanelHeader, Tabbar } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import { Card } from "../Components/Card/Card";
import { useState } from "react";
import "../styles/cardTopic.scss";
import {
  Icon24ThumbsUpOutline,
  Icon24ThumbsDownOutline,
} from "@vkontakte/icons";

export const CardTopic = ({ id }) => {
  const { topic } = useParams(); // Получаем тему из URL

  const cardsForTopic = [
    {
      title: "html",
      cards: [
        {
          question: "Что такое HTML?",
          answer: "HTML — это язык разметки страниц.",
        },
        {
          question: "В какой тэг оборачивать шапку страницы?",
          answer: "<header>",
        },
        {
          question: "Для чего используется тэг <br>?",
          answer: "<br> используется для переноса строки",
        },
        {
          question: "Где прописывается подключение стилей?",
          answer: "В тэге <head>",
        },
        {
          question: "Что случится если написать <header> внутри <footer>",
          answer: "Ничего не случится, но это семмантически не верно",
        },
      ],
    },
    {
      title: "css",
      cards: [
        {
          question: "Что такое CSS?",
          answer: "CSS — это язык стилей для оформления страниц.",
        },
        {
          question: "Каким свойством задается цвет текста?",
          answer: "color",
        },
        {
          question: "Как выровнять блок по центру?",
          answer: `Родительскому элементу задать следующие свойства: 
          display: flex;
          justify-content: space-between;
          align-items: center;`,
        },
      ],
    },
    {
      title: "js",
      cards: [
        {
          question: "Что такое JS?",
          answer: "JS — это язык программирования для веба.",
        },
        {
          question: "В чем отличие const от let?",
          answer: "const нельзя изменить, а let можно",
        },
        {
          question: "Как сделать бесконечный цикл?",
          answer: "white(true)",
        },
        {
          question: "Как подключить JavaScript файл к старанице?",
          answer: "В <head> написать <script src='путь до файла'><srcipt/>",
        },
      ],
    },
  ];

  const card = cardsForTopic.find((item) => item.title === topic); // Ищем карточку по topic
  const [activeCard, setActiveCard] = useState(0);

  const [flipped, setFlipped] = useState(false);

  return (
    <Panel
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <PanelHeader>Карточки по теме {topic}</PanelHeader>

      <div className="row">
        {card ? (
          <Card
            card={card}
            currentQuestion={activeCard}
            question={card.cards[activeCard].question}
            answer={card.cards[activeCard].answer}
            flipped={flipped}
            style={{ flex: "1" }}
          />
        ) : (
          <div>Нет данных для этой темы</div>
        )}

        {flipped && (
          <div className="buttons-wrapper">
            <Button mode="outline" before={<Icon24ThumbsDownOutline />}>
              Чет не вывез
            </Button>
            <Button
              activated="true"
              activeClassName="btnActive"
              mode="outline"
              before={<Icon24ThumbsUpOutline />}
            >
              Вкатил с лету
            </Button>
          </div>
        )}

        <div className="check-button">
          <Button
            style={{ flex: "2" }}
            stretched={true}
            onClick={() => setFlipped(!flipped)}
          >
            {flipped == true ? "Далее" : "Проверить"}
          </Button>
        </div>
      </div>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

CardTopic.propTypes = {
  id: PropTypes.string.isRequired,
};
