import PropTypes from "prop-types";

import style from "./tile.module.scss";
import { Group } from "@vkontakte/vkui";

import kabanFrontend from "../../assets/Kabans/kaban-frontend.svg";
import kabanBackend from "../../assets/Kabans/kaban-backend.svg";
import kabanThinking from "../../assets/Kabans/kaban-thinking.svg";
import kabanAngry from "../../assets/Kabans/kaban-angry.svg";
import kabanSmart from "../../assets/Kabans/kaban-smart.svg";
import kabanStrong from "../../assets/Kabans/kaban-strong.svg";
import kabanRich from "../../assets/Kabans/kaban-rich.svg";
import kabanBusy from "../../assets/Kabans/kaban-busy.svg";

const imgMap = {
  kabanFrontend,
  kabanBackend,
  kabanThinking,
  kabanAngry,
  kabanSmart,
  kabanStrong,
  kabanRich,
  kabanBusy,
};

const Tile = ({ title, text, img, progress, maxProgress = null, onClick }) => {
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
    <div className={style.root} onClick={() => onClick()}>
      <div className={style.wrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
        <img src={imgMap[img]} className={style.img} />
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
    </div>
  );
};

export default Tile;
Tile.propTypes = {
  title: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
  text: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
  img: PropTypes.string,
  progress: PropTypes.number,
  maxProgress: PropTypes.number,
  onClick: PropTypes.func,
};
