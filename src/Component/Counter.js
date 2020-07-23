import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.counter.value,
    };
  }
  getbadges() {
    let classes = "badge mr-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  }
  formatCodes() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handleDecrement = () => {
    this.setState({ value: this.props.value - 1 });
  };
  render() {
    console.log(this.props);
    return (
      <div className=" m-4 p-4">
        <span className={this.getbadges()}>{this.formatCodes()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary mr-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.OnDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-secondary  ml-2 "
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
