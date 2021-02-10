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
    const { btnId, displaySymbol, bootStyles, bootPos } = this.props;

    return (
      <div className={`outer-button-div col 
                      ${bootPos}`}>
        <div
        className={`btn btn-lg w-100 px-1 py-2 fs-1 ${bootStyles}`}
        id={btnId}
        role="button"
        value={displaySymbol}
        onClick={this.handleClick}      
          > 
          {/* <button 
            className="btn btn-lg btn-outline-primary" 
            id={btnId} 
            value={displaySymbol}
            onClick={this.handleClick}
            > */}
            {displaySymbol}
            
          {/* </button> */}
        </div>
      </div>
    )
  }
}

export default Button;