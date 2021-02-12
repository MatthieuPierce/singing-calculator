import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.buttonDiv = React.createRef();
    this.focusOnKeypress = this.focusOnKeypress.bind(this);
    this.buttonBase = `btn btn-lg w-100 py-1 fs-1`;
  }

  handleClick() {
    this.props.forClick(this.props.btnId)
  }

  focusOnKeypress() {
    this.buttonDiv.current.focus();
    //briefly give the current button the "active" class and then remove it on a timer
    //to simulate hover/focus for keypress
    this.buttonDiv.current.className = `${this.buttonBase} ${this.props.bootStyles} active`;
    const styleTimer = () => {
      setTimeout( () => {
        this.buttonDiv.current.className = `${this.buttonBase} ${this.props.bootStyles}`;
      }, 100);
    }
    const timerId = styleTimer();
    return () => {
      clearTimeout(timerId);
    }
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
        className={`${this.buttonBase} ${bootStyles}`}
        id={btnId}
        role="button"
        value={displaySymbol}
        onClick={this.handleClick}
        ref={this.buttonDiv}      
          > 
        <KeyboardEventHandler
          handleKeys={keysToHandle}
          // handleFocusableElements={true}
          onKeyEvent={(key, e) => {            
            // console.log(`simulate focus and handleClick upon keydown event of ${key}`);
            this.focusOnKeypress();
            this.handleClick();
          }} />
        {displaySymbol}
        </div>
      </div>
    )
  }
}

export default Button;