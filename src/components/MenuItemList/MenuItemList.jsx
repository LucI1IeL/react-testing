import React from 'react';
import PropType from 'prop-types';
import MenuItem from 'components/MenuItem/MenuItem';
// import salads from '../data/salads.json';
import css from './MenuItemList.module.css';

class MenuItemList extends React.Component {
  render() {
    const {salads} = this.props
    return (
    <div className={css.menuItemListContainer}>
      {salads.map(({ name, description, dressing, imgUrl, price, availability }) => (
        <MenuItem
          key={name}
          name={name}
          description={description}
          dressing={dressing}
          imgUrl={imgUrl}
          price={price}
          availability={availability} />
      ))}
    </div>
  );
  }
};

MenuItemList.propType = {
  salads: PropType.arrayOf(
    PropType.shape({
      name: PropType.string.isRequired,
      description: PropType.string.isRequired,
      dressing: PropType.string.isRequired,
      imgUrl: PropType.string.isRequired,
      price: PropType.shape({
        Individual: PropType.number.isRequired
      }).isRequired,
      availability: PropType.string.isRequired
    })
  ).isRequired
};

export default MenuItemList;