import React, { useState } from "react";

class CalculaterState extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Navya kothur",
      count: 0,
    };
  }
  Updatethestate() {
    //this.preventDefault();
    this.setState({
      name: "Jiyansh",
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.count}</h2>
        <form>
          <input type="text" />
          +
          <input type="text" />
          <button type="submit">Result</button>
        </form>
        <input type="text" id="result" value={this.state.count} readOnly />
        <button name="num">7</button>
        <button onClick={() => this.Updatethestate()}>6</button>
      </div>
    );
  }
}

export default CalculaterState;
