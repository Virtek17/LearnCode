import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import Title from "../Components/Title/Title";
import FlexContainer from "../Components/FlexContainer/FlexContainer";
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
      <FlexContainer>
        {directions.map(({ title, text }) => (
          <Tile key={title} title={title} text={text} />
        ))}
      </FlexContainer>

      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Tests.propTypes = {
  id: PropTypes.string.isRequired,
};
