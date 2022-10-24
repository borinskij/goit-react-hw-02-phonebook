import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Form } from './ContactsForm/ContactsForm.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  hendlerChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  hendelSubmit = (name, number) => {
    const id = nanoid();
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: id, name: name, number: number },
        ],
      };
    });
  };
  hendelDelete = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };
  filterMap = () => {
    let filterContact = this.state.contacts.filter(element =>
      element.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filterContact;
  };
  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <Form
            state={this.state}
            hendlerChange={this.hendlerChange}
            hendelSubmit={this.hendelSubmit}
            // hendlerFilter={this.hendlerFilter}
          />
        </Section>
        <Section title={'Filter'}>
          <Filter
            stateFilter={this.state.filter}
            hendlerChange={this.hendlerChange}
          />
        </Section>

        <Section title={'Contacts'}>
          <Contacts
            contacts={this.filterMap()}
            hendelDelete={this.hendelDelete}
          />
        </Section>
      </>
    );
  }
}
