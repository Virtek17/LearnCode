import PropTypes from "prop-types";
import style from "./SelectItem.module.scss";

const SelectItem = ({ text, end = false, tag = false }) => {
  return (
    <div className={style.select}>
      <div className={style.select_item}>
        <div className={style.select_item__bracket}>{tag ? "<" : ""}</div>
        <div className={style.select_item__text}>{text}</div>
        <div className={style.select_item__bracket}>
          {tag ? (end ? "/>" : ">") : ""}
        </div>
      </div>
    </div>
  );
};

export default SelectItem;

SelectItem.propTypes = {
  text: PropTypes.string.isRequired,
  end: PropTypes.bool,
};
