import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './InventoryList.module.css';

export class InventoryList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
      })
    ).isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul className={css.list}>
        {items.map(item => (
          <li key={item.id} className={css.item}>
            {item.name}: {item.quantity}
            <button
              onClick={() => deleteItem(item.id)}
              className={css.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
};