import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneContact } from 'redux/store';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

const App = () => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(localContacts);
  //   if (parsedContacts) {
  //     dispatch(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  function addContact(name, id, number) {
    const normalizedName = name.toLowerCase();

    const checkByName = contacts.find(
      user => user.name.toLowerCase() === normalizedName
    );
    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        id,
        number,
      };
      dispatch(addPhoneContact(contact));
    }
  }

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filterChange={filterChange} />
        <ContactsList contacts={getFilteredContacts()} />
      </Section>
    </>
  );
};

export default App;
