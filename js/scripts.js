function testPlay() {
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    // first move
    play(board, 0, 0, 'X');
    assert(board[0][0] === 'X');

    //second move
    play(board, 1, 1, 'O');
    assert(board[1][1] === 'O');
}

testPlay();