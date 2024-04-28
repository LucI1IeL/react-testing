import PropType from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
import './MenuItem.css'

const getClassNameForAvailability = availability => {
  switch (availability) {
    case 'Available':
      return 'available';
    case 'Few Left':
      return 'fewLeft';
    case 'Not available':
      return 'notAvailable';
    case 'Seasonal':
      return 'seasonal';
    default:
      return '';
  };
};

const MenuItem = ({ name, description, dressing, imgUrl, price, availability }) => {
  
  const availabilityClass = getClassNameForAvailability(availability)

  return (
    <div className={`menuItemContainer ${availabilityClass}`}>
      <img className="menuItemImg" src={imgUrl} alt={name} />
      <div className="menuItemInfo">
        <h2 className="menuItemName">
          {name}<span className={`menuItemIcon ${availabilityClass}`}><AiFillCheckCircle /></span>
        </h2>
        <p className="menuItemDescription">{description}<span>{dressing}</span></p>
        <p className="menuItemPrice">Price: ${price.Individual.toFixed(2)}</p>
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