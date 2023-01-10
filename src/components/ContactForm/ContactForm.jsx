import { nanoid } from 'nanoid';
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations/contactsOperations';
import { getContacts } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { Navigate, useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [userName, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const dispatch = useDispatch();
  const { items: contacts } = useSelector(getContacts);

  const onChangeInput = e => {
    const { name, value, id } = e.currentTarget;
    setId(id);
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  function addContactToPhone(name, number, id) {
    const normalizedName = name.toLowerCase();

    const checkByName = contacts.find(
      user => user.name.toLowerCase() === normalizedName
    );
    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
        id,
      };
      dispatch(addContact(contact));
    }
  }

  const formSubmit = e => {
    e.preventDefault();
    addContactToPhone(userName, number, id);
    setName('');
    setNumber('');
    setId('');
    navigate('/contacts');
  };

  // const redirect = () => {
  //   // window.location = '/contacts';
  //   return <Navigate to="/contacts" />;
  // };

  const navigate = useNavigate();

  const inputId = nanoid(6);
  return (
    <Section>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={formSubmit}>
          <label className={styles.formLabel} htmlFor={inputId}>
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            id={inputId}
            value={userName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeInput}
          />
          <label className={styles.formLabel} htmlFor={inputId}>
            Number
          </label>
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            id={inputId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
          <button className={styles.formButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </Section>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
