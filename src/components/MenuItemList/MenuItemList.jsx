import MenuItem from "components/MenuItem/MenuItem";
import salads from "../data/salads.json";
import { Fragment } from "react";

const MenuItemList = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default MenuItemList;