import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props.state;
    function filterMap() {
      if (filter !== '') {
        let filterContact = contacts.filter(element =>
          element.name.toLowerCase().includes(filter.toLowerCase())
        );
        return filterContact;
      }
      return contacts;
    }
    const renderList = filterMap();
    return (
      <ul>
        {renderList.map(item => (
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
