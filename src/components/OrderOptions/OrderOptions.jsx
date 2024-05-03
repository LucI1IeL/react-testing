import React from 'react';
import PropTypes from 'prop-types';
import css from './OrderOptions.module.css';

class OrderOptions extends React.Component {
  static propTypes = {
    onOrder: PropTypes.func.isRequired,
    salads: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const { onOrder, salads } = this.props;
    return (
      <div className={css.orderOptionsContainer}>
        {salads.map(salad =>
          <button
            key={salad.name}
            onClick={() => onOrder(salad.name)}
            className={css.orderOptionsBtn}>
            Order {salad.name}</button>)}
      </div>
    );
  };
};

export default OrderOptions;