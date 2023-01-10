import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/authOperations/authOperations';
import { Section } from 'components/Section/Section';

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

  const formSubmit = e => {
    e.preventDefault();

    dispatch(userRegistration({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section>
      <div className={styles.wrapper}>
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
            required
            onChange={onChangeInput}
          />
          <label className={styles.formLabel}>Password</label>
          <input
            className={styles.formInput}
            type="password"
            name="password"
            value={password}
            required
            onChange={onChangeInput}
          />
          <button className={styles.formButton} type="submit">
            Register
          </button>
        </form>
      </div>
    </Section>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func,
};
