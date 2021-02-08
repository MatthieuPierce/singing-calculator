import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(this.props)
    // console.log(`handleClick activated for ${this.props.btnId}`);
    this.props.forClick(this.props.btnId)
  }

  render() {
    const { btnId, displaySymbol } = this.props;

    return (
      <div
      className="col"> 
        <button 
          className="btn btn-lg btn-outline-primary" 
          id={btnId} 
          value={displaySymbol}
          onClick={this.handleClick}
          >
          {displaySymbol}
          
        </button>
      </div>

    )
  }
}

export default Button;