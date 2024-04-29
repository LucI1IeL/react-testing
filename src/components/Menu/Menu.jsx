import React from 'react';
import PropTypes from 'prop-types';
import css from './Menu.module.css';

const Menu = ({title, children}) => {
  return (
    <div className={css.menuContainer}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}

Menu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Menu

