import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoneContact, getContacts } from 'redux/phoneSlice';
import { getFilter } from 'redux/filterSlice';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(contacts);

  const normalizedFilter = filtered.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <ul className={styles.contactsList}>
      {isLoading && <span>Loading...</span>}
      {error && <span>Error</span>}
      {/* {contacts.length > 0 && <p>It's okay</p>} */}
      {/* {console.log(contacts)} */}
      {contacts.length > 0 &&
        contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <div className={styles.contactItem}>
                {name}: {number}
                <button onClick={() => dispatch(deleteContact(id))}>
                  {/* <button> */}
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
