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
      formulaString: "0",
      priorResult: '',
    }
    this.forClick = this.forClick.bind(this);
    this.handleNumeral = this.handleNumeral.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  startingState = {
    currentNumber: '',
    displayValue: '0',
    formulaArray: [],
    formulaString: "0",
    priorResult: '',
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
    // variant check with switch, discarded in favor or more elegant above
  //   switch (clickedButton.id) {
  //     case "zero":
  //       // console.log('handleNumeral registered case zero');
  //       console.log(`case zero and current value is ${this.state.currentNumber}`)
  //       if (this.state.currentNumber === '0') {
  //         console.log(`successful test for this.state.currentNumber === '0'`);
  //         break;
  //       } 
  //       else {
  //         this.setState(
  //           {
  //             currentNumber: this.state.currentNumber + clickedButton.formulaValue
  //           }
  //         );
  //         break;
  //         }
  //       break;
  //     default:
  //       console.log('handleNumeral registered case default');
  //       this.setState(
  //         {
  //           currentNumber: this.state.currentNumber + clickedButton.formulaValue
  //         }
  //         );
  //         break;
  //   }
  // }

  handleOperator(clickedButton){
    // User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

    // if state.formulaArray is empty (no values entered yet) and state.priorResult is not an empty string, move it into the formula array followed by this operator, and clear out state.priorResult
    if (this.state.formulaArray.length === 0 && this.state.priorResult !== '') {
      this.setState({
        displayValue: clickedButton.displaySymbol,
        formulaArray: [this.state.priorResult, clickedButton],
      })
    }
    // in all other cases, operators 1) signal the end of the currentNumber, which must be pushed to the formulaArray
    // 2 the operator itself must be stored in the formulaArray for processing when equals is pressed
    else {
      this.setState({
        displayValue: clickedButton.displaySymbol,
        formulaArray: [...this.state.formulaArray, this.state.currentNumber, clickedButton],
      });
      //currentNumber set back to base '' (empty)
      this.setState({
        currentNumber: '',
      });
    }
  }

  handleAction(clickedButton){
    switch(clickedButton.id) {
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
        //User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

        //at the time equals is triggered, formulaArray is an array of numbers and operands.

        // move final currentNumber to formulaArray
        // this.setState({
        //   formulaArray: [...this.state.formulaArray, this.state.currentNumber],
        // })
        let fullFormulaArray = [...this.state.formulaArray, this.state.currentNumber];

        console.log("fullFormulaArray:")
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
            // if current value is a string, it's a stored number from currentValue, (so covert it to a number and add it to the accumulated array)
            else if (typeof curr === "string") {
              let convertedCurr = Number(curr);
              return [...acc, convertedCurr];
            } 
            // handle objects, which will all be operands
            else if (typeof curr == "object") {
              // if this operand is the final item in the original array, ignore it
              if (i === arr.length - 1) {
                return [...acc];
              }

              // check if the prior value on the accumulator is also an operator
              if (typeof acc[lastI] === "object" ) {

                //if so, check if this could be a negative sign:
                // check if the next value (referencing the original array) is a string/number AND whether this current sign is a subtract/minus sign
                if (curr.id === "subtract" && typeof arr[i+1] === "string") {
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
                return [...acc, curr]; 
              }
            } else {              
              console.log("unexpected value in opFilteredArray")
            }
          }, []
        );
        console.log("opFilteredArray:");
        console.log(opFilteredArray);

        let filteredForString = [...opFilteredArray].reduce(
          (acc, curr, i, arr) => {
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

        function stringParse(string){
          return Function(`'use strict'; return (${string})`)();
        }    

        console.log("stringParse(filteredForString:");
        console.log(stringParse(filteredForString));
        let answer = stringParse(filteredForString);

        this.setState({
          displayValue: answer,
          formulaArray: [],
          currentNumber: '',
          priorResult: answer,
          formulaString: "0",
        })

      //MDN SAMPLES
          // function looseJsonParse(obj){
          //     return Function('"use strict";return (' + obj + ')')();
          // }

          // console.log(looseJsonParse(
          //   "{a:(4-1), b:function(){}, c:new Date()}"
          // ))

        // let createFunction = () => {
        //   return new Function()
        // }

        // function evaluateItAlready(string){
        //   return 
        // }



        //User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).

        //User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

      }
      default:
        break;
    } 
  }

  render() {

    return (
      <div className="calc-container">
        <Display 
          formulaString={this.state.formulaString}
          currentNumber={this.state.currentNumber}
          displayValue={this.state.displayValue}
          formulaArray={this.state.formulaArray}
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