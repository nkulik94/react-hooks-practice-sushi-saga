import React, { useState } from "react";

function Sushi( { sushi, onEaten, plates } ) {
  const checkPlates = plates.find(plate => plate === sushi.id)
  const isEaten = checkPlates ? true : false
  const [eaten, changeEaten] = useState(isEaten)


  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        changeEaten(!eaten)
        onEaten(sushi.id, !eaten)
      }}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
