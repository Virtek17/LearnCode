import PropTypes from "prop-types";
import style from "./MainHeader.module.scss";
import { Icon24CupOutline, Icon24FireAltOutline } from "@vkontakte/icons";

const MainHeader = ({ day, place }) => {
  return (
    <div className={style.root}>
      <div className={style.days}>
        <div className={style.icon}>
          <Icon24FireAltOutline />
        </div>
        {day} дней
      </div>
      <div className={style.place}>
        <div className={style.icon}>
          <Icon24CupOutline />
        </div>
        {place} место
      </div>
    </div>
  );
};

export default MainHeader;
MainHeader.propTypes = {
  day: PropTypes.number.isRequired, // Ожидаем число, обязательный пропс
  place: PropTypes.number.isRequired, // Ожидаем число, обязательный пропс
};
