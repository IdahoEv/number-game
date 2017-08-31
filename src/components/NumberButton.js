
import React from 'react';
import PropTypes from 'prop-types';

class NumberButton extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    canPlay: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }

  handleClick = () => {
    if (!this.props.selected && this.props.canPlay() ) {
      this.props.onClick(this.props.id);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, nextProps);
    console.log(this.state, nextState);
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
