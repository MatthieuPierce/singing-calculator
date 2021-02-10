import React from 'react';

const Display = ({formulaString, currentNumber, displayValue, formulaArray}) => {
  return (
    <div className="display text-end display-2 border px-4 py-1 my-2" id="display">
      <h3>Formula array (and currentNumber):
        <ul className="list-inline">
          {formulaArray.map((val, index) => {
            if (typeof val === "string") {
              return <li className="list-inline-item" key={index}>{val}</li>;
            } else {
              return <li className="list-inline-item text-secondary" key={index}>{val.displaySymbol}</li>;
            }
          })}
          <li 
            key="itsAlwaysTheCurrentNumber"
            className="list-inline-item">
              {(currentNumber !== "0")
                ? currentNumber
                : ""}
          </li>
        </ul>
      </h3>
      <h3>Formula string: 
        <code>{formulaString} </code>
      </h3>
      <h3>Current Number:
          <code>{currentNumber}</code>
      </h3>
      <h3>Display value:
        <code>{displayValue}</code>
      </h3>
    </div>
  )
}

export default Display;