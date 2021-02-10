import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import Display from './Display';



class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: '',
      displayValue: '0',
      formulaArray: [],
      priorResult: '',
      priorString: ''
    }
    this.forClick = this.forClick.bind(this);
    this.handleNumeral = this.handleNumeral.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleEquals = this.handleEquals.bind(this);

  }

  startingState = {
    currentNumber: '',
    displayValue: '0',
    formulaArray: [],
    priorResult: '',
    priorString: ''
  }

  buttonsMap = [
    {
      id: "seven",
      displaySymbol: "7",
      formulaValue: "7",
      category: "numeral",
      bootStyles: "btn-outline-primary col",
      bootPos: "order-2 col-4"

    },
    {
      id: "eight",
      displaySymbol: "8",
      formulaValue: "8",
      category: "numeral",
      bootStyles: "btn-outline-primary col",
      bootPos: "order-2 col-4"

    },
    {
      id: "nine",
      displaySymbol: "9",
      formulaValue: "9",
      category: "numeral",
      bootStyles: "btn-outline-primary col",
      bootPos: "order-2 col-4"

    },
    {
      id: "four",
      displaySymbol: "4",
      formulaValue: "4",
      category: "numeral",
      bootStyles: "btn-outline-primary col",
      bootPos: "order-2 col-4"

    },
    {
      id: "five",
      displaySymbol: "5",
      formulaValue: "5",
      category: "numeral",
      bootStyles: "btn-outline-primary col",
      bootPos: "order-2 col-4"

    },
    {
      id: "six",
      displaySymbol: "6",
      formulaValue: "6",
      category: "numeral",
      bootStyles: "btn-outline-primary col",
      bootPos: "order-2 col-4"

    },
    {
      id: "one",
      displaySymbol: "1",
      formulaValue: "1",
      category: "numeral",
      bootStyles: "btn-outline-primary",
      bootPos: "order-2 col-4"

    },
    {
      id: "two",
      displaySymbol: "2",
      formulaValue: "2",
      category: "numeral",
      bootStyles: "btn-outline-primary",
      bootPos: "order-2 col-4"

    },
    {
      id: "three",
      displaySymbol: "3",
      formulaValue: "3",
      category: "numeral",
      bootStyles: "btn-outline-primary",
      bootPos: "order-2 col-4"

    },
    {
      id: "zero",
      displaySymbol: "0",
      formulaValue: "0",
      category: "numeral",
      bootStyles: "btn-outline-primary",
      bootPos: "order-2 col-6"
    },
    {
      id: "decimal",
      displaySymbol: ".",
      formulaValue: ".",
      category: "action",
      bootStyles: "btn-outline-secondary",
      bootPos: "order-3 col-2"

    },
    {
      id: "add",
      displaySymbol: "+",
      formulaValue: "+",
      category: "operator",
      bootStyles: "btn-outline-secondary",
      bootPos: "col-6"

    },
    {
      id: "subtract",
      displaySymbol: "-",
      formulaValue: "-",
      category: "operator",
      bootStyles: "btn-outline-secondary",
      bootPos: "col-6"

    },
    {
      id: "multiply",
      displaySymbol: "x",
      formulaValue: "*",
      category: "operator",
      bootStyles: "btn-outline-secondary",
      bootPos: "col-6"

    },
    {
      id: "divide",
      displaySymbol: "÷",
      formulaValue: "/",
      category: "operator",
      bootStyles: "btn-outline-secondary",
      bootPos: "col-6"

    },
    
    {
      id: "equals",
      displaySymbol: "=",
      formulaValue: "=",
      category: "action",
      bootStyles: "btn-secondary",
      bootPos: "col-4 order-last"
    },
    {
      id: "clear",
      displaySymbol: "C",
      formulaValue: "c",
      category: "action",
      bootStyles: "btn-warning",
      bootPos: "order-first col-12"
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
    // if state.formulaArray is empty (no values entered yet) and state.priorResult is not an empty string, then the user has declined to operate on a stored priorResult, so clear priorResult and priorString out
    if (this.state.formulaArray.length === 0 && this.state.priorResult !== '') {
      this.setState({
        priorResult: '',
        priorString: ''
      })
    }
    // prevent adding extra zeros "at start of number", i.e., when currentNumber is 0 or empty
    if (this.state.currentNumber === '0' | this.state.currentNumber === '') {
      this.setState(
        {
          currentNumber: clickedButton.formulaValue,
          displayValue: clickedButton.formulaValue,
        }
      );
    } else {
      this.setState(
        {
          currentNumber: this.state.currentNumber + clickedButton.formulaValue,
          displayValue: this.state.currentNumber + clickedButton.formulaValue,
        }
      );
    }
  }

  handleOperator(clickedButton){
    // if state.formulaArray is empty (no values entered yet) and currentNumber is still empty, we are at the start of a new operation
    if (this.state.formulaArray.length === 0 && this.state.currentNumber === '') {

      // IF there's no priorResult, by pressing an operand first, the user is choosing to act on the initial startingDisplay of 0: push "0" followed by operand object to formulaArray
      if (this.state.priorResult === '') {
        this.setState({
          displayValue: clickedButton.displaySymbol,
          formulaArray: ["0", clickedButton],
        });
      }
      
      //ELSE IF state.priorResult is not an empty string, user has chosen to act on the prior result per 
      // User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
      // move priorResult into the formula array followed by this operator, and clear out state.priorResult and priorString
      else if (this.state.priorResult !== '') {
        this.setState({
          displayValue: clickedButton.displaySymbol,
          formulaArray: [this.state.priorResult, clickedButton],
          priorResult: '',
          priorString: ''
        })
      }
    } 
    // ELSE this is not the start of the formula array, and/or user has already started building a currentNumber. Carry on.
    else {
      // IF the currentNumber is empty (string value '') just push the operator object
      if (this.state.currentNumber === '') {
        this.setState({
          displayValue: clickedButton.displaySymbol,
          formulaArray: [...this.state.formulaArray, clickedButton],
        });
      } 
      // ELSE the currentNumber has been built to some extent, and this operand singnals the end of currentNumber-- currentNumber needs to be pushed to the formulaArray as a string (for later processing when equals is pressed); 
      //followed by pushing the operator itself to formulaArray
      else {
        this.setState({
          displayValue: clickedButton.displaySymbol,
          formulaArray: [...this.state.formulaArray, this.state.currentNumber, clickedButton],
        });
        // also set currentNumber back to base '' (empty)
        this.setState({
          currentNumber: '',
        });
      }
    }
  }

  handleEquals() {
    //User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.
    
    //at the time equals is triggered, formulaArray is an array of numbers and operands.

    // move final currentNumber to a fullFormulaArray (slightly modified this.state.formulaArray to avoid setting state early)
    // n.b. if final currentValue is empty, supply "0" to avoid evaluation errors at the end
    let fullFormulaArray = (this.state.currentNumber === '')
                            ? [...this.state.formulaArray, "0"]
                            : [...this.state.formulaArray, this.state.currentNumber];
    console.log("fullFormulaArray:");
    console.log(fullFormulaArray);

    //reduce/filter through the formula array and remove any surplus consecutive operations:
    let opFilteredArray = [...fullFormulaArray].reduce(
      (acc, curr, i, arr) => {
        // console.log(`at the top of loop ${i}, acc is:`);
        // console.log(acc);

        //snag last index of accululator so .length isn't called repeatedly
        let lastI = 0;
        if (i > 0) {
          // console.log(`opFilteredArray recuder thinks i is now ${i}`);
          // console.log(`opFilteredArray recuder thinks acc is now:`);
          // console.log(acc);
          lastI = (acc.length - 1);
        }
        // console.log(`prior to processing loop ${i}, lastI is ${lastI}`);
        
        //if a number is in the formulaArray, most likely from a prior answer (or a javascript equivalency I missed), pass it into the accumulating array
        if (typeof curr === "number") {
          return [...acc, curr];
        }
        // if current value is a string, it's a string of a stored number from currentValue, so covert it to a number and add it to the accumulated array
        else if (typeof curr === "string") {
          let convertedCurr = Number(curr);
          return [...acc, convertedCurr];
        } 
        // handle objects, which will all be operands
        else if (typeof curr == "object") {
          // if this operand is the final item in the original array, ignore it-- it wouldn't be acting on anything
          if (i === arr.length - 1) {
            return [...acc];
          }

          // check if the prior value on the accumulator is also an operator
          if (typeof acc[lastI] === "object" ) {
            //if so, check if this current value is supposed to be a negative sign by seeing if the next value (referencing the original array) is a string/stored-currentNumber AND whether this current sign is a subtract/minus sign
            if (curr.id === "subtract" && typeof arr[ i + 1] === "string") {
              // if the next value is a string/number and the current value is a subtract, then return the array with both operators intact.
              // i.e. +-7   or --5  or *-2
              return [...acc, curr];
            } else {
              // else these are part of an invalid sequence of operands, so only keep the most recent
              // ie +* or /+ or -/
              let trimmedAcc = acc.slice(0, lastI);
                return [...trimmedAcc, curr] 
              // MAJOR NOTE: this method fails to account for stacking negatives, 
              // ie. 5---7 = -2 but here it would resolve to 5--return 12

              //Implement Recursive Solution to 
              //test case 1: 5 + - 2
              //test case 2: 7 + - 3
              //test case 3: 10 * - - 3
              //test case 4: 13 - - * + - * - + - 6
              //test case 5: 13 - + * + - 6
              // text case 6: 10 +---*--- 3
              // text case 7: 10 ---*--- 3
            }
          } else {
            // else the prior value isn't an operator, so just tack this current operator onto the accumulator
            return [...acc, curr]; 
          }
        } else {              
          console.log(`We're ignoring this value in opFilteredArray, which isn't a string, number, or object: ${curr}`);
          return [...acc];
        }
      }, []
    );
    
    // opFilteredArray is now only Numbers and objects representing valid operands 
    console.log("opFilteredArray:");
    console.log(opFilteredArray);

    // reduce the opFilteredArray into a single string so we can evaluate it all at once later
    let filteredForString = [...opFilteredArray].reduce(
      ( acc, curr ) => {
        switch (typeof curr) {
          case "number": {
            return `${acc} ${curr}`;
            break;
          }
          case "object": {
            return `${acc} ${curr.formulaValue}`;
          }
        }
      }, ''
    );

    console.log("filteredForString:");
    console.log(filteredForString);

    // stringParse is function to return the result of an inner function that returns (and therefore evaluates) the input string
    function stringParse(string){
      return Function(`'use strict'; return (${string})`)();
    }    

    console.log("stringParse(filteredForString:");
    console.log(stringParse(filteredForString));
    
    // that evaluation is the final answer, so supply it to state's display, store answer in priorAnswer, save the filteredForString in priorString  and reset rest of state
    let answer = stringParse(filteredForString);
    console.log(`answer: ${answer}`);

    this.setState({
      currentNumber: '',
      displayValue: answer,
      formulaArray: [],
      priorResult: answer,
      priorString: filteredForString
    });

    // MDN SAMPLES
    // function looseJsonParse(obj){
    //     return Function('"use strict";return (' + obj + ')')();
    // }
    // console.log(looseJsonParse(
    //   "{a:(4-1), b:function(){}, c:new Date()}"
    // ))

    //User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).

    //User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
  }

  handleAction(clickedButton){
    switch (clickedButton.id) {
      case "decimal": {
        // if the current number is empty (at start), supply a zero followed by a decimal
        if (this.state.currentNumber === '') {
          this.setState({
            currentNumber: '0.',
            displayValue: '0.'
          });
          break;
        } else {
          // check that no other decimals exist in the current value. If there are, break without changing anything.
          let regex = new RegExp(/\./, 'i')
          if (regex.test(this.state.currentNumber)) {
            console.log("regex test for decimal triggered");
            return undefined;
            break;
          } else {
            // otherwise, you're in the middle of an as-of-yet undecimaled number, so tag on that decimal, champ!
            this.setState({
              currentNumber: this.state.currentNumber + clickedButton.formulaValue,
              displayValue: this.state.currentNumber + clickedButton.formulaValue,
            });
            break;
          }
        }
      }
      case "clear": {
        //User story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
        this.setState(this.startingState);
        break;
      }
      case "equals": {
        this.handleEquals();
        break;
      }
      default:
        console.log(`unexpected actionHandled for ${clickedButton.id}`);
        break;
    } 
  }

  render() {

    return (
      <div className="calc-container">
        <Display 
          currentNumber={this.state.currentNumber}
          displayValue={this.state.displayValue}
          formulaArray={this.state.formulaArray}
          priorResult={this.state.priorResult}
          priorString={this.state.priorString}
          />
        <div className="container-sm">
          <div className="row row-cols-4 g-1 justify-content-md-center">
            {this.buttonsMap.map(butt => {
              return (
                <Button 
                  btnId={butt.id}
                  key={butt.id} 
                  displaySymbol={butt.displaySymbol} 
                  forClick={this.forClick}
                  bootStyles={butt.bootStyles}
                  bootPos={butt.bootPos}
                  formulaValue={butt.formulaValue}
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