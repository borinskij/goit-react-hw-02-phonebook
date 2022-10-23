import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Input } from './Input/Input.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  hendlerChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  hendelSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${this.state.name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: id, name: name, number: number },
        ],
      };
    });
    // this.setState({ name: '', number: '' });
  };
  hendelDelete = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <Input
            state={this.state}
            hendlerChange={this.hendlerChange}
            hendelSubmit={this.hendelSubmit}
            // hendlerFilter={this.hendlerFilter}
          />
        </Section>
        <Section title={'Contacts'}>
          <Contacts
            state={this.state}
            hendelDelete={this.hendelDelete}

            // name={this.hendelSubmit}
            // number={this.number}
          />
        </Section>
      </>
    );
  }
}
