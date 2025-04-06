import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import Tile from "../Components/Tile/Tile";

export const Tests = ({ id }) => {
  const directions = [
    { title: "Frontend", text: "HTML, CSS, JavaScript" },
    { title: "Backend", text: "C#, PHP" },
  ];

  return (
    <Panel id={id}>
      <PanelHeader>Тесты</PanelHeader>
      <Title title={"Направления разработки"} />
      <MainContainer>
        {directions.map(({ title, text }) => (
          <Tile key={title} title={title} text={text} />
        ))}
      </MainContainer>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Tests.propTypes = {
  id: PropTypes.string.isRequired,
};
