import React from 'react';
import PropTypes from 'prop-types';
import css from './Menu.module.css';

class Menu extends React.Component {
  render() {
    const {title, children} = this.props

    return (
      <div className={css.menuContainer}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    )
  };
};

export default Menu;