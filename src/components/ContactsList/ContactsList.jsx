import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/phoneSlice';
import { getFilter } from 'redux/filterSlice';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.contactsList}>
      {isLoading && <span>Loading...</span>}
      {error && (
        <span>
          {error.message} - {error.code}`
        </span>
      )}
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <div className={styles.contactItem}>
                {name}: {number}
                <button onClick={() => dispatch(deleteContact(id))}>
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
