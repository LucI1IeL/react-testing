import React from "react";
import {InventoryForm} from 'components/InventoryForm/InventoryForm';
import {InventoryList} from 'components/InventoryList/InventoryList';
import css from './Inventory.module.css';

// Steps
// 1. Decide on the structure of the components
// 2. Decide on the states of the components
// 3. Decide what to render based from each state
// 4. Decide the actions that alter each state
// 5. Define the actions that alter each state

// Two approaches to dealing with react forms
// 1. Uncontrolled components pattern
// 2. Controlled components pattern

// It is better to lift/create the state in the Inventory component/Parent instead of the invetory list/child
// so that the inventory form/ other child components can interact with the state in the inventory component/Parent

// we then pass down the state to the inventorylist/child component as props
// so that we can render them in our inventory list component

// STATES --> data flow maybe lifted from child to parent so that all children have access to the data
// PROPS --> data flow directions is parent to child

export class Inventory extends React.Component {
  state = {
    items: [],
    searchTerm: '',
  };

  addItem = newItem => {
    this.setState(prevState => ({
      items: [...prevState.item, newItem]
    }))
  };

  render() {
    const { items, searchTerm } = this.state;
    return (
      <div>
        <h2>Salad Inventory Manager</h2>
        <InventoryForm addItem={this.addItem} />
        <input
          type="text"
          placeholder="Search Inventory"
          value={this.searchTerm}
          onChange={e => this.updateSearchTerm(e.target.value)}
          className={css.searchInput}/>
        <InventoryList items={items} deleteItems={this.deleteItems}/>
      </div>
    );
  };
};