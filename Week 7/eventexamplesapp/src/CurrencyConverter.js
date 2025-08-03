import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const rupees = parseFloat(this.state.rupees);
    const conversionRate = 0.012; 
    if (!isNaN(rupees)) {
      this.setState({ euro: (rupees * conversionRate).toFixed(2) });
    }
  };

  render() {
    return (
      <div>
        <h2>Currency Converter (INR → EUR)</h2>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={this.state.rupees}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <h3>Euro: €{this.state.euro}</h3>
      </div>
    );
  }
}

export default CurrencyConverter;
