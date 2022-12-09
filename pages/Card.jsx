import { useState } from "react";

const Card = ({ color, id ,flipCard, isOn}) => {
  

  
  
  return (
    <div
      className="card"
      id={id}
      color={color}
      style={{backgroundColor : "grey"}}
      onClick={(e)=> flipCard(e,color)}
    >
      
    </div>
  );
};

export default Card;
