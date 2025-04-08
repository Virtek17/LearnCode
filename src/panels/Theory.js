import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import Tile from "../Components/Tile/Tile";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const Theory = ({ id }) => {
  const listTheoryLanguage = [
    { title: "HTML", text: "Структура веб страницы" },
    { title: "CSS", text: "Стили и оформление" },
    { title: "JavaScript", text: "DOM и интерактивность" },
    { title: "React", text: "Фреймворк js" },
    { title: "Vue", text: "Фреймворк js" },
    { title: "SCSS", text: "Фреймворк CSS" },
  ];
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Теория</PanelHeader>
      <Title title="Выбери язык программирования" />

      <MainContainer>
        {listTheoryLanguage.map(({ title, text }) => (
          <Tile
            key={title}
            title={title}
            text={text}
            onClick={() => routeNavigator.go(`/theoryTopic/${title}`)}
          />
        ))}
      </MainContainer>

      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Theory.propTypes = {
  id: PropTypes.string.isRequired,
};
