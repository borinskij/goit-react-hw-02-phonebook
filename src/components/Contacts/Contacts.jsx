import { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props.state;

    function filterMap() {
      if (filter !== '') {
        let filterContact = contacts.filter(element =>
          Object.values(element).some(
            el => el.toLowerCase() === filter.toLowerCase()
          )
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
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    );
  }
}
