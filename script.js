document.getElementById('toggleAside').addEventListener('click', function() {
    document.getElementById('asideMenu').classList.toggle('active');
});

document.getElementById('closeAside').addEventListener('click', function() {
    document.getElementById('asideMenu').classList.remove('active');
});


const texts = [
    "Texto aleatorio 1",
    "Texto aleatorio 2",
    "Texto aleatorio 3",
    "Texto aleatorio 4",
    "Texto aleatorio 5",
];

const carouselItems = document.querySelectorAll('.carousel-item h5');

carouselItems.forEach((item, index) => {
    item.textContent = texts[Math.floor(Math.random() * texts.length)];
});