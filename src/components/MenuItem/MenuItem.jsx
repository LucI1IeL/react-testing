import { Fragment } from "react";

const getBgColor = availability => {
  switch (availability) {
    case 'available':
      return '#c5e8d7';
    case 'Few Left':
      return '#f7e2bc';
    case 'Not available':
      return '#e8c5c6';
    case 'Seasonal':
      return '#c5d4e8';
    default:
      throw new Error ('Unsupported availability status - ${availability}')
  };
};

const MenuItem = ({ name, description, dressing, imgUrl, price, availability}) => {
  return (
    <Fragment>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}<span>{dressing}</span></p>
    </Fragment>
  )
};

export default MenuItem