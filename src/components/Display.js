import React from 'react';

const Display = ({ currentNumber, displayValue, formulaArray, priorResult, priorString}) => {
  const listItemClasses = `list-inline-item text-wrap text-break"`;

  return (
    <div className="text-end border px-3 mx-2 row" >
        <ul className="list-inline col-12 fs-4">
          {/* placeholder 0 for initialState: */}
          {
            (currentNumber === "" && priorString === "" && displayValue === '0') &&
            <li className={`${listItemClasses} text-danger`} key="initialState">0</li>
          }
          {/* render the formulaArray as an inline list: */}
          {formulaArray.map((val, index) => {
              if (typeof val === "string" | typeof val === "number") {
                return <li className={`${listItemClasses} text-danger`} key={index}>{val}</li>;
              } else {
                return <li className={`${listItemClasses} text-secondary`} key={index}>{val.displaySymbol}</li>;
              }
            })
          }
          {/* render currentNumber at the end of the formulaArray list so the entire formula to be evaluated is on a single line: */}
          {(currentNumber !== "") &&
            <li 
              key="itsAlwaysTheCurrentNumber01"
              className={`${listItemClasses} text-danger`}>
              {currentNumber}
            </li>
          }
          {/* if there's a priorResult (that hasn't been acted upon yet), render it here */}
          {(priorResult) &&
            <li 
            key="priorResultIfAny"
            className={`${listItemClasses} text-success`}>
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