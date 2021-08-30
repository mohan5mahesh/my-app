import { useState } from "react";
import Button from "@material-ui/core/Button";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
export function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const { width, height } = useWindowSize();
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  };
  const winner = decideWinner(board);
  const [xturn, setisXturn] = useState(true);
  const handleClick = (index) => {
    // console.log(index);
    const boardCopy = [...board];
    if (!winner && !board[index]) {
      boardCopy[index] = xturn ? "X" : "O";
      setisXturn(!xturn);
      setBoard(boardCopy);
    }
  };
  //012
  const reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setisXturn(true);
  };
  return (
    <>
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((value, index) => (
          <Square
            value={value}
            key={index}
            onplayerclick={() => handleClick(index)}
            index={index}
          />
        ))}
      </div>
      <div className="game_message">
        <Button variant="outlined" color="primary" onClick={reset}>
          Restart the game
        </Button>
        <p>{winner ? "The winner is:" + winner : "The match is draw"}</p>
        <p>The player{xturn ? "X" : "O"}has to play</p>
      </div>
    </>
  );
}
const Square = ({ value, onplayerclick }) => {
  const styles = {};
  if (!!value) {
    styles.color = value === "X" ? "green" : "red";
  }
  return (
    <div className="box" onClick={onplayerclick} style={styles}>
      {value}
    </div>
  );
};
