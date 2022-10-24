import { Component } from 'react';

export class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button onClick={() => this.props.hendelDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
