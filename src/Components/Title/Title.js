import PropTypes from "prop-types";
import style from "./Title.module.css";

const Title = ({ title }) => {
  return <div className={style.root}>{title}</div>;
};

export default Title;
Title.propTypes = {
  title: PropTypes.string.isRequired, // Ожидаем число, обязательный пропс
};
