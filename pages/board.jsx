import Card from "./card";
import { useState } from "react";

const Board = () => {
  const [isOn, setIsOn] = useState(false);

  const data = [
    { color: "red", id: 1 },
    { color: "blue", id: 2 },
    { color: "green", id: 3 },
    { color: "orange", id: 4 },
    { color: "yellow", id: 5 },
    { color: "purple", id: 6 },
    { color: "red", id: 7 },
    { color: "blue", id: 8 },
    { color: "green", id: 9 },
    { color: "orange", id: 10 },
    { color: "yellow", id: 11 },
    { color: "purple", id: 12 },
  ];
  
  let cardsClicked = [];

  const flipCard = (e,color) => {
    cardsClicked.push(color);
    e.target.style.backgroundColor=color
    //setIsOn(true)
    console.log(cardsClicked);
    if (cardsClicked.length === 2) {
      checkMatch(e,color);
    }
   // toggle()
  };

  //const toggle = () => ;

  const checkMatch = (e,color) => {
    if (cardsClicked[0] === cardsClicked[1]) {
      console.log("match");
    } else {
      e.target.style.backgroundColor="grey"
      console.log("keep going");
    }
    cardsClicked = [];
  };

  return (
    <div>
      <h1>Memory game!</h1>
      <div className="board">
        {data.map((element) => (
          <Card
            color={element.color}
            id={element.id}
            key={element.id}
            flipCard = {flipCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
