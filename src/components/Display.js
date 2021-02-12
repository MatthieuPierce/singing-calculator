import React from 'react';

const Display = ({ currentNumber, displayValue, formulaArray, priorResult, priorString}) => {
  return (
    <div className="text-end border px-3 py-1 mx-2 row" >
        <ul className="list-inline col-12 fs-4">
          {/* placeholder 0 for initialState: */}
          {
            (currentNumber === "" && priorString === "" && displayValue === '0') &&
            <li className="list-inline-item text-danger text-wrap text-break" key="initialState">0</li>
          }
          {/* render the formulaArray as an inline list: */}
          {formulaArray.map((val, index) => {
              if (typeof val === "string" | typeof val === "number") {
                return <li className="list-inline-item text-danger text-wrap text-break" key={index}>{val}</li>;
              } else {
                return <li className="list-inline-item text-secondary text-wrap text-break" key={index}>{val.displaySymbol}</li>;
              }
            })
          }
          {/* render currentNumber at the end of the formulaArray list so the entire formula to be evaluated is on a single line: */}
          {(currentNumber !== "") &&
            <li 
              key="itsAlwaysTheCurrentNumber01"
              className="list-inline-item text-danger text-break">
              {currentNumber}
            </li>
          }
          {/* if there's a priorResult (that hasn't been acted upon yet), render it here */}
          {(priorResult) &&
            <li 
            key="resultIfAny"
            className="list-inline-item text-success text-break">
             { `${priorString} = ${priorResult}` }
            </li>
          }
        </ul>

      {/* "Main" display, emulating traditional calculator display, showing either the most recent operator
         or the currentNumber as it's being built, relayed through displayValue in props  */}  
      <div className="text-primary text-wrap col-12 text-break display-5" id="display">
        {displayValue}
      </div>
    </div>
  )
}

export default Display;