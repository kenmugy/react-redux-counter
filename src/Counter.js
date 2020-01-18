import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';
import './app.css';

function Counter(props) {
  const increment1 = () => {
    props.dispatch(increment());
  };
  const decrement1 = () => {
    props.dispatch(decrement());
  };
  const reset1 = () => {
    props.dispatch(reset());
  };

  return (
    <div className='container'>
      <div className='counter'>
        <button className='btn green' onClick={increment1}>
          +
        </button>
        {props.count >= 0 ? <h1>{props.count}</h1> : <h1>{props.count}</h1>}
        <button className='btn red' onClick={decrement1}>
          -
        </button>
      </div>
      <button className='btn reset black' onClick={reset1}>
        reset
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
