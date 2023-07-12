import { useState } from 'react';
import Square from './Square'

const Board = () =>
{
    const [squares, setSquares] = useState(Array(9).fill(null)); 
    const [isXNext, setIsXnext]= useState(false);

    const handleSquare= position =>{

        if(squares[position])
        {
            return;
        }
    setSquares(currentSquares =>
        {
            return currentSquares.map((squareValue,pos) =>
            {
                if(position === pos)
                {
                    return isXNext ?'X': 'O ';
                }
                return squareValue;
            });
        });
        setIsXnext((currentIsXNext)=> !currentIsXNext)
           
    };
    const renderSquare = position  =>
    {
        
       return( 
       <Square 
        value={squares[position]} 
        onClick = {() => handleSquare(position)}

         />
        );
    };
    return (
        < div className="board">
     <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
     </div>
     <div className="board-row">
    { renderSquare(3)}
      {renderSquare(4)}
       {renderSquare(5)}
     </div>
     <div className="board-row"> 
     {renderSquare(6)}
     {renderSquare(7)}
     {renderSquare(8)}
          </div>
     </div> );
};

export default Board; 