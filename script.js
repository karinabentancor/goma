document.getElementById('toggleAside').addEventListener('click', function() {
    document.getElementById('asideMenu').classList.toggle('active');
});

document.getElementById('closeAside').addEventListener('click', function() {
    document.getElementById('asideMenu').classList.remove('active');
});
