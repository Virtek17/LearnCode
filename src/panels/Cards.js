import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import Tile from "../Components/Tile/Tile";
import Title from "../Components/Title/Title";
import FlexContainer from "../Components/FlexContainer/FlexContainer";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const Cards = ({ id }) => {
  const tiles = [
    {
      title: "html",
      text: "Структура веб страницы",
      countAllCards: 200,
      countFinishCards: 100,
    },
    {
      title: "css",
      text: "Стили и оформление",
      countAllCards: 300,
      countFinishCards: 50,
    },
    {
      title: "js",
      text: "DOM и интерактивность",
      countAllCards: 100,
      countFinishCards: 80,
    },
  ];

  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Карточки</PanelHeader>
      <Title title="Выбери язык программирования" />

      <FlexContainer>
        {tiles.map(({ title, text, countAllCards, countFinishCards }) => (
          <Tile
            key={title}
            title={title}
            text={text}
            progress={countFinishCards}
            maxProgress={countAllCards}
            onClick={() => routeNavigator.go(`/cardTopic/${title}`)}
          />
        ))}
      </FlexContainer>

      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};
Cards.propTypes = {
  id: PropTypes.string.isRequired,
};
