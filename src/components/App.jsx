import React, { Component } from 'react';
import MenuItemList from './MenuItemList/MenuItemList';
import Menu from './Menu/Menu';
import salads from './data/salads.json';

class App extends Component {
  render() {
    return (
    <div>
      <Menu title = "Salads Menu">
        <MenuItemList
          salads={salads}/>
      </Menu>
    </div>
  );
  }
}

export default App;
