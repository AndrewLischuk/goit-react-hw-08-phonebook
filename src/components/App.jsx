import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(contacts);
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

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList contacts={getFilteredContacts()} />
      </Section>
    </>
  );
};

export default App;
