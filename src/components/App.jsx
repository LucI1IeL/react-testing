import React, { Component } from 'react';
import Menu from './Menu/Menu';
import MenuItemList from './MenuItemList/MenuitemList';
import OrderCounter from './OrderCounter/OrderCounter';
import salads from './data/salads.json';

// class components structure
class App extends Component {
  render() {
    return (
      <div>
        <Menu title="Salads Menu">
          <MenuItemList salads={salads} />
        </Menu>
        <OrderCounter salads={salads}/>
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
