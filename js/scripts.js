// ********** Test Logic **********

// Test for isBoardFull function
function testIsBoardFull() {
  let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'O']
  ];
  assert(isBoardFull(board) === true);

  board = [
    ['X', 'O', null],
    ['O', null, null],
    ['O', 'X', 'O']
  ];
  assert(isBoardFull(board) === false);
}

testIsBoardFull();

// Test for getNextPlayer function
function testGetNextPlayer() {
  let currentPlayer = 'X';
  let nextPlayer = getNextPlayer(currentPlayer);
  assert(nextPlayer === 'O');

  currentPlayer = 'O';
  nextPlayer = getNextPlayer(currentPlayer);
  assert(nextPlayer === 'X');
}

testGetNextPlayer();

// Test for getAvailableMoves function
function testGetAvailableMoves() {
  let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', null]
  ];
  assert(getAvailableMoves(board).length === 1);

  board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'O']
  ];
  assert(getAvailableMoves(board).length === 0);

  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  assert(getAvailableMoves(board).length === 9);
}

testGetAvailableMoves();

// ********** Business Logic **********

const playerX = 'X';
const playerO = 'O';

let currentPlayer = playerX;

// Creates an empty board
// Creates an empty board
function createBoard() {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
}


// Plays a move on the board
function play(row, column) {
  board[row][column] = currentPlayer;
  currentPlayer = getNextPlayer(currentPlayer);
}

// Returns the player that will move next
function getNextPlayer(currentPlayer) {
  if (currentPlayer === playerX) {
    return playerO;
  } else {
    return playerX;
  }
}

// Returns an array of available moves
function getAvailableMoves(board) {
  const moves = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        moves.push({row, col});
      }
    }
  }
  return moves;
}

// Returns true if the board is full, false otherwise
function isBoardFull() {
  return getAvailableMoves(board).length === 0;
}

// Returns true if the game is over, false otherwise
function checkWin(player) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}