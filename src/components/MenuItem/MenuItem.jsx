import React from 'react';
import PropTypes from 'prop-types';
import css from './MenuItem.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiOutlineShoppingCart } from "react-icons/ai";

class MenuItem extends React.Component {
  static propTypes = {
    salads: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        dressing: PropTypes.string,
        imgUrl: PropTypes.string,
        price: PropTypes.object,
        availability: PropTypes.string,
      })
    ).isRequired
  };
  
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
    const { name, description, dressing, imgUrl, price, availability, onOrder } = this.props;

    const availabilityClass = this.getClassNameForAvailability(availability);
    
    return (
      <div className={css.menuItemContainer}>
        <img className={css.menuItemImg} src={imgUrl} alt={name} />
        <div>
          <h1 className={css.menuItemName}>{name}</h1>
          <p className={`${css.menuItemAvailability} ${availabilityClass}`}>{availability}<AiFillCheckCircle className={`${css.menuItemIcon} ${availabilityClass}`} /></p>
        </div>
        <p className={css.menuitemDescription}>{description}<span className={css.menuItemDressing}>{dressing}</span></p>
        <div className={css.menuItemOrderContainer}>
          <h3 className={css.menuItemPrice}>Price: ${price.Individual}</h3>
          <button className={css.menuItemOrderBtn}
            key={name}
            onClick={() => onOrder(name)}
          >
            Order Now
            <AiOutlineShoppingCart className={css.menuItemOrderIcon} />
          </button>
        </div>
      </div>
    );
  };
};

export default MenuItem;