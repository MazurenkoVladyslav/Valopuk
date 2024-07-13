const cards = [
    'url(Astra.jpeg)',
    'url(Breach.jpeg)',
    'url(Brimstone.jpeg)',
    'url(Chamber.jpeg)',
    'url(Clove.jpeg)',
    'url(Cypher.jpeg)',
    'url(Deadlock.jpeg)',
    'url(Fade.jpeg)',
    'url(Gekko.jpeg)',
    'url(Harbor.jpeg)',
    'url(Iso.jpeg)',
    'url(Jett.jpeg)',
    'url(Kayo.jpeg)',
    'url(Killjoy.jpeg)',
    'url(Neon.jpeg)',
    'url(Omen.jpeg)',
    'url(Phoenix.jpeg)',
    'url(Raze.jpeg)',
    'url(Reyna.jpeg)',
    'url(Sage.jpeg)',
    'url(Skye.jpeg)',
    'url(Sova.jpeg)',
    'url(Viper.jpeg)',
    'url(Yoru.jpeg)',
];

function getRandomCards() {
    let selectedCards = [];
    while (selectedCards.length < 1) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];
        if (!selectedCards.includes(card)) {
            selectedCards.push(card);
        }
    }
    return selectedCards;
}

function displayCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';  // очищаємо контейнер
    const randomCards = getRandomCards();
    randomCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = card;
        cardsContainer.appendChild(cardElement);
    });
}

document.getElementById('gadatButton').addEventListener('click', displayCards);

// Показуємо перший набір карт при завантаженні сторінки
displayCards();
