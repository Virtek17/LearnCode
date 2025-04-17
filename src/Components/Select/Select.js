import PropTypes from "prop-types";
import style from "./select.module.css";
import clsx from "clsx";
import {
  Icon28ChevronDownOutline,
  Icon24Fullscreen,
  Icon28PictureStackOutline,
  Icon28BracketsSlashSquareOutline,
  Icon28FavoriteOutline,
  Icon24GhostOutline,
  Icon24Poll,
  Icon24Squareshape3VerticalOutline,
  Icon24LocationMapOutline,
  Icon24SortHorizontalOutline,
  Icon24DocumentTextOutline,
} from "@vkontakte/icons";
import React from "react";
import { useAppearance } from "@vkontakte/vk-bridge-react";

const icons = {
  Icon24Fullscreen,
  Icon28PictureStackOutline,
  Icon28BracketsSlashSquareOutline,
  Icon28FavoriteOutline,
  Icon24GhostOutline,
  Icon24Poll,
  Icon24Squareshape3VerticalOutline,
  Icon24LocationMapOutline,
  Icon24SortHorizontalOutline,
  Icon24DocumentTextOutline,
};

const Select = ({ placeholder, icon, active, onToggle, children }) => {
  const appearance = useAppearance();
  return (
    <div
      className={clsx(style.select, {
        [style.select__light]: appearance === "light",
        [style.select__dark]: appearance !== "light",
      })}
      onClick={onToggle}
    >
      <div className={style.select__preview}>
        <div className={style.select__name}>
          <span className={style.select__accent}>
            {React.createElement(icons[icon])}
          </span>
          {placeholder}
        </div>
        <div
          className={clsx(style.select__accent, style.select__icon, {
            [style.select__icon_active]: active,
          })}
        >
          <Icon28ChevronDownOutline />
        </div>
      </div>

      <div
        className={clsx(style.select__content, {
          [style.select__content_view]: active,
        })}
      >
        <div className={style.select__content_row}>{children}</div>
      </div>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default Select;
