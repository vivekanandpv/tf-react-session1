import React, { Component } from 'react';
import Demo from './Demo';
import Operations from './Operations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, showDemo: true };
    console.log('App: constructor');
  }

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

  toggle = () => {
    this.setState((previous) => {
      return {
        showDemo: !previous.showDemo,
      };
    });
  };

  render() {
    console.log('App: render()');
    return (
      <>
        <div className='container p-5'>
          <h3>Counter: {this.state.counter}</h3>

          <hr />

          <Operations increment={this.increment} decrement={this.decrement} />

          <button className='btn btn-primary' onClick={this.toggle}>
            Toggle
          </button>

          {this.state.showDemo ? <Demo /> : null}
        </div>
      </>
    );
  }
}

export default App;
