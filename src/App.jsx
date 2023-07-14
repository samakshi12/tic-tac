import { useState } from 'react';
import './styles.scss';
import Board from './components/Board.jsx';
import StatusMessage from './components/StatusMessage'; 
import History from './components/History';
import { calculateWinner } from './winner';

 function App()
 {
  const[history, setHistory] = useState([{squares: Array(9).fill(null), isXNext: false }]);

   const [currentMove, setCurrentMove] = useState(0);
   const gamingBoard = history[currentMove];
 

  const winner = calculateWinner(gamingBoard.squares);
  

  const handleSquare= position =>{

      if(gamingBoard.squares[position] || winner)
      {
          return;
      }
    setHistory(currentHistory =>
      {
        const isTraversing = currentMove + 1 !== currentHistory.length; 
        const lastState= isTraversing ? currentHistory[currentMove]: history[ history.length -  1];

        const nextState = lastState.squares.map((squareValue, pos ) =>
        {
          if(position === pos)
              { 
                  return lastState.isXNext ?'X': 'O ';
              }
              return squareValue; 
        });
          
        const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastState)+1) : currentHistory;
        return base.concat({ squares: nextState, isXNext: !lastState.isXNext });
      }); 

      setCurrentMove(move => move  + 1);
         
  };

  const moveTo= move => setCurrentMove(move); 

  return ( 
    
      <div className="app">
      <StatusMessage winner ={winner} gamingBoard={gamingBoard}/>;
       <Board squares={gamingBoard.squares} handleSquare= {handleSquare} />
       <h2>Current Game History</h2>
       <History history={history} moveTo ={moveTo} currentMove={currentMove} />
      </div>
      
      
       );
}

export default App;
