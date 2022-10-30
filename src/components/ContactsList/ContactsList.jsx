import styles from './ContactsList.module.css';

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
