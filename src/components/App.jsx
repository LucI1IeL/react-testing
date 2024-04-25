import MenuItem from './MenuItem/MenuItem';
import salads from './data/salads.json';

export const App = () => {
  return (
    <div>
      {salads.map(({ name, description, dressing, imgUrl, price }) => (
        <MenuItem
          key={name}
          name={name}
          description={description}
          dressing={dressing}
          imgUrl={imgUrl}
          price={price}/>
      ))}
    </div>
  );
};



