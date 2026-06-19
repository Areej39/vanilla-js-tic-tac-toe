// script.js - tic-tac-toe
const restartBtn = document.getElementById('restart-btn');
const statusText = document.getElementById('status');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let gameActive = true;

const board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick() {
    const index = this.dataset.index;

    if(board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    checkWinner();

    if(gameActive) {
        currentPlayer = currentPlayer === 'X'? 'O': 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    for(const combination of winningCombinations) {
        const [a, b, c] = combination;

        if(board[a] && board[a] === board[b] && board[b] === board[c]) {
            statusText.textContent = `Player ${board[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if(!board.includes("")) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
    }
}

function restartGame() {
    board.fill("");

    cells.forEach((cell) => {
        cell.textContent = "";
    });

    currentPlayer = 'X';
    gameActive = true;
    statusText.textContent = "Player X's turn"
}

cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
});

restartBtn.addEventListener('click', restartGame);