import React from 'react';

const Display = ({displayString, currentValue}) => {
  return (
    <div className="display text-end display-2 border px-4 py-1 my-2" id="display">
      <code>
        {displayString}
      </code>
      <h2>Current value: {currentValue}</h2>
    </div>
  )
}

export default Display;