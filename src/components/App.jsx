import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (name, id, number) => {
    const contact = {
      name,
      id,
      number,
    };
    console.log(contact);
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <ContactsList contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
