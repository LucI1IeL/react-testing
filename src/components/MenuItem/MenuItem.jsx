import React from 'react';
import PropTypes from 'prop-types';
import css from './MenuItem.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';

class MenuItem extends React.Component {
  getClassNameForAvailability(availability) {
    switch (availability) {
      case 'Available':
        return css.available;
      case 'Few Left':
        return css.fewLeft;
      case 'Not available':
        return css.notAvailable;
      default:
        return '';
    }
  }

  render() {
    // to access props inside render method, we destructure the props using "this.props"
    const { name, description, dressing, imgUrl, price, availability } = this.props;

    const availabilityClass = this.getClassNameForAvailability(availability);
    
    return (
      <div className={css.menuItemContainer}>
        <img className={css.menuItemImg} src={imgUrl} alt={name} />
        <h1 className={css.menuItemName}>{name}<AiFillCheckCircle className={`${css.menuItemIcon} ${availabilityClass}`}/></h1>
        <p className={css.menuitemDescription}>{description}<span className={css.menuItemDressing}>{dressing}</span></p>
        <h3 className={css.menuItemPrice}>Price: ${price.Individual}</h3>
      </div>
    );
  };
};

export default MenuItem;