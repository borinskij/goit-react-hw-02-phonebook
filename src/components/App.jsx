import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Input } from './Input/Input.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  hendlerChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  hendelSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    console.log('event', name);
    // if (this.state.contacts.find(contact => contact.name === name){retur alert()}
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: id, name: name, number: number },
        ],
      };
    });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <Input
            state={this.state}
            hendlerChange={this.hendlerChange}
            hendelSubmit={this.hendelSubmit}
            hendlerFilter={this.hendlerFilter}
          />
        </Section>
        <Section title={'Contacts'}>
          <Contacts
            state={this.state}
            // name={this.hendelSubmit}
            // number={this.number}
          />
        </Section>
      </>
    );
  }
}
