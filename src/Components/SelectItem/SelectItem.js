import PropTypes from "prop-types";
import style from "./SelectItem.module.scss";
import clsx from "clsx";
import { act, useState } from "react";

const SelectItem = ({ text, end = false }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.select}>
      <div className={style.select_item}>
        <div className={style.select_item__bracket}>{"<"}</div>
        <div className={style.select_item__text}>{text}</div>
        <div className={style.select_item__bracket}>{end ? "/>" : ">"}</div>
      </div>
    </div>
  );
};

export default SelectItem;

SelectItem.propTypes = {
  text: PropTypes.string.isRequired,
  end: PropTypes.bool,
};
