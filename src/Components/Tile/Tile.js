import PropTypes from "prop-types";

import style from "./tile.module.css";
import { Group } from "@vkontakte/vkui";

import kaban from "../../assets/Kabans/kaban-1.svg";

const Tile = ({ title, text, progress, maxProgress = null, onClick }) => {
  const color = (progress, maxProgress) => {
    const procentDone = (parseInt(progress) / parseInt(maxProgress)) * 100;

    if (procentDone <= 40) {
      return "#EB4250";
    } else if (procentDone <= 70) {
      return "#FFA000";
    } else {
      return "#4CD964";
    }
  };

  return (
    <Group className={style.root} onClick={() => onClick()}>
      <div className={style.wrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
        <img src={kaban} className={style.img} />
      </div>

      {progress !== undefined && (
        <div className={style.progressBarBg}>
          <div
            className={style.progressBar}
            style={{
              width: `${(progress / maxProgress) * 100}%`,
              backgroundColor: color(progress, maxProgress),
            }}
          ></div>
        </div>
      )}
    </Group>
  );
};

export default Tile;
Tile.propTypes = {
  title: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
  text: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
  isLast: PropTypes.bool.isRequired,
  progress: PropTypes.number,
  maxProgress: PropTypes.number,
  onClick: PropTypes.func,
};
