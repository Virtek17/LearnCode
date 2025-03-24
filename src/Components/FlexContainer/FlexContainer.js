import PropTypes from "prop-types";
import style from "./FlexContainer.module.css";

const FlexContainer = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default FlexContainer;
FlexContainer.propTypes = {
  children: PropTypes.node, // Позволяет передавать любые React-элементы
};
