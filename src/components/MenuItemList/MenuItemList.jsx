import PropType from 'prop-types';
import MenuItem from "components/MenuItem/MenuItem";
import salads from "../data/salads.json";
import './MenuItemList.css'

const MenuItemList = () => {
  return (
    <div className="menuItemListContainer">
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
};

export default MenuItemList;

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
