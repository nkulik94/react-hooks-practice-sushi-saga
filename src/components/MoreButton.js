import React from "react";

function MoreButton( { offset, onAddSushi } ) {
  const newOffset = offset === 25 ? 1 : offset + 1
  return <button onClick={() => onAddSushi(newOffset)}>More sushi!</button>;
}

export default MoreButton;
