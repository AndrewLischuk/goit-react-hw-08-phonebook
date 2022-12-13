import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

const App = () => {
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
