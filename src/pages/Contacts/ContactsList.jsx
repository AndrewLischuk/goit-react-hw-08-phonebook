import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contactsOperations/contactsOperations';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { NavLink } from 'react-router-dom';

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
    <>
      <ul className={styles.contactsList}>
        {isLoading && <span>Loading...</span>}
        {error && (
          <span>
            {error.message} - {error.code}`
          </span>
        )}
        {filteredContacts.length === 0 && (
          <span>There are no contacts in your list yet</span>
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
      <NavLink to="/add-contact">Add Contact</NavLink>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};
