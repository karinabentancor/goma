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

        function submitDateTime() {
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;

            if (date && time) {
                document.getElementById("output").innerHTML = 
                    `<p>Fecha seleccionada: <strong>${date}</strong></p>
                     <p>Hora seleccionada: <strong>${time}</strong></p>`;
            } else {
                alert("Por favor, complete ambos campos.");
            }
        }

