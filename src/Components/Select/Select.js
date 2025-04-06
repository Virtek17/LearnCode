import PropTypes from "prop-types";
import style from "./select.module.scss";
import clsx from "clsx";
import { Icon28ChevronDownOutline } from "@vkontakte/icons";
import SelectItem from "../SelectItem/SelectItem";

const Select = ({ id, placeholder, icon, active, onToggle }) => {
  return (
    <div className={style.select} onClick={onToggle}>
      <div className={style.select__preview}>
        <div className={style.select__name}>
          <span className={style.select__accent}>{icon}</span>
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
        <div className={style.select__content_row}>
          <SelectItem text="table" />
          <SelectItem text="thead" />
          <SelectItem text="tbody" />
        </div>
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
};

export default Select;
