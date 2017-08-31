
import React from 'react';
import PropTypes from 'prop-types';

class NumberButton extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <div className='number'
        style={{ opacity: this.props.selected ? 0.3 : 1.0 }}
        onClick={ this.handleClick }>
        { this.props.number }
      </div>
    );
  }
}

export default NumberButton;
