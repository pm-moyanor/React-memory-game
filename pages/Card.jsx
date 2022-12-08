import { useState } from "react";

const Card = ({ color, id }) => {
  const [isOn, setIsOn] = useState(false);


  const toggle = () => setIsOn(!isOn)
  
  return (
    <div
      className="card"
      id={id}
      style={{ backgroundColor: isOn ? color : "grey"}  }
      onClick={toggle}
    >
      <h3>CARD</h3>
    </div>
  );
};

export default Card;
