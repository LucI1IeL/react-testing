import React from 'react'

const menuitem = ({name, description, imgUrl, price}) => {
  return (
    <div style={{display: 'flex'}}>
      <img src="https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-1.jpg" alt="salad" style={{width: '250px'}} />
      <div>
        <h2>Greek Salad</h2>
        <p>Romaine blend, feta cheese, red onions, beets, mild peppers, black olives, grape tomatoes. Served with Nikki's Greek dressing</p>
      </div>
    </div>
  );
};

export default menuitem;