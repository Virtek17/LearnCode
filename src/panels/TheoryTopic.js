import { FormItem, Panel, PanelHeader, Tabbar } from "@vkontakte/vkui";
// import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useParams } from "@vkontakte/vk-mini-apps-router";
import PropTypes from "prop-types";
import MyTabbar from "../Components/Tabbar/MyTabbar";
import MainContainer from "../Components/MainContainer/MainContainer";
import Select from "../Components/Select/Select";

import {
  Icon28FavoriteOutline,
  Icon28BracketsSlashSquareOutline,
  Icon28PictureStackOutline,
} from "@vkontakte/icons";
import { useState } from "react";
import SelectItem from "../Components/SelectItem/SelectItem";
import { info } from "sass";
import Title from "../Components/Title/Title";

export const TheoryTopic = ({ id }) => {
  // const routeNavigator = useRouteNavigator();
  const { topic } = useParams(); // Получаем тему из URL
  const [activeSelect, setActiveSelect] = useState(null);

  const toggleSelect = (id) => {
    setActiveSelect((prevState) => (prevState === id ? null : id)); // Закрывает текущий, если он был открыт, или открывает новый
  };

  const theoryForTopic = [
    {
      title: "HTML",
      thems: [
        {
          title: "Основы",
          info: [
            {
              text: "div",
              end: false,
              tag: true,
            },
            {
              text: "p",
              end: false,
              tag: true,
            },
            {
              text: "span",
              end: false,
              tag: true,
            },
            {
              text: "img",
              end: true,
              tag: true,
            },
            {
              text: "h1-h6",
              end: false,
              tag: true,
            },
            {
              text: "a",
              end: false,
              tag: true,
            },
          ],
        },
        {
          title: "Семмантика",
          info: [
            {
              text: "header",
              end: false,
              tag: true,
            },
            {
              text: "footer",
              end: false,
              tag: true,
            },
            {
              text: "main",
              end: false,
              tag: true,
            },
            {
              text: "section",
              end: true,
              tag: true,
            },
            {
              text: "asside",
              end: false,
              tag: true,
            },
            {
              text: "article",
              end: false,
              tag: true,
            },
          ],
        },
        {
          title: "Изображения",
          info: [
            {
              text: "img",
              end: true,
              tag: true,
            },
            {
              text: "picture",
              end: false,
              tag: true,
            },
          ],
        },
      ],
    },
    {
      title: "CSS",
      thems: [
        {
          title: "Позиционирование",
          info: [
            {
              text: "position",
              end: false,
              tag: false,
            },
            {
              text: "top, left, right, bottom",
              end: false,
              tag: false,
            },
            {
              text: "z-index",
              end: false,
              tag: false,
            },
            {
              text: "inset",
              end: false,
              tag: false,
            },
          ],
        },
        {
          title: "Flex box",
          info: [
            {
              text: "flex",
              end: false,
              tag: false,
            },
            {
              text: "flex-direction",
              end: false,
              tag: false,
            },
            {
              text: "flex-flow",
              end: false,
              tag: false,
            },
            {
              text: "flex-grow",
              end: false,
              tag: false,
            },
            {
              text: "flex-shrink",
              end: false,
              tag: false,
            },
            {
              text: "flex-wrap",
              end: false,
              tag: false,
            },
            {
              text: "order",
              end: false,
              tag: false,
            },
            {
              text: "flex-basis",
              end: false,
              tag: false,
            },
          ],
        },
        {
          title: "Выравнивание блоков",
          info: [
            {
              text: "justify-content",
              end: false,
              tag: false,
            },
            {
              text: "justify-items",
              end: false,
              tag: false,
            },
            {
              text: "justify-self",
              end: false,
              tag: false,
            },
            {
              text: "align-content",
              end: false,
              tag: false,
            },
            {
              text: "align-items",
              end: false,
              tag: false,
            },
            {
              text: "align-self",
              end: false,
              tag: false,
            },
            {
              text: "gap",
              end: false,
              tag: false,
            },
            {
              text: "place-content",
              end: false,
              tag: false,
            },
            {
              text: "place-items",
              end: false,
              tag: false,
            },
            {
              text: "place-self",
              end: false,
              tag: false,
            },
            {
              text: "row-gap",
              end: false,
              tag: false,
            },
            {
              text: "column-gap",
              end: false,
              tag: false,
            },
          ],
        },
        {
          title: "Размеры и отсупы",
          info: [
            {
              text: "width",
              end: false,
              tag: false,
            },
            {
              text: "height",
              end: false,
              tag: false,
            },
            {
              text: "padding",
              end: false,
              tag: false,
            },
            {
              text: "margin",
              end: false,
              tag: false,
            },
            {
              text: "box-sizing",
              end: false,
              tag: false,
            },
            {
              text: "min()",
              end: false,
              tag: false,
            },
            {
              text: "max()",
              end: false,
              tag: false,
            },
          ],
        },
        {
          title: "Видимость",
          info: [
            {
              text: "opacity",
              end: false,
              tag: false,
            },
            {
              text: "visibility",
              end: false,
              tag: false,
            },
            {
              text: "clip",
              end: false,
              tag: false,
            },
            {
              text: "clip-path",
              end: false,
              tag: false,
            },
            {
              text: "will-change",
              end: false,
              tag: false,
            },
          ],
        },
      ],
    },
    {
      title: "JavaScript",
      thems: [
        {
          title: "Основы",
          info: [
            {
              text: "Переменные const, let, var",
              end: false,
              tag: false,
            },
            {
              text: "if...else",
              end: false,
              tag: false,
            },
            {
              text: "switch",
              end: false,
              tag: false,
            },
            {
              text: "while",
              end: false,
              tag: false,
            },
            {
              text: "for",
              end: false,
              tag: false,
            },
            {
              text: "функция",
              end: false,
              tag: false,
            },
          ],
        },
        {
          title: "Типы данных",
          info: [
            {
              text: "Число",
              end: false,
              tag: false,
            },
            {
              text: "Строка",
              end: false,
              tag: false,
            },
            {
              text: "Булев тип",
              end: false,
              tag: false,
            },
            {
              text: "undefined",
              end: false,
              tag: false,
            },
            {
              text: "null",
              end: false,
              tag: false,
            },
            {
              text: "Символ",
              end: false,
              tag: false,
            },
            {
              text: "Преобразование типов",
              end: false,
              tag: false,
            },
          ],
        },
        {
          title: "Обмен данными с API",
          info: [
            {
              text: "fetch()",
              end: false,
              tag: false,
            },
            {
              text: "async/await",
              end: false,
              tag: false,
            },
          ],
        },
      ],
    },
  ];

  const theory = theoryForTopic.find((item) => item.title === topic);
  console.log(theory);

  if (!theory) {
    return <div>Теории по теме нет</div>;
  }

  return (
    <Panel id={id}>
      <PanelHeader>Теория по {theory.title}</PanelHeader>

      {theory && <Title title={theory.title} />}
      <MainContainer>
        {theory.thems.map(({ title, info }) => (
          <Select
            key={title}
            id={title}
            placeholder={title}
            icon={<Icon28FavoriteOutline />}
            active={activeSelect === title}
            onToggle={() => toggleSelect(title)}
          >
            {info.map(({ text, end, tag, index }) => (
              <SelectItem key={index} text={text} end={end} tag={tag} />
            ))}
          </Select>
        ))}

        {/* <Select
          id="select2"
          placeholder="Семмантика"
          icon={<Icon28BracketsSlashSquareOutline />}
          active={activeSelect === "select2"}
          onToggle={() => toggleSelect("select2")}
        />
        <Select
          id="select3"
          placeholder="Изображения"
          icon={<Icon28PictureStackOutline />}
          active={activeSelect === "select3"}
          onToggle={() => toggleSelect("select3")}
        /> */}
      </MainContainer>
      <Tabbar>
        <MyTabbar />
      </Tabbar>
    </Panel>
  );
};

TheoryTopic.propTypes = {
  id: PropTypes.string.isRequired,
};
