import React from "react";
import "./App.css";
import Counters from "./Component/Counters";
import Navbar from "./Component/Navbar";
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    }
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((e) => e.id !== counterId);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((e) => {
      e.value = 0;
      return e;
    });
    this.setState([counters]);
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App" >
        <div className="container">
          <Navbar totalCounter={this.state.counters.filter(e => e.value > 0).length} />
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            OnDecrement={this.handleDecrement}
          />
        </div>
      </div>
    );

  }
}

export default App;
