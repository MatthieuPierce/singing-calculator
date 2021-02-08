import React from 'react';

const Display = ({displayString}) => {
  return (
    <div className="display text-right display-2 border p-2 my-3" id="display">
      <code>
        {displayString}
      </code>
    </div>
  )
}

export default Display;