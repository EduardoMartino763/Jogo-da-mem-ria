const cards = document.querySelectorAll('.card'); //Tive ajuda de IA no JS, mesmo assim nn consegui
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkMatch();
}

function checkMatch() {
    const isMatch = 
    firstCard.querySelector('.verso'). src ===
    secondCard.querySelector('.verso').src;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}