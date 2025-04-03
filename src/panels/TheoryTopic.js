import { FormItem, Panel, PanelHeader, Select, Tabbar } from "@vkontakte/vkui";
// import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import {useParams } from "@vkontakte/vk-mini-apps-router";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import FlexContainer from "../Components/FlexContainer/FlexContainer";

export const TheoryTopic = ({ id }) => {
  // const routeNavigator = useRouteNavigator();
  const { topic } = useParams(); // Получаем тему из URL

  const theoryForTopic = [
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

  const theory = theoryForTopic.find((item) => item.title === topic);

  if (!theory) {
    return <div>Теории по теме нет</div>
  }

  return (
    <Panel id={id}>
        <PanelHeader>Теория по {theory.title}</PanelHeader>

        {theory && (
          <div>
            <h1>{theory.title}</h1>
          </div>
         
        )}
        <FormItem>
          <Select 
            id="select-id"
            placeholder="Не выбран"
            options={["1", "1","1"]}
          />
        </FormItem>
        <Tabbar>
        <MyTabbar />
        </Tabbar>
    </Panel>
  );
};

TheoryTopic.propTypes = {
  id: PropTypes.string.isRequired,
};
