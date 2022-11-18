import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { counterActions } from '../../store/slices/counterSlice';

function Counter({ value, increase, decrease }) {
  return (
    <div>
      <h1>{value}</h1>

      <button onClick={increase} style={{ padding: '16px' }}>
        Increase
      </button>
      <button onClick={decrease} style={{ padding: '16px' }}>
        Decrease
      </button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

const mapDispatchProps = (dispatch) => ({
  increase: bindActionCreators(counterActions.increase, dispatch),
  decrease: bindActionCreators(counterActions.decrease, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(Counter);
