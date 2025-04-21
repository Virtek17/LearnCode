import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/MyTabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import SimpleTile from "../Components/SimpleTile/SimpleTile";
import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const TestSubject = ({ id }) => {
  const { topic } = useParams(); // Получаем тему из URL
  const routeNavigator = useRouteNavigator();
  const directions = [
    {
      title: "HTML",
      text: "Основы HTML",
      block: false,
    },
    {
      title: "HTML",
      text: "Форматирование текста",
      block: true,
    },
    {
      title: "HTML",
      text: "Ссылки и изображения",
      block: true,
    },
    {
      title: "HTML",
      text: "Списки",
      block: true,
    },
    {
      title: "HTML",
      text: "Таблицы",
      block: true,
    },
    {
      title: "HTML",
      text: "Формы",
      block: true,
    },
    {
      title: "HTML",
      text: "Семантическая вёрстка",
      block: true,
    },
    {
      title: "HTML",
      text: "Мультимедиа и интерактивные элементы",
      block: true,
    },
    {
      title: "HTML",
      text: "Мета-информация и SEO",
      block: true,
    },
    {
      title: "HTML",
      text: "Доступность (ARIA)",
      block: true,
    },
    {
      title: "CSS",
      text: "Тема 1 по css",
      block: false,
    },
    {
      title: "JavaScipt",
      text: "Тема 1 по js",
      block: false,
    },
  ];

  const theme = directions.find((item) => item.title === topic);
  const needDirection = directions.filter((item) => item.title === topic);

  if (!theme) {
    return <div>Тестов по {topic} нет</div>;
  }

  return (
    <Panel id={id}>
      <PanelHeader>Тесты</PanelHeader>
      <Title title={`Тесты по ${topic}`} />
      <MainContainer>
        {needDirection.map(({ text, block }) => (
          <SimpleTile
            key={text}
            title={text}
            block={block}
            onClick={() => routeNavigator.go(`/testTopic/${text}`)}
          />
        ))}
      </MainContainer>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

TestSubject.propTypes = {
  id: PropTypes.string.isRequired,
};
