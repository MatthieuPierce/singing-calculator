import React from 'react';
import Button from './Button';
import Display from './Display';



class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayArray: [],
      displayString: 0
    }
  }

  buttonsList = [
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
      category: "operator",
    },
  ];




  render() {

    return (
      <div className="calc-container">
        <Display />
        <div className="button-grid container">
          <div className="row g-2">
            {this.buttonsList.map(butt => {
              return (
                <Button 
              btnId={butt.id} 
              displaySymbol={butt.displaySymbol} />
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