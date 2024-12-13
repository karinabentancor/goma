// Cambiar a modo oscuro al hacer clic
const switchbutton = document.getElementById('toggle');
const body = document.body;
let theme = localStorage.getItem('theme');

if (theme === 'dark-mode') {

    body.classList.add('dark-mode');
    switchbutton.checked = true;
} else {
    body.classList.remove('dark-mode');
    switchbutton.checked = false;
}

switchbutton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});
