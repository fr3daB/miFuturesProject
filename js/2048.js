const board = document.getElementById('board');
const message = document.getElementById('message');
const tiles = [];
const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
let moves = 0;

// Shuffle the tiles
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create the board
function createBoard() {
    const shuffledTiles = shuffle([...solution]);
    for (let i = 0; i < 16; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        if (shuffledTiles[i] !== 0) {
            tile.textContent = shuffledTiles[i];
        } else {
            tile.classList.add('blank');
        }
        tiles.push(tile);
        board.appendChild(tile);
    }
}

// Check if the puzzle is solved
function isSolved() {
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].textContent !== solution[i].toString()) {
            return false;
        }
    }
    return true;
}

// Move a tile
function moveTile(index) {
    const blankIndex = tiles.indexOf(tiles.find(tile => tile.classList.contains('blank')));
    const [row, col] = [Math.floor(index / 4), index % 4];
    const [blankRow, blankCol] = [Math.floor(blankIndex / 4), blankIndex % 4];

    if (
        (row === blankRow && (col === blankCol - 1 || col === blankCol + 1)) ||
        (col === blankCol && (row === blankRow - 1 || row === blankRow + 1))
    ) {
        const temp = tiles[blankIndex].textContent;
        tiles[blankIndex].textContent = tiles[index].textContent;
        tiles[index].textContent = temp;
        tiles[blankIndex].classList.remove('blank');
        tiles[index].classList.add('blank');
        moves++;
        if (isSolved()) {
            message.textContent = `Congratulations! You solved the puzzle in ${moves} moves.`;
        }
    }
}

// Initialize the game
createBoard();

// Add click event listeners to the tiles
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => moveTile(index));
});