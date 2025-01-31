import React, {useState} from 'react'
import Square from '../Square/Square'
import './Board.css' 

function Board() {

    const [state, setState] = React.useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = React.useState(true)

    const calculateWinner = (squares) => { 
        const lines = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6], 
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return false
    }

    const resetGame = () => { 
        setState(Array(9).fill(null))
        setXIsNext(true)
    }

    const winner = calculateWinner(state)

    const handleClick = (i) => {
        if (state[i]) {
            return
        }
        const stateCopy = [...state]
        stateCopy[i] = xIsNext ? 'X' : 'O'
        setState(stateCopy)
        setXIsNext(!xIsNext)
    }

    return (
        <>
        <h3>{xIsNext ? 'X' : 'O'}'s Turn</h3>
        <div className="board-container">
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
        {winner ? (
          <div>
            <h1>{winner} Won</h1>
            <button onClick={resetGame}>Play Again</button>
          </div>
        ) : (
          <></>
        )}
      </>
    );
}

export default Board