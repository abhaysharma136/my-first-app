import { useState } from "react";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
export function TicTacToe() {
  
  return (
    <div>
      <h1>Fun Game</h1>
      <Board/>
    </div>
    
  );
}

function Board(){
  const Initial_Board=[ null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null];
  const [board,setBoard]=useState(
   Initial_Board);

    const[isXTurn,setIsXTurn]=useState(true);
    const decideWinner=(board)=>{
      const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];
      for(let i=0;i<lines.length;i++){
        const[a,b,c]=lines[i];
        
        if (board[a]!==null && board[a]===board[b] && board[b]===board[c]){
          console.log(lines[i],a,b,c);
          console.log(board);
          console.log("Winner",board[a]);
          return board[a];
        }
      }
      return null;
    }

    const winner=decideWinner(board);
    const handleClick=(index)=>{
      console.log(index);

      if(!winner && !board[index]){
        const boardCopy=[...board];
        boardCopy[index]=isXTurn?'X':"O";
        setBoard(boardCopy);
        setIsXTurn(!isXTurn);
      }
      
    };

    const restart=()=>{
      setBoard(Initial_Board);
      setIsXTurn(true);
    }
    const { width, height } = useWindowSize()
  return(
    <div>
      {winner?<Confetti width={width}height={height} gravity={0.05}/>:null}
      <div className="board">
      {board.map((val,index)=>(
        <GameBox val={val} onplayerClick={()=>handleClick(index)}/>
      ))}
     
    </div>
    {winner?<h2>winner is:{winner}</h2>:null}
      <button onClick={restart}>Reset</button>
    </div>
    
  )
}

function GameBox({val,onplayerClick}){
  const styles={
    color:val==="X"?'green':"red",
  }
  return(
    <div className="game-box" style={styles}
     onClick={onplayerClick}
     >{val}</div>
  )
}