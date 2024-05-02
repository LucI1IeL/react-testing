import React from 'react';
import PropTypes from 'prop-types';

class OrderOptions extends React.Component {
  render() {
    const { salads } = this.props;
    return (
      <div>
        {salads.map(salad =>
          <button>{salad.name}</button>)}
      </div>
    );
  };
};

export default OrderOptions;