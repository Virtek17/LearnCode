import PropTypes from "prop-types";
import style from "./SimpleTile.module.css";
import clsx from "clsx";
import { useAppearance } from "@vkontakte/vkui";
import { Icon28LockOutline } from "@vkontakte/icons";

const SimpleTile = ({ title, icon = true }) => {
  const appearance = useAppearance();

  return (
    <div
      className={clsx(style.simpleTile, {
        [style.simpleTile__light]: appearance === "light",
        [style.simpleTile__dark]: appearance !== "light",
      })}
    >
      <div
        className={clsx(style.title, {
          [style.title__light]: appearance === "light",
          [style.title__dark]: appearance !== "light",
        })}
      >
        {title}
      </div>
      {icon && <Icon28LockOutline />}
    </div>
  );
};
export default SimpleTile;

SimpleTile.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.bool,
};
