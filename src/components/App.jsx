import React, { Component } from 'react';
import Menu from './Menu/Menu';
import MenuItemList from './MenuItemList/MenuitemList';
import OrderCounter from './OrderCounter/OrderCounter';
import { Inventory } from './Inventory/Inventory';
import salads from './data/salads.json';

// class components structure
class App extends Component {
  render() {
    return (
      <div className='appContainer'>
        <Menu title="Salads Menu">
          <MenuItemList salads={salads} />
        </Menu>
        <OrderCounter salads={salads} />
        <Inventory/>
      </div>
    );
  };
};

export default App;

// functional structure
// const App = () => {
//   return (
//     <div>
//       <Menu title="Salads Menu">
//         <MenuItemList salads={salads}/>
//       </Menu>
//     </div>
//   );
// }
