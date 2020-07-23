import React, { Component } from "react";
import Counter from "./Counter";

export class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset(this.props.countercounter)}
          className="btn btn-primary mt-4 mr-3"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onReset={this.onReset}
            OnDecrement={this.props.OnDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
