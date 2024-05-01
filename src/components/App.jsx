import React, { Component } from 'react';
import Menu from './Menu/Menu';
import MenuItemList from './MenuItemList/MenuitemList';
import salads from './data/salads.json';

// class components structure
class App extends Component {
  render() {
    return (
      <div>
        <Menu title="Salads Menu">
          <MenuItemList
            salads={salads} />
        </Menu>
      </div>
    );
  };
};

export default App;