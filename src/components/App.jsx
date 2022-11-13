import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
      setContacts(prev => [contact, ...prev]);
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

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filterChange={filterChange} />
        <ContactsList
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};

export default App;
