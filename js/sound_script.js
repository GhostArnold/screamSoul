// Получаем ссылку на элементы
const soundButton = document.getElementById('soundButton');
const soundImage = document.getElementById('soundImage');
const audio = document.getElementById('audio');

// Устанавливаем обработчик событий клика
soundButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        soundImage.src = './img/sound_on.svg';
    } else {
        audio.pause();
        soundImage.src = './img/sound_off.svg';
    }
});
audio.addEventListener('ended', function() {
    this.currentTime = 0; // Устанавливаем текущее время в начало
    this.play(); // Запускаем воспроизведение заново
});
