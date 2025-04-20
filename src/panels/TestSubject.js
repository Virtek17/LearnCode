import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/MyTabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import Tile from "../Components/Tile/Tile";

export const TestSubject = ({ id }) => {
  const directions = [
    {
      title: "Frontend",
      text: "HTML, CSS, JavaScript",
      img: "kabanFrontend",
    },
    { title: "Backend", text: "C#, PHP", img: "kabanBackend" },
  ];

  return (
    <Panel id={id}>
      <PanelHeader>Тесты</PanelHeader>
      <Title title={"Направления разработки"} />
      <MainContainer>
        {directions.map(({ title, text, img }) => (
          <Tile key={title} title={title} text={text} img={img} />
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
