// import { nanoid } from 'nanoid';
import { Component } from 'react';

export class Input extends Component {
  render() {
    // const id = nanoid();
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
            type="text"
            name="number"
            pattern="^\+?[0-9\s\-\(\)]+"
            title="+380"
            required
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
