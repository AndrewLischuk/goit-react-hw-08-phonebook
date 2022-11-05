import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, id, number) => {
    const normalizedName = name.toLowerCase();
    const checkByName = this.state.contacts.find(
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
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacnts = this.getFilteredContacts();

    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter filterChange={this.filterChange} />
          <ContactsList
            contacts={filteredContacnts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
