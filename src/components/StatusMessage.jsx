import React, { useEffect, useState } from "react";
import 'animate.css';
import ReactConfetti from 'react-confetti';

const StatusMessage = ({ winner, gamingBoard}) => {

const [windowDimension , setwindowDimension ] = useState({width: window.innerWidth, height: window.innerHeight});
    
    const detectSize = () =>{
        setwindowDimension({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(()=>{
        window.addEventListener('resize',detectSize);
        return () =>{
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension]);

const {squares, isXNext}= gamingBoard;
    
    const noMoves= squares.every(squareValue => squareValue !== null);

    const statusMessage  = isXNext ? 'X' : 'O'
   
    
    
    const renderStatusMessage = () => {
        if(winner) {
            return <><h2 className="animate__animated animate__backInDown" >{winner} {' '} IS THE WINNER !</h2> <ReactConfetti width={windowDimension.width} height={windowDimension.height} tweenDuration={1000}/></>
        }
        if(!winner && noMoves)
        {
            return <>
            <h2  className="animate__animated animate__backInDown ">
            <span className="text-orange"> O </span> and{' '} <span className="text-green"> X </span> TIED !
            </h2>
            </>
        }
        if(!winner && !noMoves)
        {
            return <>
            <h4 className="animate__animated animate__flash"   >
            NEXT PLAYER: { ' '}
            <span className={isXNext ? 'text-green' : 'text-orange'}> {statusMessage} </span> 
            </h4>
            </>
        }
        return null;
    };

    return (
         <h6 className="status-message">{renderStatusMessage()} </h6>

    );
};
export default StatusMessage;
