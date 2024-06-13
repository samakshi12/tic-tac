const StatusMessage = ({ winner, gamingBoard}) => {
const {squares, isXNext}= gamingBoard;
    
    const noMoves= squares.every(squareValue => squareValue !== null);

    const statusMessage  = isXNext ? 'X' : 'O'
   
    
    
    const renderStatusMessage = () => {
        if(winner) {
            return <><h1>Winner is {winner}</h1></>
        }
        if(!winner && noMoves)
        {
            return <>
            <span className="text-orange"> O </span> and{' '} <span className="text-green"> X </span> tied 
            </>
        }
        if(!winner && !noMoves)
        {
            return <>
            Next Player is { ' '}
            <span className={isXNext ? 'text-green' : 'text-orange'}> {statusMessage} </span> </>
        }
        return null;
    };

    return (
         <h6 className="status-message">{renderStatusMessage()} </h6>

    );
};
export default StatusMessage;
