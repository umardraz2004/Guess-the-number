const startGame = document.getElementById('startGame');
startGame.addEventListener('click', function(e) {
    window.location.href = "Game.html";
});

const aboutBtn = document.getElementById('about');
aboutBtn.addEventListener('click', event => {
    window.location.href = "about.html";
});

const back = document.getElementById('exitBtn');
back.addEventListener('click', function(e) {
    window.location.href = "Start.html";
});