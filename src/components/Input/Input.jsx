import { Component } from 'react';

export class Input extends Component {
  render() {
    return (
      <form onSubmit={this.props.hendelSubmit}>
        <label>
          Name
          <br />
          <input
            onChange={this.props.hendlerChange}
            type="text"
            name="name"
            value={this.props.state.name}
            placeholder="Name User"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number <br />
          <input
            onChange={this.props.hendlerChange}
            value={this.props.state.number}
            placeholder="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button>Add Contact</button>
        <br />
        <br />

        <input
          onChange={this.props.hendlerChange}
          value={this.props.state.filter}
          placeholder="filter"
          type="tel"
          name="filter"
        />
      </form>
    );
  }
}
