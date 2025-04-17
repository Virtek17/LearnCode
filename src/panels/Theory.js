import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/MyTabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import Tile from "../Components/Tile/Tile";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const Theory = ({ id }) => {
  const listTheoryLanguage = [
    { title: "HTML", text: "Структура веб страницы", img: "kabanThinking" },
    { title: "CSS", text: "Стили и оформление", img: "kabanSmart" },
    { title: "JavaScript", text: "DOM и интерактивность", img: "kabanStrong" },
    { title: "React", text: "Фреймворк js", img: "kabanRich" },
    { title: "Vue", text: "Фреймворк js", img: "kabanBackend" },
    { title: "SCSS", text: "Фреймворк CSS", img: "kabanBusy" },
  ];
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Теория</PanelHeader>
      <Title title="Выбери язык программирования" />

      <MainContainer>
        {listTheoryLanguage.map(({ title, text, img }) => (
          <Tile
            key={title}
            title={title}
            img={img}
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
