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
