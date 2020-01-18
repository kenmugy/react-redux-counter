import React from 'react';
import { connect } from 'react-redux';
import './app.css';

function Counter(props) {
  console.log(props);

  const increment = () => {
    props.dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    props.dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='container counter'>
      <button className='btn green' onClick={increment}>
        +
      </button>
      {props.count >= 0 ? <h1>{props.count}</h1> : <h1>{props.count}</h1>}
      <button className='btn red' onClick={decrement}>
        -
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
