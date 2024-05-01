import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';
import css from './MenuItemList.module.css';

class MenuItemList extends React.Component {
  render() {
    return (
      <div className={css.menuItemListContainer}>
        {salads.map(({ name, description, dressing, imgUrl, price, availability }

          ))};
      </div>      
    );
  };
};

export default MenuItemList;