import PropType from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import css from './MenuItem.module.css';

const getClassNameForAvailability = availability => {
  switch (availability) {
    case 'Available':
      return css.available;
    case 'Few Left':
      return css.fewLeft;
    case 'Not available':
      return css.notAvailable;
    case 'Seasonal':
      return css.seasonal;
    default:
      return '';
  };
};

const MenuItem = ({ name, description, dressing, imgUrl, price, availability }) => {
  
  const availabilityClass = getClassNameForAvailability(availability)

  return (
    <div className={`${css.menuItemContainer} ${availabilityClass}`}>
      <img className={css.menuItemImg} src={imgUrl} alt={name} />
      <div className={css.menuItemInfo}>
        <h2 className={`${css.menuItemName} ${availabilityClass}`}>
          {name}<span className={`${css.menuItemIcon} ${availabilityClass}`}><AiFillCheckCircle /></span>
        </h2>
        <p className={css.menuItemDescription}>{description}<span>{dressing}</span></p>
        <p className={css.menuItemPrice}>Price: ${price.Individual.toFixed(2)}</p>
      </div>
    </div>
  )
};

export default MenuItem

MenuItem.propType = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  dressing: PropType.string.isRequired,
  imgUrl: PropType.string.isRequired,
  availability: PropType.string.isRequired,
  price: PropType.shape({
        Individual: PropType.number.isRequired
      }).isRequired,
};