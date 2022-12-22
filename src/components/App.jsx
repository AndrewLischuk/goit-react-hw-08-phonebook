import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
