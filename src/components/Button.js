import React, { Component } from 'react';


// Reasons for a class components
// 1 - State
// 2 - Lifecycle Methods
// 3 - Prototype functions for events
class Button extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.clickHandler(this.props.label);
  };

  render() {
    return (
      <button onClick={ this.handleClick } >
        { this.props.label }
      </button>
    );
  }
}

export default Button;
