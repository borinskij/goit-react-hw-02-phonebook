// import { Component } from 'react';
// import { Input } from '../Input/Input.jsx';
// import { nanoid } from 'nanoid';

// // if (this.state.contacts.find(contact => contact.name === name){ return alert('dddd')})

// export class ContactListItem extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   hendelSubmit = event => {
//     event.preventDefault();
//     const id = nanoid();
//     const { name, number } = this.state;
//     console.log('name :', name);
//     this.prors.setState(prevState => {
//       return {
//         contacts: [
//           ...prevState.contacts,
//           { id: id, name: name, number: number },
//         ],
//       };
//     });
//     this.prors.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <>
//         <Input hendelSubmit={this.hendelSubmit} />
//       </>
//     );
//   }
// }
