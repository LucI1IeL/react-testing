import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './InventoryForm.module.css';

export class InventoryForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    quantity: '',
  };

  // this is a generic dynamic onChange event handler function which handles the mutation of the state by using dynamic object key
  // handleChange = event => {
  //   console.log(event)
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   })
  // };


// static onChange
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleQuantityChange = event => {
    this.setState({
      quantity: event.target.value,
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const newItem = {
      name: this.state.name,
      quantity: parseInt(this.state.quantity)
    };

    this.props.addItem(newItem);
    this.setState({ name: '', quantity: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
          className={css.input}/>
        <input
          type="number"
          name="quantity"
          placeholder="Stock Quantity"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
          required
          className={css.input}/>
        <button type="submit" className={css.addButton}>
          Add Item to Inventory
        </button>
      </form>    
    );
  };
};