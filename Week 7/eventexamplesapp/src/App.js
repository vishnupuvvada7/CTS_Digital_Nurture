import React, { Component } from "react";
import CurrencyConverter from './currencyconverter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
  };

  sayHello = () => {
    alert("Hello! Counter has been incremented.");
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleClick = (event) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <hr />

        <button onClick={this.handleClick}>Synthetic Event (Click Me)</button>

        <hr />
      
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
