import { Panel, Tabbar, PanelHeader } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import MyTabbar from "../Components/MyTabbar/MyTabbar";
import Title from "../Components/Title/Title";
import MainContainer from "../Components/MainContainer/MainContainer";
import SimpleTile from "../Components/SimpleTile/SimpleTile";
import { useParams } from "@vkontakte/vk-mini-apps-router";

export const TestDirection = ({ id }) => {
  const { topic } = useParams(); // Получаем тему из URL
  const directions = [
    {
      direction: "Frontend",
      title: "HTML",
      block: false,
    },
    {
      direction: "Frontend",
      title: "CSS",
      block: true,
    },
    {
      direction: "Frontend",
      title: "JavaScript",
      block: true,
    },
    {
      direction: "Backend",
      title: "PHP",
      block: true,
    },
    {
      direction: "Backend",
      title: "SQL",
      block: true,
    },
    {
      direction: "Backend",
      title: "Wordpress",
      block: true,
    },
  ];

  const theme = directions.find((item) => item.direction === topic);
  const needDirection = directions.filter((item) => item.direction === topic);

  if (!theme) {
    return <div>Тестов по {topic} нет</div>;
  }

  return (
    <Panel id={id}>
      <PanelHeader>Тесты по теме {topic}</PanelHeader>
      <Title title={"Если шаришь - докажи, тогда пойдем дальше"} />
      <MainContainer>
        {needDirection.map(({ title, block }) => (
          <SimpleTile key={title} title={title} icon={block} />
        ))}
      </MainContainer>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

TestDirection.propTypes = {
  id: PropTypes.string.isRequired,
};
