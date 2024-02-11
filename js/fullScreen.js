// Получаем элементы кнопки и контейнера видео
const button = document.querySelector('.blob-btn');
const videoContainer = document.getElementById('video-container');

// Добавляем обработчик события на кнопку
button.addEventListener('click', toggleVideoContainer);

// Функция для показа или скрытия контейнера видео
function toggleVideoContainer() {
    // Переключаем видимость контейнера видео
    if (videoContainer.style.display === 'none') {
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
    }
}





const closeVideoBtn = document.getElementById('closeVideoBtn');
const videoContainer1 = document.getElementById('video-container');

// Добавляем обработчик события на нажатие кнопки
closeVideoBtn.addEventListener('click', function() {
    // Останавливаем воспроизведение видео
    const video = document.getElementById('video');
    video.pause();

    // Скрываем контейнер с видео
    videoContainer1.style.display = 'none';
});
