import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log('Demo: constructor()');
  }

  componentDidMount() {
    console.log('Demo: componentDidMount()');
  }

  componentDidUpdate() {
    console.log('Demo: componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('Demo: componentWillUnmount()');
  }

  render() {
    console.log('Demo: render()');
    return (
      <>
        <h3>Demo Component: {this.state.counter}</h3>

        <button
          className='btn btn-warning'
          onClick={() => this.setState({ counter: 1 })}
        >
          Change in Demo
        </button>
      </>
    );
  }
}

export default Demo;
