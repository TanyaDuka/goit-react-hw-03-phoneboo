import s from './Filter.module.css';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.container}>
      <label>
        Find contacts by name
        <input
          className={s.inp}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Filter;
