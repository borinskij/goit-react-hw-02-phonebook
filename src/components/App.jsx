import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Input } from './Input/Input.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  hendlerChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  hendelSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
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
          />
        </Section>
        <Section title={'Contacts'}>
          <Contacts
            contacts={this.state.contacts}
            // name={this.hendelSubmit}
            // number={this.number}
          />
        </Section>
      </>
    );
  }
}
