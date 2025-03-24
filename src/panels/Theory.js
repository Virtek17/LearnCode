import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import Title from "../Components/Title/Title";
import FlexContainer from "../Components/FlexContainer/FlexContainer";
import Tile from "../Components/Tile/Tile";

export const Theory = ({ id }) => {
  const listTheoryLanguage = [
    { title: "html", text: "Структура веб страницы" },
    { title: "css", text: "Стили и оформление" },
    { title: "js", text: "DOM и интерактивность" },
    { title: "React", text: "Фреймворк js" },
    { title: "Vue", text: "Фреймворк js" },
    { title: "SCSS", text: "Фреймворк CSS" },
  ];

  return (
    <Panel id={id}>
      <PanelHeader>Теория</PanelHeader>
      <Title title="Выбери язык программирования" />

      <FlexContainer>
        {listTheoryLanguage.map(({ title, text }) => (
          <Tile key={title} title={title} text={text} />
        ))}
      </FlexContainer>

      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

Theory.propTypes = {
  id: PropTypes.string.isRequired,
};
