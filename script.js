const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('.front').src === secondCard.querySelector('.front').src;

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
    lockBoard = true;
    setTimeout() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle()  {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.computedStyleMap.order = randomPos;
    });
})();

card.forEach(card => card.addEventListener('click', flipCard));

