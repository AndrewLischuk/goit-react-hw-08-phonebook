import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePhoneContact } from 'redux/store';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <div className={styles.contactItem}>
              {name}: {number}
              <button onClick={() => dispatch(deletePhoneContact(id))}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
