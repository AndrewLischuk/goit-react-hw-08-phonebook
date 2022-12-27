import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/authOperations/authOperations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    dispatch(userLogin({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
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
          Log In
        </button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
