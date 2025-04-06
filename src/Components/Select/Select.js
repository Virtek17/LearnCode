import PropTypes from "prop-types";
import style from "./select.module.scss";

const Select = ({ placeholder }) => {
  return (
    <div className={style.select}>
      <div></div>
      <div>{placeholder}</div>
      <div></div>
    </div>
  );
};

export default Select;

Select.propTypes = {
  placeholder: PropTypes.string,
};
