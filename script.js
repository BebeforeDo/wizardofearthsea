const tarotCards = [
    { name: '愚者', image: 'images/Fool.jpg', detailUrl: 'https://www.notion.so/8812c0b0431f4c668a8ad55928e0dece?pvs=4' },
    { name: '魔術師', image: 'images/Magician.jpg', detailUrl: 'https://www.notion.so/df7dd4061964421ebdc6250cc07c29d8?pvs=4' },
    { name: '女祭司', image: 'images/High_Priestess.jpg', detailUrl: 'https://www.notion.so/11422e9535618072947ee383e13399cc?pvs=4' }
];

const card = document.getElementById('card');
const cardName = document.getElementById('cardName');
const readButton = document.getElementById('readButton');
const drawCardButton = document.getElementById('drawCardButton');

//const card = document.getElementById('card');
const img = new Image();
img.src = 'images/back.webp';

img.onload = function() {
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const cardWidth = 330; // 設定寬度
    const cardHeight = cardWidth / aspectRatio; // 根據比例自動計算高度

    card.style.width = `${cardWidth}px`;
    card.style.height = `${cardHeight}px`;
    card.style.background = `url('${img.src}') no-repeat center/contain`;
    card.style.backgroundSize = 'contain';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    card.style.borderRadius = '10px';
    card.style.marginBottom = '20px';
};

drawCardButton.addEventListener('click', () => {
    card.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        const selectedCard = tarotCards[randomIndex];

        const img = new Image();
        img.src = selectedCard.image;

        img.onload = function() {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const cardWidth = 300; // 設定寬度
            const cardHeight = cardWidth / aspectRatio; // 根據比例自動計算高度

            card.style.width = `${cardWidth}px`;
            card.style.height = `${cardHeight}px`;
            card.style.background = `url('${selectedCard.image}') no-repeat center/contain`;
            cardName.textContent = selectedCard.name;
            cardName.style.display = 'block';
            readButton.style.display = 'block';
        };

        readButton.onclick = () => {
            window.location.href = selectedCard.detailUrl;
        };
    }, 600);
});