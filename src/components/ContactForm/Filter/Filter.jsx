import styles from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filterValue(e.currentTarget.value));
  };

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
