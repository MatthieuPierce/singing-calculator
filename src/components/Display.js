import React from 'react';

const Display = ({ currentNumber, displayValue, formulaArray, priorResult, priorString}) => {
  return (
    <div className="text-end border px-3 py-1 mx-2 row" >
        <ul className="list-inline col-12 fs-4">
          {/* placeholder for initialState: */}
          {
            (currentNumber === "" && priorString === "" && displayValue === '0') &&
            <li className="list-inline-item text-danger text-wrap text-break" key="initialState">0</li>
          }

          {formulaArray.map((val, index) => {
              if (typeof val === "string" | typeof val === "number") {
                return <li className="list-inline-item text-danger text-wrap text-break" key={index}>{val}</li>;
              } else {
                return <li className="list-inline-item text-secondary text-wrap text-break" key={index}>{val.displaySymbol}</li>;
              }
            })
          }
          {(currentNumber !== "") &&
            <li 
              key="itsAlwaysTheCurrentNumber01"
              className="list-inline-item text-danger text-break">
              {currentNumber}
            </li>
          }
          {(priorResult) &&
            <li 
            key="resultIfAny"
            className="list-inline-item text-success text-break">
             { `${priorString} = ${priorResult}` }
            </li>
          }
        </ul>
      <div className="text-primary text-wrap col-12 text-break display-5" id="display">{displayValue}
        
      </div>
    </div>
  )
}

export default Display;