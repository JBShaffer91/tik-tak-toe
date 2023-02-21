// ********** Business Logic **********

class TicTacToe {
  constructor() {
    this.playerX = 'X';
    this.playerO = 'O';
    this.currentPlayer = this.playerX;
    this.boardElement = document.getElementById('board');
    this.board = this.createBoard();
    this.cells = document.querySelectorAll('.cell');
  }

  createBoard() {
    return [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }

  play(row, column) {
    this.board[row][column] = this.currentPlayer;
    this.currentPlayer = this.getNextPlayer(this.currentPlayer);
  }

  getNextPlayer(currentPlayer) {
    if (currentPlayer === this.playerX) {
      return this.playerO;
    } else {
      return this.playerX;
    }
  }

  getAvailableMoves() {
    const moves = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.board[row][col] === null) {
          moves.push({row, col});
        }
      }
    }
    return moves;
  }

  isBoardFull() {
    return this.getAvailableMoves().length === 0;
  }

  checkWin(player) {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (this.board[row][0] === player && this.board[row][1] === player && this.board[row][2] === player) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player) {
        return true;
      }
    }

    // Check diagonals
    if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
      return true;
    }
    if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
      return true;
    }

    return false;
  }

  // ********** UI Logic **********

  attachCellListeners() {
    this.cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        // Check if the cell is already marked
        if (cell.textContent !== '') {
          return;
        }

        // Get the row and column index of the clicked cell
        const cellIndex = parseInt(cell.id.split('-')[1]);
        const row = Math.floor(cellIndex / 3);
        const col = cellIndex % 3;

        // Play the move on the board
        this.play(row, col);

        // Update the UI with the new move
        cell.textContent = this.currentPlayer;

        // Check if the game is over
        if (this.checkWin(this.currentPlayer)) {
          alert(`Player ${this.currentPlayer} wins!`);
          return;
        } else if (this.isBoardFull()) {
          alert('The game is a tie!');
          return;
        }

        // Switch to the next player
        this.currentPlayer = this.getNextPlayer(this.currentPlayer);
      });
    });
  }
}

const ticTacToe = new TicTacToe();
ticTacToe.attachCellListeners();
