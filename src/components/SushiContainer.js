import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { sushis, offset, onAddSushi, onEaten, plates } ) {
  return (
    <div className="belt">
      {sushis.map(sushi => {
      return (
        <Sushi 
          sushi={sushi} 
          key={sushi.id}
          onEaten={onEaten}
          plates={plates}
        />
      )
      })}
      <MoreButton offset={offset} onAddSushi={onAddSushi} />
    </div>
  );
}

export default SushiContainer;
