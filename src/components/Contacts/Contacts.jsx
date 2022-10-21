import { Component } from 'react';

export class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    );
  }
}
