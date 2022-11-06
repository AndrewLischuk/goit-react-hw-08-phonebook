import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  id: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  onChangeInput = e => {
    const { name, value, id } = e.currentTarget;
    this.setState({
      [name]: value,
      id,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, id, number } = this.state;
    this.props.onSubmit(name, id, number);
    this.reset();
  };

  render() {
    const inputId = nanoid(6);
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.formSubmit}>
          <label className={styles.formLabel} htmlFor={inputId}>
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            id={inputId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeInput}
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
            onChange={this.onChangeInput}
          />
          <button className={styles.formButton} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
