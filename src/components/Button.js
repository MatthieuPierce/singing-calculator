import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';



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
    const { btnId, displaySymbol, bootStyles, bootPos, formulaValue } = this.props;
    const keysToHandle = (formulaValue === "=")
                          ?  [formulaValue, "enter"]
                          : [formulaValue];

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
        <KeyboardEventHandler
          handleKeys={keysToHandle}
          handleFocusableElements={true}
          onKeyEvent={(key, e) => {
            // console.log(`do something (handleClick) upon keydown event of ${key}`);
            this.handleClick();
          }} />
        {displaySymbol}
        </div>
      </div>
    )
  }
}

export default Button;