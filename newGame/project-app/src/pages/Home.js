import React from 'react';
//game code
import Board from '../Board';
import Info from '../Info';
import "../css/app.css";
import {useState} from 'react';



const Home = () => {


  //will reset game as needed
  const [reset, setReset] = useState(false);

  //will manage winner
  const [winner, setWinner] = useState('');
  
  //will change use state to true, reseting board
  const resetBoard = () => {
	setReset(true);
  }

return (
	<div>
	<h1>Tic Tac Toe</h1>

 {/* Shrinks the popup when there is no winner */}
 <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                {/* Display the current winner */}
                <div className='winner-text'>{winner}</div>
                {/* Button used to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            {/* Custom made board component comprising of 
            the tic-tac-toe board  */}
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info />




	</div>
);
};

export default Home;
