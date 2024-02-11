// Ждем, пока загрузится весь контент страницы
window.addEventListener('load', function() {
    // Задержка в 3 секунды
    setTimeout(function() {
        // Получаем элемент .loader
        var loader = document.querySelector('.loader');
        // Добавляем класс, который скрывает элемент
        loader.classList.add('hidden');
    }, 500); // 3000 миллисекунд = 3 секунды
});
