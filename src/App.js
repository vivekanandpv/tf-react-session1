import React, { Component } from 'react';
import Operations from './Operations';

class App extends Component {
  state = { counter: 0 };

  increment = () => {
    this.setState((previousState) => {
      if (previousState.counter < 20) {
        return {
          counter: previousState.counter + 1,
        };
      } else {
        return previousState;
      }
    });
  };

  decrement = () => {
    this.setState((previousState) => {
      if (previousState.counter > 0) {
        return {
          counter: previousState.counter - 1,
        };
      } else {
        return previousState;
      }
    });
  };

  render() {
    return (
      <>
        <div className='container p-5'>
          <h3>Counter: {this.state.counter}</h3>

          <hr />

          <Operations increment={this.increment} decrement={this.decrement} />
        </div>
      </>
    );
  }
}

export default App;
