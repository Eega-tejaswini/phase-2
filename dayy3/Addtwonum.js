import React, { Component, createRef } from "react";

class Addtwonum extends Component {
  constructor(props) {
    super(props);
    this.num1 = React.createRef();
    this.num2 = React.createRef();
    this.state = { result : 0 };
  }

  handleAddition = () => {
    const num1 = Number(this.num1.current.value);
    const num2 = Number(this.num2.current.value);
    this.setState({ result: num1 + num2 });
  };

  render() {
    return (
      <div>
        <input type="number" ref={this.num1} />
        <input type="number" ref={this.num2} />
        <button onClick={this.handleAddition}>Add</button>
        <h3>Result: {this.state.result}</h3>
      </div>
    );
  }
}

export default Addtwonum;
