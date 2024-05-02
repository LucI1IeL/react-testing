import React from 'react';
import PropTypes from 'prop-types';
import css from './OrderCounter.module.css';
import OrderOptions from '../OrderOptions/OrderOptions.jsx';
import OrderStatistics from '../OrderStatistics/OrderStatistics.jsx';

class OrderCounter extends React.Component {
  static propTypes = {
    salads: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        dressing: PropTypes.string,
        imgUrl: PropTypes.string,
        price: PropTypes.object,
        availability: PropTypes.string,
      })
    ).isRequired
  };

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={css.orderCounterContainer}>
        <OrderOptions salads={this.props.salads}/>
        <OrderStatistics/>
        <button>Reset Orders</button>
      </div>
    );
  };
};

export default OrderCounter;