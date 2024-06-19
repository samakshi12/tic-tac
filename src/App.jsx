import { useState } from 'react';
import './styles.scss';
import Board from './components/Board.jsx';
import StatusMessage from './components/StatusMessage'; 
import History from './components/History';
import { calculateWinner } from './winner';

 const NEW_GAME = [{squares: Array(9).fill(null), isXNext: false }]
 function App()
 {
  const[history, setHistory] = useState(NEW_GAME);

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
  const onNewGameStart= () =>
   {
    setHistory(NEW_GAME);
    setCurrentMove(0);
   }

  return ( 
    
      <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
     
      <StatusMessage winner ={winner} gamingBoard={gamingBoard}/>
       <Board squares={gamingBoard.squares} handleSquare= {handleSquare} />
        <button 
       type="button" 
       onClick={onNewGameStart} 
       className={`btn-reset ${winner ? 'active' : ''}`}>
       Start New Game
       </button>
       <History history={history} moveTo ={moveTo} currentMove={currentMove} />
       <div className='bg-balls'/>
      </div>
      
      
       );
}

export default App;
