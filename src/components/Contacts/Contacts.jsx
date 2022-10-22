import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props.state;
    console.log('contacts :', contacts.name);
    console.log('filter :', filter);
    const filterContact = contacts.filter(element => filter !== contacts);
    return (
      <ul>
        {filterContact.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    );
  }
}
