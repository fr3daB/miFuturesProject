const board = document.getElementById('board');
const message = document.getElementById('message');
const continueBtn = document.getElementById('continue');
const cards = [];
const symbols = ['🍎', '🍌', '🍒', '🍓', '🍕', '🍩', '🍭', '🥧'];
const flippedCards = [];
let moves = 0;

// Create the board
function createBoard() {
    const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    for (let i = 0; i < deck.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = deck[i];
        cards.push(card);
        board.appendChild(card);
    }
}

// Flip a card
function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.symbol;
        flippedCards.push(card);
        moves++;
    }

    if (flippedCards.length === 2) {
        if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            message.textContent = 'Match found!';
            flippedCards.length = 0;
            checkWin();
        } else {
            message.textContent = 'No match, try again.';
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    card.textContent = '';
                });
                flippedCards.length = 0;
            }, 1000);
        }
    }
}

// Check if the game is won
function checkWin() {
    const flippedCardCount = cards.filter(card => card.classList.contains('flipped')).length;
    if (flippedCardCount === cards.length) {
        message.textContent = `Congratulations! You won in ${moves} moves.`;
        continueBtn.style.display = 'block';
        cards.forEach(card => card.removeEventListener('click', handleClick));
    }
}

// Initialize the game
createBoard();

// Add click event listeners to the cards
const handleClick = (e) => flipCard(e.currentTarget);
cards.forEach(card => card.addEventListener('click', handleClick));

// Continue button event listener
continueBtn.addEventListener('click', () => {
    // Reset the game or continue to the next level
    location.reload();
});