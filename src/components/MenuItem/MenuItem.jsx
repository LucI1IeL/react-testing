import { Fragment } from "react";

export const menuitem = ({ name, description, dressing, imgUrl, price }) => {
  return (
    <Fragment>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}<span>{dressing}</span></p>
    </Fragment>
  )
};

export default menuitem;