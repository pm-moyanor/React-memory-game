import Card from "./card";

const Board = () => {
let colors = ["red","blue","yellow","green","purple","orange"]
 colors = [...colors,...colors]

console.log(colors)

    return (
        <div>
            <h1>Memory game!</h1>
<div className="board">
    {colors.map( color => <Card/>)}
</div>
            
        </div>

    )
}

export default Board;