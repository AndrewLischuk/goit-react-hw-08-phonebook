import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from 'redux/operations';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  // function addContactToPhone(name, number) {
  //   const normalizedName = name.toLowerCase();

  //   const checkByName = contacts.find(
  //     user => user.name.toLowerCase() === normalizedName
  //   );
  //   if (checkByName) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     const contact = {
  //       name,
  //       number,
  //     };
  //     dispatch(addContact(contact));
  //   }
  // }

  const formSubmit = e => {
    e.preventDefault();

    dispatch(userRegistration({ name, email, password }));
    // addContactToPhone(

    // );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.formLabel}>Name</label>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
        />
        <label className={styles.formLabel}>Email</label>
        <input
          className={styles.formInput}
          type="email"
          name="email"
          value={email}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
        />
        <label className={styles.formLabel}>Password</label>
        <input
          className={styles.formInput}
          type="password"
          name="password"
          value={password}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
        <button className={styles.formButton} type="submit">
          Register
        </button>
      </form>
    </>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func,
};
