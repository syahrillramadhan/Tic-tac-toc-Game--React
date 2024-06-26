export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const calculateStatus = (winner, squares, nextValue, xIsNext) => {
  return winner
    ? `The winner game is : ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Game is Draw`
    : `Next player: ${xIsNext ? "X" : "O"}`;
};

export const calculateNextValue = (squares) => {
  const xCount = squares.filter((square) => square === "X").length;
  const oCount = squares.filter((square) => square === "O").length;

  return xCount === oCount ? "X" : "O";
};
