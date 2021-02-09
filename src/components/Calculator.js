import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import Display from './Display';



class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
      displayArray: [],
      displayString: "0",
      outputValue: '',
      outputString: ''
    }
    this.forClick = this.forClick.bind(this);
    this.handleNumeral = this.handleNumeral.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  startingState = {
    currentValue: '0',
    displayArray: [],
    displayString: "0",
    outputValue: '',
    outputString: ''
  }

  buttonsMap = [
    {
      id: "zero",
      displaySymbol: "0",
      formulaValue: "0",
      category: "numeral",
    },
    {
      id: "one",
      displaySymbol: "1",
      formulaValue: "1",
      category: "numeral",

    },
    {
      id: "two",
      displaySymbol: "2",
      formulaValue: "2",
      category: "numeral",
    },
    {
      id: "three",
      displaySymbol: "3",
      formulaValue: "3",
      category: "numeral",
    },
    {
      id: "four",
      displaySymbol: "4",
      formulaValue: "4",
      category: "numeral",
    },
    {
      id: "five",
      displaySymbol: "5",
      formulaValue: "5",
      category: "numeral",
    },
    {
      id: "six",
      displaySymbol: "6",
      formulaValue: "6",
      category: "numeral",
    },
    {
      id: "seven",
      displaySymbol: "7",
      formulaValue: "7",
      category: "numeral",
    },
    {
      id: "eight",
      displaySymbol: "8",
      formulaValue: "8",
      category: "numeral",
    },
    {
      id: "nine",
      displaySymbol: "9",
      formulaValue: "9",
      category: "numeral",
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
      category: "action",
    },
    {
      id: "equals",
      displaySymbol: "=",
      formulaValue: "=",
      category: "action"
    },
    {
      id: "clear",
      displaySymbol: "CLEAR",
      formulaValue: "CLEAR",
      category: "action"
    }
  ];

  forClick(btnId){
    let clickedButton = this.buttonsMap.find(butt => butt.id === btnId);
    // console.log(`forClick sees clickedButton as:`);
    // console.log(clickedButton);
    // console.log(`forClick thinks this is the data: ${data}`);
    switch (clickedButton.category) {
      case "numeral":
        this.handleNumeral(clickedButton);
        break;
      case "operator":
        this.handleOperator(clickedButton);
        break;
      case "action":
        this.handleAction(clickedButton)
      default:
        break;
    }
  }

  handleNumeral(clickedButton){
    // prevent adding extra zeros "at start of number", i.e., when currentValue is 0 or empty
    if (this.state.currentValue === '0') {
      this.setState(
        {
          currentValue: clickedButton.formulaValue
        }
      );
    } else {
      this.setState(
        {
          currentValue: this.state.currentValue + clickedButton.formulaValue
        }
      );
    }
  }
    // variant check with switch, discarded in favor or more elegant above
  //   switch (clickedButton.id) {
  //     case "zero":
  //       // console.log('handleNumeral registered case zero');
  //       console.log(`case zero and current value is ${this.state.currentValue}`)
  //       if (this.state.currentValue === '0') {
  //         console.log(`successful test for this.state.currentValue === '0'`);
  //         break;
  //       } 
  //       else {
  //         this.setState(
  //           {
  //             currentValue: this.state.currentValue + clickedButton.formulaValue
  //           }
  //         );
  //         break;
  //         }
  //       break;
  //     default:
  //       console.log('handleNumeral registered case default');
  //       this.setState(
  //         {
  //           currentValue: this.state.currentValue + clickedButton.formulaValue
  //         }
  //         );
  //         break;
  //   }
  // }

  handleOperator(clickedButton){

  }

  handleAction(clickedButton){
    switch(clickedButton.id) {
      case "decimal": {
        // check that no other decimals exist in the current value
        let regex = new RegExp(/\./, 'i')
        if (regex.test(this.state.currentValue)) {
          console.log("regex test triggered");
          return undefined;
          break;
        } else {
          this.setState({
            currentValue: this.state.currentValue + clickedButton.formulaValue
          });
          break;
        }
      }
      case "clear": {
        //User story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
        this.setState(this.startingState);
        break;
      }
      case "equals": {
        //

      }
      default:
        break;
    } 
  }



  //   this.setState( {
  //     displayString: this.state.displayString + clickedButton.displaySymbol
  //   }
  //   )
  // }



  render() {

    return (
      <div className="calc-container">
        <Display 
          displayString={this.state.displayString}
          currentValue={this.state.currentValue}
          />
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