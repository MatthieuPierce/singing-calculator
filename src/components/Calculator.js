import React from 'react';
import Button from './Button';
import Display from './Display';



class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayArray: [],
      displayString: "0"
    }
    this.forClick = this.forClick.bind(this);
  }

  buttonsMap = [
    {
      id: "zero",
      displaySymbol: "0",
      formulaValue: "0",
      category: "numpad",
    },
    {
      id: "one",
      displaySymbol: "1",
      formulaValue: "1",
      category: "numpad",

    },
    {
      id: "two",
      displaySymbol: "2",
      formulaValue: "2",
      category: "numpad",
    },
    {
      id: "three",
      displaySymbol: "3",
      formulaValue: "3",
      category: "numpad",
    },
    {
      id: "four",
      displaySymbol: "4",
      formulaValue: "4",
      category: "numpad",
    },
    {
      id: "five",
      displaySymbol: "5",
      formulaValue: "5",
      category: "numpad",
    },
    {
      id: "six",
      displaySymbol: "6",
      formulaValue: "6",
      category: "numpad",
    },
    {
      id: "seven",
      displaySymbol: "7",
      formulaValue: "7",
      category: "numpad",
    },
    {
      id: "eight",
      displaySymbol: "8",
      formulaValue: "8",
      category: "numpad",
    },
    {
      id: "nine",
      displaySymbol: "9",
      formulaValue: "9",
      category: "numpad",
    },
    {
      id: "add",
      displaySymbol: "+",
      formulaValue: "+",
      category: "operator",
    },
    {
      id: "subtract",
      displaySymbol: "-",
      formulaValue: "-",
      category: "operator",
    },
    {
      id: "multiply",
      displaySymbol: "X",
      formulaValue: "*",
      category: "operator",
    },
    {
      id: "divide",
      displaySymbol: "/ ÷",
      formulaValue: "/",
      category: "operator",
    },
    {
      id: "decimal",
      displaySymbol: ".",
      formulaValue: ".",
      category: "numpad",
    },
    {
      id: "equals",
      displaySymbol: "=",
      formulaValue: "=",
      category: "function"
    },
    {
      id: "clear",
      displaySymbol: "CLEAR",
      formulaValue: "CLEAR",
      category: "function"
    }
  ];

  forClick(btnId){
    let clickedButton = this.buttonsMap.find(butt => butt.id === btnId);
    console.log(`forClick sees clickedButton as ${clickedButton}`);
    // console.log(`forClick thinks this is the data: ${data}`);
    this.setState( {
      displayString: this.state.displayString + clickedButton.displaySymbol
    }
    )
  }



  render() {

    return (
      <div className="calc-container">
        <Display displayString={this.state.displayString}/>
        <div className="button-grid container">
          <div className="row g-2">
            {this.buttonsMap.map(butt => {
              return (
                <Button 
                  btnId={butt.id}
                  key={butt.id} 
                  displaySymbol={butt.displaySymbol} 
                  forClick={this.forClick}
              />
              )
            })
            }
          </div>
        </div>
        

      </div>
    )
  }
}

export default Calculator;