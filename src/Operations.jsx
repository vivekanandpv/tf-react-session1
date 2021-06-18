import React from 'react';

const Operations = (props) => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <button className='btn btn-primary' onClick={props.increment}>
            Increment
          </button>
        </div>
        <div className='col'>
          <button className='btn btn-danger' onClick={props.decrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Operations;
