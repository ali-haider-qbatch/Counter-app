import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { totalCounter } = this.props
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
             <span className=" m-3 badge badge-secondary">{totalCounter}</span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
