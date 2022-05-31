import React from "react";

function Sushi( { sushi, onEaten, plates } ) {
  const isEaten = plates.find(plate => plate === sushi.id)



  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        if (!isEaten) onEaten(sushi.id, sushi.price)
      }}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
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
