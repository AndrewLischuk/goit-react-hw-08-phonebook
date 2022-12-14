import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoneContact, getContacts } from 'redux/phoneSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(({ name, id, number }) => {
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
};
