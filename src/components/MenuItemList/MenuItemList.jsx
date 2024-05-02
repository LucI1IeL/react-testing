import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';
import css from './MenuItemList.module.css';

class MenuItemList extends React.Component {
  render() {
    const {salads} = this.props
    return (
      <div className={css.menuItemListContainer}>
        {salads.map(({ name, description, dressing, imgUrl, price, availability }) =>
          <MenuItem
            key={name}
            name={name}
            description={description}
            dressing={dressing}
            imgUrl={imgUrl}
            price={price}
            availability={availability}
          />
        )}
      </div>
    )
  }
}

export default MenuItemList;