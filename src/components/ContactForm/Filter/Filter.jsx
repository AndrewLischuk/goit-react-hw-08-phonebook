import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filterChange }) => {
  return (
    <>
      <label className={styles.filterLabel}>Filter by name</label>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filterChange}
      />
    </>
  );
};

Filter.prototypes = {
  filterChange: PropTypes.func,
};
