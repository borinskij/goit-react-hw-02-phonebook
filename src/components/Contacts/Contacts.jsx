import { Component } from 'react';

export class Contacts extends Component {
  render() {
    // console.log('propsContacts', this.props);
    // const { name, number } = this.props.state;
    return (
      <ul>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            {item.name} {item.number}
          </li>
        ))}
      </ul>
    );
  }
}

// export const Contacts = ({ contacts }) => {
//   return (
//     <ul>
//       {this.state.contacts.map(item => (
//         <li>
//           {item.name} {item.number}
//         </li>
//       ))}
//     </ul>
//   );
// };
