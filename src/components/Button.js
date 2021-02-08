import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { btnId, displaySymbol } = this.props;

    return (
      <div
      className="col"> 
        <button 
          className="btn btn-lg btn-outline-primary" 
          id={btnId} 
          value={displaySymbol}>{displaySymbol}
        </button>
      </div>

    )
  }
}

export default Button;