import React from 'react';
import PropTypes from 'prop-types';
import css from './OrderCounter.module.css';
import MenuItem from 'components/MenuItem/MenuItem';
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

    const orders = {};

    props.salads.forEach(salad => {
      orders[salad.name] = 0
    })

    this.state = {
      orders: orders,
      totalOrders: 0
    };
  };

  createOrder = (saladName) => {
    this.setState(prevState => ({
      orders: {
        ...prevState.orders,
        [saladName]: prevState.orders[saladName] + 1
      },
      totalOrders: prevState.totalOrders + 1
    }));
  };

  resetOrders = () => {
    const resetOrders = {};

    Object.keys(this.state.orders).forEach(saladName => {
      resetOrders[saladName] = 0;
    });

    this.setState({
      orders: resetOrders,
      totalOrders: 0
    });
  };

   


  render() {
    const { orders, totalOrders } = this.state;
    const { salads } = this.props

    return (
      <div className={css.orderCounterContainer}>
        <div className={css.cardsContainer}>
          {salads.map(({ name, description, dressing, imgUrl, price, availability }) =>
            <MenuItem
              key={name}
              name={name}
              description={description}
              dressing={dressing}
              imgUrl={imgUrl}
              price={price}
              availability={availability}
              onOrder={this.createOrder}
            />
          )}
        </div>
        {/* <OrderOptions onOrder={this.createOrder} salads={this.props.salads}/> */}
        <OrderStatistics orders={orders} totalOrders={totalOrders}/>
        <button className={css.resetButton} onClick={this.resetOrders}>Reset Orders</button>
      </div>
    );
  };
};

export default OrderCounter;