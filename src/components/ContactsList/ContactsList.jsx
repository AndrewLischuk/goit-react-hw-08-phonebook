import styles from './ContactsList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, deleteContact }) => (
  <ul className={styles.contactsList}>
    {contacts.map(({ name, id, number }) => {
      return (
        <li key={id}>
          <div className={styles.contactItem}>
            {name}: {number}
            <button onClick={() => deleteContact(id)}>Delete</button>
          </div>
        </li>
      );
    })}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
