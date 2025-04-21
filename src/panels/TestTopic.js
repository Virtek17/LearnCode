import {
  Panel,
  Tabbar,
  PanelHeader,
  useAppearance,
  Button,
} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import { useParams } from "@vkontakte/vk-mini-apps-router";

import MyTabbar from "../Components/MyTabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import { TestCard } from "../Components/TestCard/TestCard";
import kaban from "../assets/Kabans/kaban-busy.svg";

import { useState } from "react";
import clsx from "clsx";

import "../styles/testTopic.css";
import { Icon20ErrorCircle } from "@vkontakte/icons";

export const TestTopic = ({ id }) => {
  const [activeTest, setActiveTest] = useState(0);
  const { topic } = useParams();
  const appearance = useAppearance();
  const directions = [
    {
      title: "Основы HTML",
      tests: [
        {
          question: "Какой тэг указывает на тип документа",
          answer: "<!DOCTYPE html>",
          variant: ["<!html>", "<document>", "<!DOCTYPE html>", "<html>"],
        },
        // {
        //   question: "Какой тег является корневым элементом HTML-страницы?",
        //   answer: "<html>",
        //   variant: ["<head>", "<html>", "<body>", "<!DOCTYPE>"],
        // },
        // {
        //   question:
        //     "Какой раздел содержит метаинформацию о странице (например, заголовок, кодировку)",
        //   answer: "<head>",
        //   variant: ["<head>", "<body>", "<footer>", "<meta>"],
        // },
        // {
        //   question: "Где должен располагаться контент, видимый пользователю?",
        //   answer: "<body>",
        //   variant: ["<head>", "<body>", "<html>", "<!DOCTYPE>"],
        // },
        // {
        //   question:
        //     "Какой элемент определяет заголовок, отображаемый в строке заголовка или на вкладке браузера?",
        //   answer: "<title>",
        //   variant: ["<title>", "<body>", "<head>", "<meta>"],
        // },
        // {
        //   question: "Какой тег используется для самого важного заголовка?",
        //   answer: "<h1>",
        //   variant: ["<h1>", "<h2>", "<title>", "<header>"],
        // },
        // {
        //   question: "Сколько уровней заголовков существует в HTML?",
        //   answer: "6",
        //   variant: ["3", "5", "6", "4"],
        // },
        // {
        //   question: "Какой тег НЕ является заголовком?",
        //   answer: "",
        //   variant: ["<h3>", "<h5>", "<p>", "<h6>"],
        // },
        // {
        //   question: "Какой тег создаёт абзац?",
        //   answer: "<p>",
        //   variant: ["<a>", "<p>", "<br>", "<hr>"],
        // },
        // {
        //   question:
        //     "Какой тег используется для переноса строки без создания нового абзаца?",
        //   answer: "<br>",
        //   variant: ["<hr>", "<p>", "<div>", "<br>"],
        // },
        // {
        //   question: "Какой тег создаёт горизонтальную линию?",
        //   answer: "<hr>",
        //   variant: ["<line>", "<hr>", "<br>", "<p>"],
        // },
        // {
        //   question: "Как правильно добавить комментарий в HTML?",
        //   answer: "<!-- Это комментарий -->",
        //   variant: [
        //     "// Это комментарий",
        //     "/* Это комментарий */",
        //     "<!-- Это комментарий -->",
        //     "<! Это комментарий>",
        //   ],
        // },
        // {
        //   question: "Видны ли HTML-комментарии пользователю?",
        //   answer: "Только при просмотре кода страницы",
        //   variant: [
        //     "Да, они отображаются на странице",
        //     "Только если навести курсор",
        //     "Зависит от браузера",
        //     "Только при просмотре кода страницы",
        //   ],
        // },
        // {
        //   question: "Что произойдёт, если написать <h7>Текст</h7>?",
        //   answer: "Текст отобразится как обычный (без стилей заголовка)",
        //   variant: [
        //     "Браузер выведет ошибку",
        //     "Текст будет крупнее, чем в <h6>",
        //     "Текст отобразится как обычный (без стилей заголовка)",
        //     "Браузер проигнорирует этот тег",
        //   ],
        // },
        // {
        //   question: "",
        //   answer: "",
        //   variant: "",
        // },
      ],
    },
    {
      title: "Форматирование текста",
      tests: [
        {
          question: "Что такое форматирование",
          answer: "Ответ на вопрос форматирования",
          variant: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
        },
        {
          question: "ВИды форматирования",
          answer: "Ответ на вопрос про виды форматирования",
          variant: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
        },
      ],
    },
  ];
  const theme = directions.find((item) => item.title === topic);
  const [checked, setChecked] = useState(false); // выбрали вариант ответа
  const [isDisabled, setIsDisabled] = useState(false);
  const [uncorrectedAnswersCount, setUncorrectedAnswersCount] = useState(0);

  const handleUncorrectAnswer = (count) => {
    setUncorrectedAnswersCount(count);
  };

  // проверить ответ
  const checkAnswer = () => {
    setChecked(true);
  };

  const nextQuestion = () => {
    setActiveTest(activeTest + 1);
    setChecked(false);
  };

  // const needDirection = directions.filter((item) => item.title === topic);

  if (!theme) {
    return <div>Тестов по {topic} нет</div>;
  }

  return (
    <Panel id={id}>
      <PanelHeader>Тесты</PanelHeader>
      <Title title={topic} />
      <MainContainer>
        {theme.tests.length > activeTest ? (
          <>
            <div className="test-header">
              <div className="title">Вопрос: </div>
              <div
                className={clsx("count", {
                  ["count__light"]: appearance === "light",
                  ["count__dark"]: appearance !== "light",
                })}
              >
                {activeTest + 1} / {theme.tests.length}
              </div>
            </div>

            <TestCard
              question={theme.tests[activeTest].question}
              answer={theme.tests[activeTest].answer}
              variant={theme.tests[activeTest].variant}
              checked={checked}
              onUncorrectedAnswer={handleUncorrectAnswer} // передаем callback
            />
            <Button
              disabled={isDisabled}
              stretched
              onClick={() => (checked ? nextQuestion() : checkAnswer())}
            >
              {checked ? "Далее" : "Проверить"}
            </Button>
          </>
        ) : (
          <div className="testEnd">
            <div className="testEnd__content">
              <div className="end-title">Чисто вынес этот тест</div>
              <div className="result">
                {uncorrectedAnswersCount} / {theme.tests.length}
              </div>
              <div className="img">
                <img src={kaban} alt="img kaban" />
              </div>
              <div className="bottom">
                <Icon20ErrorCircle />
                Чекнуть теорию
              </div>
            </div>
            <div className="btns">
              <Button stretched>Перейти к следующей теме</Button>
              <Button stretched>Пройти заново</Button>
            </div>
          </div>
        )}
      </MainContainer>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

TestTopic.propTypes = {
  id: PropTypes.string.isRequired,
};
