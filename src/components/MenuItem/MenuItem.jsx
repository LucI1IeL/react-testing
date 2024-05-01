import React from 'react';
import PropTypes from 'prop-types';
import css from './MenuItem.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';

class MenuItem extends React.Component {
  render() {
    const { name, description, dressing, imgUrl, price, availability } = this.props
    
    return (
      <div>
        <img src="" alt="" />
        <h2>name</h2>
        <p>description<span>dressing</span></p>
        <p>price</p>
      </div>
    );
  };
};

export default MenuItem;