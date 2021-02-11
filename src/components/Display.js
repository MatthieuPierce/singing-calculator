import React from 'react';

const Display = ({formulaString, currentNumber, displayValue, formulaArray, priorResult, priorString}) => {
  return (
    <div className="text-end display-2 border px-4 py-1 my-2" >
      <h3 className="formula-array-and-current-number">
        <ul className="list-inline">
          {formulaArray.map((val, index) => {
            if (typeof val === "string" | typeof val === "number") {
              return <li className="list-inline-item" key={index}>{val}</li>;
            } else {
              return <li className="list-inline-item text-secondary" key={index}>{val.displaySymbol}</li>;
            }
          })}
          {(currentNumber !== "") &&
            <li 
              key="itsAlwaysTheCurrentNumber01"
              className="list-inline-item text-danger">
              {currentNumber}
            </li>
          }
          {(priorResult) &&
            <li 
            key="resultIfAny"
            className="list-inline-item text-success">
             {priorString} = {priorResult}
            </li>
          }
        </ul>
      </h3>
      {/* <h3>Current Number:
          <code>{currentNumber}</code>
      </h3> */}
      <h3 className="display text-primary" id="display">
        {displayValue}
      </h3>
    </div>
  )
}

export default Display;